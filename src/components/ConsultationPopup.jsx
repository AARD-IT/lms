import React, { useState, useEffect, useCallback } from 'react'

const AUTO_OPEN_DELAY = 1000

export default function ConsultationPopup() {
  const [open, setOpen] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsSubmitting(true)
    setSubmitMessage(null)

    const form = e.target
    const formData = new FormData(form)

    const countryCode = formData.get('country_code') || ''
    const rawPhone = formData.get('phone') || ''
    const phone = `${countryCode} ${rawPhone}`.trim()

    const payload = {
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      phone: phone,
      status: formData.get('status') || '',
      designation: formData.get('designation') || '',
      location: formData.get('location') || '',
      alternativeNumber: formData.get('alternative_number') || '',
      briefProfileSummary: formData.get('profile_summary') || ''
    }

    const scriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbyMp9Ar8Py1Vjp8j1rO-hqiyiV6ZUiqJTbaK8ysjc5qvuN_N1TNqnRcuu2ZJUX_gGM5FA/exec'

    try {
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      setSubmitMessage({ type: 'success', text: 'Thank you! Your consultation has been booked successfully.' })
      form.reset()
    } catch (error) {
      console.error('Error submitting form to Apps Script:', error)
      setSubmitMessage({ type: 'error', text: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), AUTO_OPEN_DELAY)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (e?.detail?.bootcampId !== undefined) {
        const el = document.getElementById('bootcamp_id')
        if (el) el.value = e.detail.bootcampId
      }
      setOpen(true)
      setBannerVisible(false)
    }
    window.addEventListener('open-consultation-popup', handler)
    return () => window.removeEventListener('open-consultation-popup', handler)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
    setBannerVisible(true)
  }, [])

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) handleClose()
  }, [handleClose])

  const handleBannerOpen = useCallback(() => {
    setBannerVisible(false)
    setOpen(true)
  }, [])

  const handleBannerDismiss = useCallback(() => setBannerVisible(false), [])

  /* Notify FloatingSocials of real banner height when it appears/disappears */
  useEffect(() => {
    const banner = document.getElementById('consult-bottom-banner')
    const h = bannerVisible && banner ? banner.offsetHeight : 0
    window.dispatchEvent(new CustomEvent('banner-visibility-change', { detail: { visible: bannerVisible, height: h } }))
    // Also re-measure after transition settles (banner may have wrapped)
    if (bannerVisible) {
      const tid = setTimeout(() => {
        const h2 = banner ? banner.offsetHeight : 0
        window.dispatchEvent(new CustomEvent('banner-visibility-change', { detail: { visible: true, height: h2 } }))
      }, 450)
      return () => clearTimeout(tid)
    }
  }, [bannerVisible])

  const countryCodes = [
    '+91', '+1', '+7', '+20', '+27', '+30', '+31', '+32', '+33', '+34', '+36', '+39',
    '+40', '+41', '+43', '+44', '+45', '+46', '+47', '+48', '+49', '+51', '+52', '+53',
    '+54', '+55', '+56', '+57', '+58', '+60', '+61', '+62', '+63', '+64', '+65', '+66',
    '+81', '+82', '+84', '+86', '+90', '+92', '+93', '+94', '+95', '+98',
    '+211', '+212', '+213', '+216', '+218', '+220', '+221', '+222', '+223', '+224',
    '+225', '+226', '+227', '+228', '+229', '+230', '+231', '+232', '+233', '+234',
    '+235', '+236', '+237', '+238', '+239', '+240', '+241', '+242', '+243', '+244',
    '+245', '+248', '+249', '+250', '+251', '+252', '+253', '+254', '+255', '+256',
    '+257', '+258', '+260', '+261', '+262', '+263', '+264', '+265', '+266', '+267',
    '+268', '+269', '+290', '+291', '+297', '+298', '+299', '+350', '+351', '+352',
    '+353', '+354', '+355', '+356', '+357', '+358', '+359', '+370', '+371', '+372',
    '+373', '+374', '+375', '+376', '+377', '+378', '+380', '+381', '+382', '+383',
    '+385', '+386', '+387', '+389', '+420', '+421', '+423', '+500', '+501', '+502',
    '+503', '+504', '+505', '+506', '+507', '+508', '+509', '+590', '+591', '+592',
    '+593', '+594', '+595', '+596', '+597', '+598', '+599', '+670', '+672', '+673',
    '+674', '+675', '+676', '+677', '+678', '+679', '+680', '+681', '+682', '+683',
    '+685', '+686', '+687', '+688', '+689', '+690', '+691', '+692', '+850', '+852',
    '+853', '+855', '+856', '+880', '+886', '+960', '+961', '+962', '+963', '+964',
    '+965', '+966', '+967', '+968', '+970', '+971', '+972', '+973', '+974', '+975',
    '+976', '+977', '+992', '+993', '+994', '+995', '+996', '+998',
  ]

  const highlights = [
    { num: '1️⃣', bold: 'Switch Smart –', text: 'How to Transition into Analytics & AI without quitting current job?' },
    { num: '2️⃣', bold: 'Crack Internships & Placements –', text: 'How Fresher, career gap, or working professional secure real opportunities?' },
    { num: '3️⃣', bold: 'Build a Standout Portfolio –', text: 'How to build Industry-level projects that brings organic job calls?' },
    { num: '4️⃣', bold: "Fix What's Missing –", text: 'Already learned Data Science? Identify the gap blocking your breakthrough.' },
    { num: '5️⃣', bold: 'Project under our experts –', text: 'Unlock inbound opportunities through our industrial-level AI program.' },
  ]

  return (
    <>
      <style>{`
        /* ── Overlay ─────────────────────────────────────────── */
        #popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10,15,40,0.72);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999999;
          padding: 16px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          overflow-y: auto;
        }
        #popup-overlay.popup-open {
          opacity: 1;
          pointer-events: all;
        }

        /* ── Card ─────────────────────────────────────────────── */
        .cp-card {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 32px 80px rgba(0,0,0,0.28), 0 8px 24px rgba(37,99,235,0.12);
          width: 100%;
          max-width: 960px;
          position: relative;
          overflow: hidden;
          transform: translateY(40px) scale(0.96);
          opacity: 0;
          transition: transform 0.38s cubic-bezier(0.34,1.45,0.64,1), opacity 0.3s ease;
          margin: auto;
        }
        #popup-overlay.popup-open .cp-card {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        /* blue top bar */
        .cp-card::before {
          content: '';
          display: block;
          height: 5px;
          background: linear-gradient(90deg, #1e3a8a, #2563eb, #60a5fa);
        }

        /* ── Close button ─────────────────────────────────────── */
        .cp-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #f1f5f9;
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          font-size: 16px;
          line-height: 1;
          color: #475569;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000000;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .cp-close:hover {
          background: #e2e8f0;
          color: #0f172a;
          transform: rotate(90deg);
        }
        .cp-mobile-close {
          display: none;
        }

        /* ── Body layout ─────────────────────────────────────── */
        .cp-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 0;
        }

        /* ── Left panel ──────────────────────────────────────── */
        .cp-left {
          background: linear-gradient(160deg, #1e3a8a 0%, #1d4ed8 60%, #2563eb 100%);
          padding: 36px 32px 36px 36px;
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cp-left h2 {
          font-size: 20px;
          font-weight: 800;
          line-height: 1.3;
          color: #fff;
          font-family: Helvetica, Arial, sans-serif;
          margin: 0;
        }
        .cp-left h2 span {
          color: #93c5fd;
        }
        .cp-left-sub {
          font-size: 13px;
          line-height: 1.6;
          color: rgba(255,255,255,0.82);
          font-family: Helvetica, Arial, sans-serif;
          margin: 0;
        }
        .cp-divider {
          height: 1px;
          background: rgba(255,255,255,0.15);
        }
        .cp-highlights-title {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #93c5fd;
          font-family: Helvetica, Arial, sans-serif;
          margin: 0;
        }
        .cp-highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .cp-highlights-list li {
          font-size: 13px;
          color: rgba(255,255,255,0.9);
          line-height: 1.5;
          font-family: Helvetica, Arial, sans-serif;
          display: flex;
          gap: 8px;
          align-items: flex-start;
        }
        .cp-highlights-list li .hi-num {
          flex-shrink: 0;
          font-size: 15px;
        }
        .cp-highlights-list li strong {
          color: #fff;
          font-weight: 700;
        }

        /* ── Right panel (form) ──────────────────────────────── */
        .cp-right {
          padding: 32px 36px 32px 32px;
          display: flex;
          flex-direction: column;
          gap: 0;
          background: #fff;
          overflow-y: auto;
          max-height: 90vh;
        }
        .cp-right h3 {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          font-family: Helvetica, Arial, sans-serif;
          margin: 0 0 4px;
        }
        .cp-right-sub {
          font-size: 12px;
          color: #64748b;
          font-family: Helvetica, Arial, sans-serif;
          margin: 0 0 20px;
        }

        /* ── Form grid ───────────────────────────────────────── */
        .cp-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px 16px;
        }
        .cp-field {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .cp-field.full {
          grid-column: 1 / -1;
        }
        .cp-field label {
          font-size: 12px;
          font-weight: 700;
          color: #374151;
          font-family: Helvetica, Arial, sans-serif;
          letter-spacing: 0.02em;
        }
        .cp-field input,
        .cp-field select,
        .cp-field textarea {
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          padding: 10px 13px;
          font-size: 13px;
          font-family: Helvetica, Arial, sans-serif;
          color: #0f172a;
          background: #f8fafc;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          width: 100%;
          box-sizing: border-box;
        }
        .cp-field input:focus,
        .cp-field select:focus {
          border-color: #2563eb;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
        }
        .cp-field input::placeholder {
          color: #94a3b8;
        }

        /* phone row */
        .cp-phone-row {
          display: flex;
          gap: 8px;
        }
        .cp-phone-row select {
          width: 80px;
          flex-shrink: 0;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          padding: 10px 6px;
          font-size: 13px;
          font-family: Helvetica, Arial, sans-serif;
          background: #f8fafc;
          color: #0f172a;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .cp-phone-row select:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
        }
        .cp-phone-row input {
          flex: 1;
        }

        /* Submit */
        .cp-submit {
          background: linear-gradient(90deg, #1e3a8a, #2563eb);
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 13px 24px;
          font-size: 15px;
          font-weight: 700;
          font-family: Helvetica, Arial, sans-serif;
          cursor: pointer;
          width: 100%;
          margin-top: 6px;
          letter-spacing: 0.02em;
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(37,99,235,0.25);
        }
        .cp-submit:hover {
          opacity: 0.92;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(37,99,235,0.35);
        }

        #form-message p { font-size: 13px; margin-top: 8px; }

        /* ── Sticky Bottom Banner ─────────────────────────────── */
        #consult-bottom-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 99998;
          background: linear-gradient(90deg, #1e3a8a 0%, #2563eb 100%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 14px 28px;
          box-shadow: 0 -4px 24px rgba(30,58,138,0.28);
          transform: translateY(100%);
          transition: transform 0.4s cubic-bezier(0.34,1.2,0.64,1);
        }
        #consult-bottom-banner.banner-visible {
          transform: translateY(0);
        }
        .banner-text {
          font-size: 18px;
          font-weight: 700;
          font-family: Helvetica, Arial, sans-serif;
          flex: initial;
        }
        .banner-text span {
          font-weight: 400;
          font-size: 15px;
          opacity: 0.8;
          display: inline-block;
          margin-left: 8px;
        }
        .banner-cta {
          background: #fff;
          color: #1e3a8a;
          border: none;
          border-radius: 8px;
          padding: 9px 22px;
          font-weight: 700;
          font-size: 14px;
          font-family: Helvetica, Arial, sans-serif;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.2s, transform 0.2s;
        }
        .banner-cta:hover { background: #e0eaff; transform: scale(1.04); }
        .banner-dismiss {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.65);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          flex-shrink: 0;
          transition: color 0.2s;
        }
        .banner-dismiss:hover { color: #fff; }

        /* ── Responsive ──────────────────────────────────────── */
        @media (max-width: 768px) {
          #popup-overlay {
            top: 76px !important;
          }
          .cp-body { grid-template-columns: 1fr; }
          .cp-left { padding: 68px 20px 20px; gap: 14px; } /* Push content down for the absolute close button */
          .cp-left h2 { font-size: 17px; }
          .cp-left h2:first-child { padding-right: 0; }
          .cp-right { padding: 20px; max-height: none; }
          .cp-form-grid { grid-template-columns: 1fr; }
          .cp-field.full { grid-column: 1; }
          .cp-close {
            display: none !important;
          }
          .cp-mobile-close {
            display: flex !important;
            align-items: center;
            justify-content: center;
            gap: 6px;
            position: absolute;
            top: 16px;
            left: 16px;
            background: rgba(255,255,255,0.2) !important;
            color: #fff !important;
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 8px;
            padding: 6px 14px;
            font-size: 13px;
            font-weight: 700;
            font-family: Helvetica, Arial, sans-serif;
            cursor: pointer;
            z-index: 1000000;
            transition: background 0.2s, transform 0.1s;
          }
          .cp-mobile-close:hover {
            background: rgba(255,255,255,0.3) !important;
            color: #fff !important;
          }
          .cp-mobile-close:active {
            transform: scale(0.96);
          }
        }
        /* ── Banner mobile layout ────────────────────────────── */
        @media (max-width: 600px) {
          #consult-bottom-banner {
            padding: 10px 14px;
            gap: 8px;
            flex-wrap: nowrap;
            align-items: center;
          }
          .banner-text { font-size: 14px; }
          .banner-text span { display: none; }
          .banner-cta {
            padding: 8px 14px;
            font-size: 13px;
            white-space: nowrap;
            flex-shrink: 0;
          }
        }
      `}</style>

      <div
        id="popup-overlay"
        className={open ? 'popup-open' : ''}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consult-popup-title"
        onClick={handleOverlayClick}
      >
        <div className="cp-card">
          <button className="cp-close close-x" type="button" aria-label="Close" onClick={handleClose}>
            ✕
          </button>

          <button className="cp-mobile-close" type="button" onClick={handleClose}>
            ✕ Close
          </button>

          <div className="cp-body">
            {/* ── Left: info panel ─────────────────────────── */}
            <div className="cp-left">
              <h2 id="consult-popup-title">
                Book <span>1-1 Consultation</span><br />With Data Scientists Panel
              </h2>
              <p className="cp-left-sub">
                Clarify all your doubts with our Data Experts Panel who empowered <strong style={{ color: '#fff' }}>1000+ aspirants worldwide</strong> to build successful careers in Data Analytics and AI across 11+ industries.
              </p>
              <div className="cp-divider" />
              <p className="cp-highlights-title">What you can discuss?</p>
              <ul className="cp-highlights-list">
                {highlights.map((h, i) => (
                  <li key={i}>
                    <span className="hi-num">{h.num}</span>
                    <span><strong>{h.bold}</strong> {h.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Right: form panel ────────────────────────── */}
            <div className="cp-right">
              <h3>Book Your Free Session</h3>
              <p className="cp-right-sub">Fill in your details — our team will reach out within 24 hours</p>

              <form
                id="consultation-form"
                className="consultation-form"
                onSubmit={handleSubmit}
              >
                <div className="cp-form-grid">
                  {/* Name */}
                  <div className="cp-field">
                    <label>Name *</label>
                    <input type="text" name="name" placeholder="Your full name" required />
                  </div>

                  {/* Email */}
                  <div className="cp-field">
                    <label>Email *</label>
                    <input type="email" name="email" placeholder="your@email.com" required />
                  </div>

                  {/* Phone */}
                  <div className="cp-field">
                    <label>Phone *</label>
                    <div className="cp-phone-row">
                      <select name="country_code" defaultValue="+91" required>
                        {countryCodes.map((cc) => (
                          <option key={cc} value={cc}>{cc}</option>
                        ))}
                      </select>
                      <input type="tel" name="phone" placeholder="98765 43210" pattern="[0-9]{10}" required />
                    </div>
                  </div>

                  {/* Status */}
                  <div className="cp-field">
                    <label>Status *</label>
                    <select name="status" required>
                      <option value="">Select your status</option>
                      <option value="Employed">Employed</option>
                      <option value="Unemployed">Unemployed</option>
                      <option value="Student">Student</option>
                    </select>
                  </div>

                  {/* Designation */}
                  <div className="cp-field">
                    <label>Designation</label>
                    <input type="text" name="designation" placeholder="Current designation" />
                  </div>

                  {/* Location */}
                  <div className="cp-field">
                    <label>Location *</label>
                    <input type="text" name="location" placeholder="City, Country" required />
                  </div>

                  {/* Alt number */}
                  <div className="cp-field">
                    <label>Alternative Number *</label>
                    <input type="tel" name="alternative_number" placeholder="Alternate number" required />
                  </div>

                  {/* Profile summary */}
                  <div className="cp-field">
                    <label>Brief Profile Summary *</label>
                    <input type="text" name="profile_summary" placeholder="Your expectation" required />
                  </div>

                  <input type="hidden" name="bootcamp_id" value="" id="bootcamp_id" />

                  {/* Submit */}
                  <div className="cp-field full">
                    <button className="cp-submit" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : '📅 Book 1-1 Consultation — It\'s Free'}
                    </button>
                  </div>
                </div>
              </form>
              <div id="form-message">
                {submitMessage && (
                  <p style={{ color: submitMessage.type === 'success' ? 'green' : 'red', margin: '10px 0 0', fontWeight: 'bold', textAlign: 'center' }}>
                    {submitMessage.text}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sticky Bottom Banner ─────────────────────────────── */}
      <div
        id="consult-bottom-banner"
        className={bannerVisible ? 'banner-visible' : ''}
        role="complementary"
        aria-label="Book a consultation"
      >
        <div className="banner-text">
          📅 Book a free 1-1 session with our Data Experts
          <span> • Empowering 1000+ aspirants across 11+ industries</span>
        </div>
        <button className="banner-cta" onClick={handleBannerOpen}>Book Now →</button>
        <button className="banner-dismiss" onClick={handleBannerDismiss} aria-label="Dismiss">×</button>
      </div>
    </>
  )
}
