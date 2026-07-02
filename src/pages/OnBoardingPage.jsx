import { useEffect, useRef } from 'react'
import './OnBoardingPage.css'

const steps = [
  {
    number: '01',
    title: 'Register',
    description: 'Complete registration & attend presentation with our data expert panel.',
    subItems: [
      'Register for the onboarding presentation with our panel',
      'Attend the briefing sessions and understand the program deliverables'
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" x2="19" y1="8" y2="14" />
        <line x1="22" x2="16" y1="11" y2="11" />
      </svg>
    ),
    tag: 'Registration',
    color: '#0377EF',
  },
  {
    number: '02',
    title: 'Connect',
    description: 'One-to-one session to get your data prescription and kickstart your learning journey.',
    subItems: [
      'Get assigned a personalized learning roadmap',
      'Assess your current skills gaps with a dedicated mentor'
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    tag: 'Prescription',
    color: '#7c3aed',
  },
  {
    number: '03',
    title: 'Demo & Onboard',
    description: 'Attend 2 demo sessions, complete payment, and get access to learning materials.',
    subItems: [
      'Watch live interaction demo sessions',
      'Gain full LMS access and download learning materials'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>
    ),
    tag: 'Onboarding',
    color: '#0891b2',
  },
  {
    number: '04',
    title: 'Learn & Build',
    description: 'Follow your goal sheet, receive mentor allocation, and complete weekly tasks.',
    subItems: [
      'Work systematically on your step-by-step goal sheet',
      'Complete weekly check-ins and submit deliverables to your mentor'
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    tag: 'Learning',
    color: '#059669',
  },
  {
    number: '05',
    title: 'Projects',
    description: 'Join domain expert sessions and kick-start your allocated industry projects.',
    subItems: [
      'Start domain-specific real-world projects',
      'Collaborate with mentors to review project progress'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hammer-icon lucide-hammer"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/></svg>
    ),
    tag: 'Projects',
    color: '#d97706',
  },
  {
    number: '06',
    title: 'Certify',
    description: 'Complete 2 industry certifications such as AWS, GCP, Databricks, or Snowflake.',
    subItems: [
      'Get credential prep resources and guidelines',
      'Prove your skills with global certifications'
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    tag: 'Certification',
    color: '#dc2626',
  },
  {
    number: '07',
    title: 'Placement Prep',
    description: 'Set up your portfolio across 5+ platforms and prepare for interviews.',
    subItems: [
      'Optimize your presence on GitHub, LinkedIn, and portfolios',
      'Simulate mock interviews with industry panel members'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-icon lucide-briefcase"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
    ),
    tag: 'Preparation',
    color: '#0377EF',
  },
  {
    number: '08',
    title: 'Get Placed',
    description: 'Benefit from our 3-mode placement support:',
    subItems: [
      'Access organic job opportunities matching your skills',
      'Apply to internal and client-referred openings',
      'Work on direct freelance and consulting placements'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy-icon lucide-trophy"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"/><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"/><path d="M18 9h1.5a1 1 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6 9H4.5a1 1 0 0 1 0-5H6"/></svg>
    ),
    tag: 'Placement',
    color: '#7c3aed',
  },
]

export default function OnBoardingPage({ onNavigateHome }) {
  const stepRefs = useRef([])

  useEffect(() => {
    // Intersection Observer for scroll-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ob-step-visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    // Dynamic scroll progress line animation
    const handleScroll = () => {
      const line = document.querySelector('.timeline-line')
      const progress = document.querySelector('.timeline-progress')
      if (!line || !progress) return
      
      const rect = line.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const scrolledPast = (viewportHeight / 2) - rect.top
      const percent = Math.max(0, Math.min(1, scrolledPast / rect.height))
      
      progress.style.transform = `scaleY(${percent})`
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // initial calculation

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="ob-page">

      {/* ── Hero ── */}
      <div className="ob-hero">

        <div className="container">
          {/* Breadcrumb */}
          <nav className="ob-breadcrumb">
            <button
              onClick={onNavigateHome}
              className="ob-breadcrumb-home"
            >
              Home
            </button>
            <span className="ob-breadcrumb-sep">/</span>
            <span className="ob-breadcrumb-cur">On-Boarding</span>
          </nav>

          {/* Badge */}
          <div className="ob-hero-badge">
            <span className="ob-badge-icon">🚀</span>
            <span>YOUR JOURNEY WITH US</span>
          </div>

          <h1 className="ob-hero-title">
            A structured{' '}
            <span className="ob-hero-accent">8-step process</span>
            {' '}from registration to your dream data role
          </h1>

          <p className="ob-hero-sub">
            At Analytics Avenue, we've designed a clear, guided path that takes you from day-one signup
            all the way to a successful placement. Every step is deliberate, every milestone is
            supported, so you never feel lost.
          </p>

          {/* Stats — 3 separate cards */}
          <div className="ob-stats-row">

            {/* Structured Steps */}
            <div className="ob-stat">
              <div className="ob-stat-icon-wrap" style={{ background: '#eff6ff' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#0377EF" opacity="0.9"/>
                  <path d="M2 17l10 5 10-5" stroke="#0377EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M2 12l10 5 10-5" stroke="#0377EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6"/>
                </svg>
              </div>
              <span className="ob-stat-lbl">Structured Steps</span>
              <span className="ob-stat-num" style={{ color: '#0377EF' }}>8</span>
            </div>

            {/* Hiring Partners */}
            <div className="ob-stat">
              <div className="ob-stat-icon-wrap" style={{ background: '#f0fdf4' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="9" cy="7" r="4" stroke="#22c55e" strokeWidth="2"/>
                  <circle cx="17" cy="9" r="3" stroke="#22c55e" strokeWidth="1.5" opacity="0.65"/>
                  <path d="M2 21c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M17 15c1.933 0 3.5 1.343 3.5 3" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
                </svg>
              </div>
              <span className="ob-stat-lbl">Hiring Partners</span>
              <span className="ob-stat-num" style={{ color: '#22c55e' }}>50+</span>
            </div>

            {/* Placement Rate */}
            <div className="ob-stat">
              <div className="ob-stat-icon-wrap" style={{ background: '#f5f3ff' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 17L10 12L14 16L21 7" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 7h4v4" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="ob-stat-lbl">Placement Rate</span>
              <span className="ob-stat-num" style={{ color: '#7c3aed' }}>95%</span>
            </div>

          </div>
        </div>
      </div>


      {/* ── Timeline ── */}
      <div className="ob-timeline-section">
        <div className="container timeline-track">

          {/* Center line progress tracker */}
          <div className="timeline-line">
            <div className="timeline-progress" style={{ transform: 'scale(1, 0)' }}></div>
          </div>

          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <div
                key={step.number}
                ref={(el) => (stepRefs.current[idx] = el)}
                className={`timeline-step ${isLeft ? 'step-left' : 'step-right'}`}
                id={`timeline-step-${step.number}`}
              >
                {/* Dot */}
                <div className="timeline-dot">
                  <span className="dot-inner" />
                </div>

                {/* Card */}
                <div className="timeline-card">
                  {/* Top Row: Badge + Number */}
                  <div className="timeline-card-top-row">
                    <span className="timeline-card-badge">{step.tag}</span>
                    <span className="timeline-card-number">{step.number}</span>
                  </div>

                  {/* Body Row: Icon Box + Text Column */}
                  <div className="timeline-card-body-row">
                    <div className="timeline-card-icon-box">
                      {step.icon}
                    </div>
                    <div className="timeline-card-text-col">
                      <h3 className="timeline-card-title">{step.title}</h3>
                      <p className="timeline-card-desc">{step.description}</p>
                      {step.subItems && step.subItems.length > 0 && (
                        <ul className="timeline-sub-list">
                          {step.subItems.map((sub, sIdx) => (
                            <li key={sIdx} className="timeline-sub-item">
                              <span className="sub-item-bullet" />
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Progress Row */}
                  <div className="timeline-card-progress-row">
                    <span className="timeline-card-progress-text">Step {idx + 1}/8</span>
                    <div className="timeline-card-progress-track">
                      <div
                        className="timeline-card-progress-fill"
                        style={{ width: `${(idx + 1) * 12.5}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── CTA ── */}
        <div className="ob-cta">
          <div className="ob-cta-badge">
            <span className="ob-badge-dot ob-badge-dot--white" />
            <span>START YOUR JOURNEY</span>
          </div>
          <h2 className="ob-cta-title">Ready to Begin Your Data Career?</h2>
          <p className="ob-cta-sub">
            Join thousands of learners who have transformed their careers through Analytics Avenue.
          </p>
          <div className="ob-cta-btns">
            <a
              href="https://pages.razorpay.com/discussion"
              target="_blank"
              rel="noopener noreferrer"
              className="ob-btn-primary"
            >
              Book 1-1 Consultation
            </a>
            <button onClick={onNavigateHome} className="ob-btn-secondary">
              Explore Programs
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ob-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.72); }
        }
        @keyframes ob-line-flow {
          0%   { background-position: 0% 0%; }
          100% { background-position: 0% 200%; }
        }
        @keyframes ob-glow-flow {
          0%   { top: -30%; opacity: 0.8; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes ob-dot-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50%       { transform: translate(-50%, -50%) scale(1.7); opacity: 0; }
        }
        @keyframes ob-fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ob-fade-right {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes ob-fade-left {
          from { opacity: 0; transform: translateX(50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
