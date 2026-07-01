import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Gift,
  Share2,
  UserPlus,
  Coins,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Users,
  Compass,
  Award,
  Sparkles,
  HelpCircle,
  X,
  ChevronDown,
  Mail,
  User,
  Phone,
  Bookmark,
  Briefcase,
  Layers,
  ChevronRight,
  ClipboardCheck,
  Check,
  MessageSquare,
  Calendar,
  MessageCircle,
  Link,
  Shield,
  Lock,
  GraduationCap,
  Trophy,
  Zap,
  Star
} from 'lucide-react'
import './ReferralPage.css'

/* ── FAQ Accordion Item Component ── */
function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`rp-faq-item ${isOpen ? 'active' : ''}`}>
      <button className="rp-faq-trigger" onClick={onToggle}>
        <span>{question}</span>
        <motion.div
          className="rp-faq-icon"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="rp-faq-answer"
          >
            <p style={{ margin: 0 }}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ReferralPage({ onNavigateHome }) {
  const formSectionRef = useRef(null)
  const rewardsSectionRef = useRef(null)
  const heroRef = useRef(null)

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const scrollToForm = (e) => {
    e.preventDefault()
    document.getElementById('referral-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToRewards = (e) => {
    e.preventDefault()
    document.getElementById('rewards')?.scrollIntoView({ behavior: 'smooth' })
  }

  /* ── Interactive Highlight Cards State ── */
  const [activeHighlight, setActiveHighlight] = useState(0)

  const highlights = [
    {
      title: 'Industry Mentor Guidance',
      desc: 'Connect directly with senior professionals from top companies who guide your friend step-by-step through industry standards, portfolio building, and real-world tools.',
      features: ['Direct 1-1 reviews', 'MNC workspace insights', 'Personalized roadmaps'],
      image: '/assets/internship/mentor/mentor.png'
    },
    {
      title: 'Hands-on Project Experience',
      desc: 'Learners build real consulting pipelines and business solutions with actual enterprise datasets rather than generic classroom homework.',
      features: ['Production-ready builds', 'Real client briefings', 'Git & CI/CD deployment'],
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'One-to-One Consultation',
      desc: 'Personal advisory calls to review skill gaps, map academic background with career aspirations, and outline optimal learning pathways.',
      features: ['CV & profile audit', 'Domain mapping sessions', 'Strategic milestone path'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Career Support',
      desc: 'End-to-end recruitment preparation including resume enhancement, extensive mock technical interviews, and access to internal drives.',
      features: ['50+ hiring partners', 'Portfolio showcases', 'Salary negotiation prep'],
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Practical Learning Approach',
      desc: 'No dry theory. Every single class is interactive and builds toward shipping functional analytical dashboards or AI scripts.',
      features: ['Interactive worksheets', 'Daily code submissions', 'Case-study discussions'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Learning Dashboards',
      desc: 'Track performance, monitor milestones, access slides, view code sandboxes, and analyze progression statistics in one modern dashboard.',
      features: ['Activity heatmaps', 'Leaderboards & points', '24/7 resource repository'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % highlights.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [highlights.length])

  const marqueeItems = [
    'Refer Friends',
    'Earn Rewards',
    '1 Referral = 15%',
    '2 Referrals = 25%',
    '3 Referrals = 50%',
    '5 Referrals = 75%',
    'Verified Referrals Only',
    'Rewards After Successful Enrollment',
    'Learn from 50+ Industry Mentors',
    'Build 4+ Real Projects',
    'Career Support Until Placement',
    'Data Science',
    'Gen AI',
    'Machine Learning',
    'Grow Together'
  ]

  /* ── Success Stories Slideshow State ── */
  const successStoriesImages = [
    '/assets/internship/SuccessStories/img.png',
    '/assets/internship/SuccessStories/img-1.png',
    '/assets/internship/SuccessStories/img-2.png',
    '/assets/internship/SuccessStories/img-3.png',
    '/assets/internship/SuccessStories/img-4.png',
    '/assets/internship/SuccessStories/img-5.png'
  ]

  const [currentSuccessIndex, setCurrentSuccessIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSuccessIndex((prev) => (prev + 1) % successStoriesImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [successStoriesImages.length])

  const handleSuccessPrev = () => {
    setCurrentSuccessIndex((prev) => (prev - 1 + successStoriesImages.length) % successStoriesImages.length)
  }

  const handleSuccessNext = () => {
    setCurrentSuccessIndex((prev) => (prev + 1) % successStoriesImages.length)
  }

  /* ── FAQ State ── */
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'How does the Referral Program work?',
      a: 'It is simple: copy your referral link or use the form on this page to share your friend’s details. Once your referred friend books a consultation and successfully enrolls in one of our core cohorts, the referral is registered and counted toward your milestone.'
    },
    {
      q: 'What rewards do I receive at different milestones?',
      a: 'The rewards scale dynamically: 1 successful referral yields a 15% reward (cashback or course credit), 2 referrals yield 25%, 3 yield 50%, and 5 successful enrollments unlock the highest tier of 75% reward.'
    },
    {
      q: 'When are referral rewards processed and paid out?',
      a: 'Rewards are processed after the referred learner successfully completes their enrollment verification and their initial payment is confirmed by the Analytics Avenue admissions team. Payout cycles take place monthly.'
    },
    {
      q: 'Does my friend receive any benefits?',
      a: 'Yes! Anyone signing up through an active referral receives exclusive priority scheduling for 1:1 portfolio reviews, a discount on core bootcamps, and early access to placement drives.'
    },
    {
      q: 'Is there a limit to the number of people I can refer?',
      a: 'No limit at all! You can invite as many colleagues, classmates, or friends as you wish. Your milestone count accumulates, helping you reach higher reward percentages.'
    },
    {
      q: 'How can I check the status of my referrals?',
      a: 'Once you submit a referral, our admissions desk logs it. You will receive email notifications as soon as your friend registers, completes their consult, and when a reward milestone is unlocked.'
    }
  ]

  /* ── Referral Form Submission State ── */
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    friendName: '',
    friendEmail: '',
    friendPhone: '',
    course: '',
    message: ''
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitError(null)

    const scriptUrl = import.meta.env.VITE_REFERRAL_APPS_SCRIPT_URL

    if (!scriptUrl) {
      setSubmitError('Configuration error: Referral submission URL is missing.')
      setLoading(false)
      return
    }

    const payload = {
      yourName: formData.referrerName,
      yourEmail: formData.referrerEmail,
      friendName: formData.friendName,
      friendEmail: formData.friendEmail,
      friendPhone: formData.friendPhone,
      program: formData.course,
      personalMessage: formData.message
    }

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`)
      }

      const result = await response.json()
      if (result.success) {
        setFormSubmitted(true)
        setFormData({
          referrerName: '',
          referrerEmail: '',
          friendName: '',
          friendEmail: '',
          friendPhone: '',
          course: '',
          message: ''
        })
      } else {
        setSubmitError(result.error || 'Failed to submit referral. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting referral:', error)
      setSubmitError('Unable to connect to server. Please check your internet connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rp-page">

      {/* ── SECTION 1: HERO ── */}
      <section
        className="rp-hero"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="rp-hero-bg-grid" />
        <div className="rp-hero-blob-1" />
        <div className="rp-hero-blob-2" />
        <div className="rp-hero-blob-3" />

        {/* Mouse Follower Glow */}
        {isHovered && (
          <div
            className="rp-hero-mouse-glow"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`
            }}
          />
        )}

        {/* Flanking Floating Badges */}
        <div className="rp-hero-float-pill fp-left">
          <span style={{ fontSize: '15px' }}>✨</span> Earn Up To 75%
        </div>
        <div className="rp-hero-float-pill fp-right">
          <span style={{ fontSize: '15px' }}>🎓</span> 50+ Live Mentors
        </div>

        {/* Floating animated decorative shapes */}
        <div className="rp-hero-decorations">
          <motion.div
            className="rp-hero-dec-item dec-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 45, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ✦
          </motion.div>
          <motion.div
            className="rp-hero-dec-item dec-2"
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0],
              rotate: [0, -30, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            ★
          </motion.div>
          <motion.div
            className="rp-hero-dec-item dec-3"
            animate={{
              y: [0, -15, 0],
              x: [0, 20, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            ●
          </motion.div>
        </div>

        <div className="rp-container">
          <motion.div
            className="rp-hero-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <div className="rp-hero-badge">✦ Referral Program ✦</div>

            <h1 className="rp-hero-heading">
              Grow Together.
              <span>Refer. Learn. Succeed.</span>
            </h1>

            <p className="rp-hero-desc">
              Know someone ready to build a career in Data Science, Gen AI, or Machine Learning? Refer them to Analytics Avenue and help them begin their journey with expert mentors.
            </p>

            <div className="rp-hero-actions">
              <a href="#referral-form" onClick={scrollToForm} className="rp-btn-primary">
                Submit a Referral <ArrowRight size={18} />
              </a>
              <a href="#rewards" onClick={scrollToRewards} className="rp-btn-secondary">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="rp-marquee-section">
        <div className="rp-marquee-track">
          <div className="rp-marquee-inner">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="rp-marquee-item">
                <span className="rp-marquee-dot" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION 3: WHY REFER? ── */}
      <section className="rp-section rp-why">
        <div className="rp-container">
          <div className="rp-section-header">
            <div className="rp-section-badge">
              <Compass size={16} /> Career Growth
            </div>
            <h2 className="rp-section-title">
              Why <span>Refer?</span>
            </h2>
            <p className="rp-section-subtitle">
              Give someone the opportunity to build a successful career in Data & AI.
            </p>
          </div>

          <div className="rp-why-grid">
            <motion.div
              className="rp-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="rp-why-card-glow" />
              <div className="rp-why-icon">
                <BookOpen size={28} />
              </div>
              <h3 className="rp-why-title">Career Transformation</h3>
              <p className="rp-why-desc">
                Help learners transition into high-growth technology careers through industry-relevant skills, hands-on training, and structured learning paths.
              </p>
            </motion.div>

            <motion.div
              className="rp-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rp-why-card-glow" />
              <div className="rp-why-icon">
                <Users size={28} />
              </div>
              <h3 className="rp-why-title">Personalized Mentorship</h3>
              <p className="rp-why-desc">
                Provide one-on-one guidance, live mentoring sessions, code reviews, career coaching, and interview preparation from experienced industry professionals.
              </p>
            </motion.div>

            <motion.div
              className="rp-why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="rp-why-card-glow" />
              <div className="rp-why-icon">
                <Award size={28} />
              </div>
              <h3 className="rp-why-title">Job-Ready Experience</h3>
              <p className="rp-why-desc">
                Equip learners with practical experience through real-world projects, internships, portfolio development, placement assistance, and referral support to become employer-ready.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: REFERRAL REWARDS (Centerpiece) ── */}
      <section className="rp-section rp-rewards" id="rewards" ref={rewardsSectionRef}>
        <div className="rp-container">
          <div className="rp-section-header">
            <div className="rp-section-badge">
              <Gift size={16} /> Milestones & Levels
            </div>
            <h2 className="rp-section-title">
              Refer More. <span>Earn More.</span>
            </h2>
            <p className="rp-section-subtitle">
              Every successful referral unlocks higher rewards, helping you maximize your benefits as you bring more talented learners into the program.
            </p>
          </div>

          <div className="rp-rewards-container-relative">
            {/* Horizontal progress connecting line behind cards */}
            <div className="rp-rewards-progress-line">
              <div className="rp-rewards-progress-fill" />
            </div>

            <div className="rp-rewards-grid">
              {/* Card 1: Bronze */}
              <motion.div
                className="rp-reward-card bronze"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="rp-reward-card-glow" />
                <div className="rp-reward-card-top">
                  <div className="rp-reward-logo-container">
                    <div className="rp-reward-logo-circle">
                      <img src="/assets/logo/logo.svg" alt="Logo" className="rp-reward-logo-img" />
                    </div>
                    <div className="rp-reward-discount-tag">15% OFF</div>
                  </div>
                </div>
                <div className="rp-reward-card-bottom">
                  <h3 className="rp-reward-title">Analytics Avenue Coupon</h3>
                  <p className="rp-reward-subtitle">15% OFF Analytics Avenue Coupon</p>
                  <div className="rp-reward-footer">
                    <div className="rp-reward-referrals">
                      <span className="rp-reward-ref-count">1</span>
                      <span className="rp-reward-ref-label">Verified Referral</span>
                    </div>
                    <button
                      className="rp-reward-redeem-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('referral-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Lock size={15} />
                      <span>Redeem</span>
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Silver */}
              <motion.div
                className="rp-reward-card silver"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="rp-reward-card-glow" />
                <div className="rp-reward-card-top">
                  <div className="rp-reward-logo-container">
                    <div className="rp-reward-logo-circle">
                      <img src="/assets/logo/logo.svg" alt="Logo" className="rp-reward-logo-img" />
                    </div>
                    <div className="rp-reward-discount-tag">25% OFF</div>
                  </div>
                </div>
                <div className="rp-reward-card-bottom">
                  <h3 className="rp-reward-title">Analytics Avenue Coupon</h3>
                  <p className="rp-reward-subtitle">25% OFF Analytics Avenue Coupon</p>
                  <div className="rp-reward-footer">
                    <div className="rp-reward-referrals">
                      <span className="rp-reward-ref-count">2</span>
                      <span className="rp-reward-ref-label">Verified Referrals</span>
                    </div>
                    <button
                      className="rp-reward-redeem-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('referral-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Lock size={15} />
                      <span>Redeem</span>
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Gold */}
              <motion.div
                className="rp-reward-card gold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="rp-reward-card-glow" />
                <div className="rp-reward-card-top">
                  <div className="rp-reward-logo-container">
                    <div className="rp-reward-logo-circle">
                      <img src="/assets/logo/logo.svg" alt="Logo" className="rp-reward-logo-img" />
                    </div>
                    <div className="rp-reward-discount-tag">50% OFF</div>
                  </div>
                </div>
                <div className="rp-reward-card-bottom">
                  <h3 className="rp-reward-title">Analytics Avenue Coupon</h3>
                  <p className="rp-reward-subtitle">50% OFF Analytics Avenue Coupon</p>
                  <div className="rp-reward-footer">
                    <div className="rp-reward-referrals">
                      <span className="rp-reward-ref-count">3</span>
                      <span className="rp-reward-ref-label">Verified Referrals</span>
                    </div>
                    <button
                      className="rp-reward-redeem-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('referral-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Lock size={15} />
                      <span>Redeem</span>
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Platinum */}
              <motion.div
                className="rp-reward-card platinum"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="rp-reward-card-glow" />
                <div className="rp-reward-card-top">
                  <div className="rp-reward-logo-container">
                    <div className="rp-reward-logo-circle">
                      <img src="/assets/logo/logo.svg" alt="Logo" className="rp-reward-logo-img" />
                    </div>
                    <div className="rp-reward-discount-tag">75% OFF</div>
                  </div>
                </div>
                <div className="rp-reward-card-bottom">
                  <h3 className="rp-reward-title">Analytics Avenue Coupon</h3>
                  <p className="rp-reward-subtitle">75% OFF Analytics Avenue Coupon</p>
                  <div className="rp-reward-footer">
                    <div className="rp-reward-referrals">
                      <span className="rp-reward-ref-count">5</span>
                      <span className="rp-reward-ref-label">Verified Referrals</span>
                    </div>
                    <button
                      className="rp-reward-redeem-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('referral-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Lock size={15} />
                      <span>Redeem</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="rp-rewards-disclaimer">
            Rewards are processed only after the referred learner successfully enrolls in the program and the enrollment is verified by the <a href="https://analyticsavenue.in/" target="_blank" rel="noopener noreferrer" className="rp-disclaimer-link"><strong>Analytics Avenue</strong></a>.
          </div>
        </div>
      </section>



      {/* ── SECTION 4: PROGRAM HIGHLIGHTS (Interactive switcher) ── */}
      <section className="rp-section rp-highlights">
        <div className="rp-container">
          <div className="rp-section-header">
            <div className="rp-section-badge">
              <Layers size={16} /> Core Access
            </div>
            <h2 className="rp-section-title">
              What Your Referral <span>Gets Access To</span>
            </h2>
            <p className="rp-section-subtitle">
              Click the highlights below to see what makes the learning program highly practical and immersive for your friends.
            </p>
          </div>

          <div className="rp-highlights-layout">
            {/* Left navigation sidebar menu */}
            <div className="rp-highlights-menu">
              {highlights.map((item, idx) => (
                <button
                  key={idx}
                  className={`rp-highlight-tab ${activeHighlight === idx ? 'active' : ''}`}
                  onClick={() => setActiveHighlight(idx)}
                >
                  <div className="rp-highlight-tab-icon">
                    {idx === 0 && <Users size={18} />}
                    {idx === 1 && <Briefcase size={18} />}
                    {idx === 2 && <BookOpen size={18} />}
                    {idx === 3 && <Award size={18} />}
                    {idx === 4 && <Sparkles size={18} />}
                    {idx === 5 && <Layers size={18} />}
                  </div>
                  <span className="rp-highlight-tab-text">{item.title}</span>
                </button>
              ))}
            </div>

            {/* Right preview details panel */}
            <div className="rp-highlight-preview">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHighlight}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="rp-preview-content"
                >
                  <div className="rp-preview-body">
                    <h3 className="rp-preview-title">{highlights[activeHighlight].title}</h3>
                    <p className="rp-preview-desc">{highlights[activeHighlight].desc}</p>

                    <div className="rp-preview-features">
                      {highlights[activeHighlight].features.map((feat, i) => (
                        <div key={i} className="rp-preview-feat-item">
                          <CheckCircle2 size={16} className="rp-preview-check" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rp-preview-visual">
                    <img src={highlights[activeHighlight].image} alt={highlights[activeHighlight].title} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: REFERRAL PROCESS — Premium Timeline ── */}
      <section className="rp-section rp-process">
        {/* Background decorations */}
        <div className="rp-process-bg-dots" />
        <div className="rp-process-glow-left" />
        <div className="rp-process-glow-right" />

        <div className="rp-container">
          {/* Header */}
          <motion.div
            className="rp-section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rp-section-badge">
              <ClipboardCheck size={14} /> Simple Steps
            </div>
            <h2 className="rp-section-title">
              How the <span>Referral Works</span>
            </h2>
            <p className="rp-section-subtitle">
              Follow these simple checkpoints to earn rewards by helping friends build successful
              careers in Data Science, Machine Learning, and Generative AI.
            </p>
          </motion.div>

          {/* ── Premium Horizontal Timeline ── */}
          <div className="rp-pt-wrapper">

            {/* SVG animated connector line */}
            <div className="rp-pt-connector">
              <svg className="rp-pt-svg" viewBox="0 0 900 4" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="pt-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="35%" stopColor="#4F46E5" />
                    <stop offset="65%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
                {/* Track */}
                <line x1="0" y1="2" x2="900" y2="2" stroke="rgba(37,99,235,0.12)" strokeWidth="3" />
                {/* Progress */}
                <motion.line
                  x1="0" y1="2" x2="900" y2="2"
                  stroke="url(#pt-line-grad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: 0.4, ease: 'easeInOut' }}
                />
              </svg>

              {/* Arrow chevrons between steps */}
              {[1, 2, 3].map(i => (
                <motion.div
                  key={i}
                  className="rp-pt-arrow"
                  style={{ left: `${(i / 4) * 100}%` }}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.2, duration: 0.4 }}
                >
                  <ChevronRight size={16} />
                </motion.div>
              ))}
            </div>

            {/* Steps Grid */}
            <div className="rp-pt-steps">
              {[
                {
                  num: '01',
                  icon: <Link size={22} />,
                  title: 'Share Your Link',
                  desc: 'Fill the form or copy your unique referral link and share it with friends, classmates, or colleagues interested in building careers in AI and Data Science.',
                  hint: '🔗 Your referral link is unique to you.',
                  color: '#2563EB',
                  glow: 'rgba(37,99,235,0.18)',
                  gradient: 'linear-gradient(135deg,#2563EB,#4F46E5)',
                },
                {
                  num: '02',
                  icon: <UserPlus size={22} />,
                  title: 'Friend Registers',
                  desc: 'Your referred friend signs up and books a one-to-one consultation with our expert team to understand the program fit.',
                  hint: '📅 Expert consultation scheduled.',
                  color: '#4F46E5',
                  glow: 'rgba(79,70,229,0.18)',
                  gradient: 'linear-gradient(135deg,#4F46E5,#7C3AED)',
                },
                {
                  num: '03',
                  icon: <GraduationCap size={22} />,
                  title: 'They Enroll',
                  desc: 'They successfully enroll in the Analytics Avenue program and begin their structured learning journey with live mentors.',
                  hint: '🚀 Learning journey officially begins.',
                  color: '#7C3AED',
                  glow: 'rgba(124,58,237,0.18)',
                  gradient: 'linear-gradient(135deg,#7C3AED,#10B981)',
                },
                {
                  num: '04',
                  icon: <Trophy size={22} />,
                  title: 'Referral Confirmed',
                  desc: 'Once enrollment is verified by our team, your referral is confirmed and your reward is processed within 7 working days.',
                  hint: '🎉 Reward successfully unlocked.',
                  color: '#10B981',
                  glow: 'rgba(16,185,129,0.18)',
                  gradient: 'linear-gradient(135deg,#10B981,#059669)',
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="rp-pt-step"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
                >
                  {/* Step number floating above icon */}
                  <div className="rp-pt-num" style={{ color: step.color }}>{step.num}</div>

                  {/* Icon node */}
                  <motion.div
                    className="rp-pt-node"
                    style={{
                      background: step.gradient,
                      boxShadow: `0 0 0 8px ${step.glow}, 0 12px 32px ${step.glow}`,
                    }}
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    animate={{ y: [0, -5, 0] }}
                  >
                    {step.icon}
                    {/* Pulse ring */}
                    <div className="rp-pt-node-ring" style={{ borderColor: step.color }} />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    className="rp-pt-card"
                    whileHover={{ y: -6, boxShadow: `0 24px 56px ${step.glow}, 0 8px 20px rgba(0,0,0,0.08)` }}
                    transition={{ duration: 0.3 }}
                    style={{ '--step-color': step.color, '--step-glow': step.glow }}
                  >
                    <div className="rp-pt-card-body">
                      <h3 className="rp-pt-card-title">{step.title}</h3>
                      <p className="rp-pt-card-desc">{step.desc}</p>
                    </div>
                    <div className="rp-pt-card-hint" style={{ borderLeftColor: step.color }}>
                      <span>{step.hint}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Bottom Benefits Strip ── */}
          <motion.div
            className="rp-pt-benefits"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { icon: '✔', label: '100% Verified', desc: 'Every referral is verified before rewards are processed.', color: '#2563EB' },
              { icon: '🎁', label: 'Real Rewards', desc: 'Earn referral rewards after successful enrollment verification.', color: '#7C3AED' },
              { icon: '⚡', label: 'Track Anytime', desc: 'Monitor your referrals and reward progress in real time.', color: '#F59E0B' },
              { icon: '🚀', label: 'Refer More, Earn More', desc: 'Unlock higher reward tiers as more successful referrals enroll.', color: '#10B981' },
            ].map((b, i) => (
              <motion.div
                key={i}
                className="rp-pt-benefit"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="rp-pt-benefit-icon" style={{ background: `${b.color}14`, color: b.color }}>
                  {b.icon}
                </div>
                <div>
                  <div className="rp-pt-benefit-label">{b.label}</div>
                  <div className="rp-pt-benefit-desc">{b.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 6: SUCCESS STORIES (Slideshow) ── */}
      <section className="rp-section rp-success">
        <div className="rp-container">
          <div className="rp-section-header">
            <div className="rp-section-badge">
              <Sparkles size={16} /> Learner Journeys
            </div>
            <h2 className="rp-section-title">
              Learner <span>Success Stories</span>
            </h2>
            <p className="rp-section-subtitle">
              Read how referrals helped students switch paths and secure analytics positions under working professionals.
            </p>
          </div>

          <div className="rp-success-slideshow-wrapper">
            <div className="rp-success-slideshow-container">
              {successStoriesImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Success Story ${index + 1}`}
                  className={`rp-success-slide-image ${index === currentSuccessIndex ? 'active' : ''}`}
                />
              ))}

              {/* Navigation Arrows */}
              <button className="rp-success-arrow rp-success-arrow-left" onClick={handleSuccessPrev} aria-label="Previous Success Story">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button className="rp-success-arrow rp-success-arrow-right" onClick={handleSuccessNext} aria-label="Next Success Story">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              {/* Dots */}
              <div className="rp-success-dots">
                {successStoriesImages.map((_, index) => (
                  <button
                    key={index}
                    className={`rp-success-dot ${index === currentSuccessIndex ? 'active' : ''}`}
                    onClick={() => setCurrentSuccessIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FAQ ── */}
      <section className="rp-section rp-faq">
        <div className="rp-container">
          <div className="rp-section-header">
            <div className="rp-section-badge">
              <HelpCircle size={16} /> Support
            </div>
            <h2 className="rp-section-title">
              Frequently Asked <span>Questions</span>
            </h2>
            <p className="rp-section-subtitle">
              Have doubts? Find the exact details on referral status, payment logs, and milestones below.
            </p>
          </div>

          <div className="rp-faq-layout">
            {/* Left FAQ Accoridon */}
            <div className="rp-faq-list">
              {faqs.map((faq, idx) => (
                <FaqItem
                  key={idx}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFaq === idx}
                  onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
                />
              ))}
            </div>

            {/* Right Support Desk Card */}
            <div className="rp-support-card">
              <div className="rp-support-avatar">💬</div>
              <h3 className="rp-support-title">Need Immediate Help?</h3>
              <p className="rp-support-desc">
                Our support desk is online 24/7 to resolve questions about payouts, link registrations, and program details.
              </p>

              <div className="rp-support-links">
                <a href="https://wa.me/917550279838" target="_blank" rel="noopener noreferrer" className="rp-support-link">
                  <MessageCircle size={18} style={{ color: '#25D366' }} /> WhatsApp Support
                </a>
                <a href="mailto:supportteam@analyticsavenue.in" className="rp-support-link">
                  <Mail size={18} style={{ color: '#0377EF' }} /> Email Support
                </a>
                <a href="https://pages.razorpay.com/discussion" target="_blank" rel="noopener noreferrer" className="rp-support-link">
                  <Calendar size={18} style={{ color: '#8b5cf6' }} /> Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FINAL CTA & REFERRAL SUBMISSION FORM ── */}
      <section className="rp-section rp-cta-section" id="referral-form" ref={formSectionRef}>
        <div className="rp-cta-grid-bg" />
        <div className="rp-cta-glow-1" />
        <div className="rp-cta-glow-2" />

        <div className="rp-container">
          <div className="rp-cta-content">
            <h2 className="rp-cta-title">Start <span>Referring</span> Today</h2>
            <p className="rp-cta-desc">
              Invite friends, classmates, and professionals interested in building careers in Data Science, Machine Learning, and AI.
            </p>
          </div>

          <div className="rp-form-container">
            <div className="rp-form-card">
              {formSubmitted ? (
                <motion.div
                  className="rp-success-form-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="rp-success-icon">🎉</span>
                  <h3 className="rp-success-title">Referral Submitted Successfully!</h3>
                  <p className="rp-success-desc">
                    Thank you! We have logged your details. A consultation link has been sent to your friend's email. We will update you as soon as they book their review.
                  </p>
                  <button
                    className="rp-btn-primary"
                    style={{ marginTop: '24px' }}
                    onClick={() => setFormSubmitted(false)}
                  >
                    Refer Another Friend
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="rp-form-header">
                    <h3 className="rp-form-header-title">Enter Referral Details</h3>
                    <p className="rp-form-header-desc">Complete details to send invitation links and start tracking milestones.</p>
                  </div>

                  <div className="rp-form-grid">
                    <div className="rp-form-group">
                      <label className="rp-label">Your Name *</label>
                      <input
                        type="text"
                        name="referrerName"
                        required
                        className="rp-input"
                        placeholder="John Doe"
                        value={formData.referrerName}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div className="rp-form-group">
                      <label className="rp-label">Your Email *</label>
                      <input
                        type="email"
                        name="referrerEmail"
                        required
                        className="rp-input"
                        placeholder="john.doe@example.com"
                        value={formData.referrerEmail}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div className="rp-form-group">
                      <label className="rp-label">Friend's Name *</label>
                      <input
                        type="text"
                        name="friendName"
                        required
                        className="rp-input"
                        placeholder="Alex Smith"
                        value={formData.friendName}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div className="rp-form-group">
                      <label className="rp-label">Friend's Email *</label>
                      <input
                        type="email"
                        name="friendEmail"
                        required
                        className="rp-input"
                        placeholder="alex.smith@example.com"
                        value={formData.friendEmail}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div className="rp-form-group">
                      <label className="rp-label">Friend's Phone *</label>
                      <input
                        type="tel"
                        name="friendPhone"
                        required
                        className="rp-input"
                        placeholder="Enter phone number"
                        value={formData.friendPhone}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div className="rp-form-group">
                      <label className="rp-label">Program of Interest *</label>
                      <select
                        name="course"
                        required
                        className="rp-input rp-select"
                        value={formData.course}
                        onChange={handleFormChange}
                      >
                        <option value="">Select program</option>
                        <option value="Data Analytics & BI">Data Analytics & BI</option>
                        <option value="Data Engineering">Data Engineering</option>
                        <option value="Generative AI & ML">Generative AI & ML</option>
                      </select>
                    </div>

                    <div className="rp-form-group rp-form-full">
                      <label className="rp-label">Personal Message (Optional)</label>
                      <textarea
                        name="message"
                        rows="3"
                        className="rp-input"
                        placeholder="Hey Alex, check out this program led by data scientists..."
                        value={formData.message}
                        onChange={handleFormChange}
                        style={{ resize: 'vertical' }}
                      />
                    </div>
                  </div>

                  {submitError && (
                    <div className="rp-form-error">
                      {submitError}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={loading} 
                    className="rp-submit-btn"
                    style={loading ? { opacity: 0.8, cursor: 'not-allowed' } : {}}
                  >
                    {loading ? (
                      <>
                        <span className="rp-submit-spinner" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit
                        <ChevronRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
