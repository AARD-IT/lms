import { useEffect, useRef } from 'react'
import './OnBoardingPage.css'

const steps = [
  {
    number: '01',
    title: 'Registration & Profile Setup',
    description:
      'Create your Analytics Avenue account and complete your learner profile. Set your career goals, current skill level, and preferred learning pace to personalise your journey.',
    icon: '🎯',
    tag: 'Getting Started',
    color: '#0377EF',
  },
  {
    number: '02',
    title: 'Program Selection & Enrolment',
    description:
      'Browse our curated industry-specific programs — Data Analytics, AI/ML, Business Intelligence, and more. Choose the track that aligns with your ambitions and enrol with a single click.',
    icon: '📋',
    tag: 'Discovery',
    color: '#7c3aed',
  },
  {
    number: '03',
    title: 'Orientation & Live Kick-off Session',
    description:
      `Attend a live orientation hosted by our senior mentors. Get a complete walkthrough of the LMS, curriculum roadmap, community guidelines, and your first week's action plan.`,
    icon: '🚀',
    tag: 'Orientation',
    color: '#0891b2',
  },
  {
    number: '04',
    title: 'Core Learning & Project Work',
    description:
      'Dive into structured modules with recorded class videos, live sessions, and hands-on mini-projects. Build real dashboards, ML models, and case studies that form the backbone of your portfolio.',
    icon: '📚',
    tag: 'Learning',
    color: '#059669',
  },
  {
    number: '05',
    title: 'Mentor Appointments & Doubt Clearing',
    description:
      'Book 1-on-1 mentor sessions at your convenience. Get personalised code reviews, concept clarification, and career guidance directly from industry professionals.',
    icon: '🤝',
    tag: 'Mentorship',
    color: '#d97706',
  },
  {
    number: '06',
    title: 'Portfolio Building & Mock Interviews',
    description:
      'Receive expert feedback on your GitHub, LinkedIn, and resume. Participate in AI-proctored mock interviews, industry-focused assessments, and live hiring events conducted on the platform.',
    icon: '💼',
    tag: 'Career Prep',
    color: '#dc2626',
  },
  {
    number: '07',
    title: 'Job Referrals & Placement Drives',
    description:
      'Access exclusive internal referrals and live placement drives across top companies like Accenture, Deloitte, TCS, and 50+ hiring partners. Your profile is directly shortlisted by our placement cell.',
    icon: '🏆',
    tag: 'Placement',
    color: '#0377EF',
  },
  {
    number: '08',
    title: 'Dream Role & Alumni Network',
    description:
      'Land your dream data role and become a part of our thriving alumni community. Continue accessing updated content, exclusive workshops, and networking events throughout your career.',
    icon: '⭐',
    tag: 'Success',
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
    return () => observer.disconnect()
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
            <span className="ob-badge-dot" />
            <span>YOUR JOURNEY WITH US</span>
          </div>

          <h1 className="ob-hero-title">
            A structured{' '}
            <span className="ob-hero-accent">8-step process</span> from
            registration to your dream data role
          </h1>

          <p className="ob-hero-sub">
            At Analytics Avenue, we've designed a clear, guided path that takes you from day-one signup
            all the way to a successful placement. Every step is deliberate, every milestone is
            supported — so you never feel lost.
          </p>

          {/* Stats row */}
          <div className="ob-stats-row">
            <div className="ob-stat">
              <span className="ob-stat-num">8</span>
              <span className="ob-stat-lbl">Structured Steps</span>
            </div>
            <div className="ob-stat-line" />
            <div className="ob-stat">
              <span className="ob-stat-num">50+</span>
              <span className="ob-stat-lbl">Hiring Partners</span>
            </div>
            <div className="ob-stat-line" />
            <div className="ob-stat">
              <span className="ob-stat-num">95%</span>
              <span className="ob-stat-lbl">Placement Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="ob-timeline-section">
        <div className="container ob-timeline-container">

          {/* Animated center line */}
          <div className="ob-center-line">
            <div className="ob-line-fill" />
            <div className="ob-line-glow" />
          </div>

          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <div
                key={step.number}
                ref={(el) => (stepRefs.current[idx] = el)}
                className={`ob-step ${isLeft ? 'ob-step-left' : 'ob-step-right'}`}
                style={{ '--step-color': step.color }}
              >
                {/* Dot */}
                <div className="ob-dot">
                  <div className="ob-dot-ring" />
                  <div className="ob-dot-core" />
                </div>

                {/* Connector */}
                <div className="ob-connector" />

                {/* Card */}
                <div className="ob-card">
                  <div className="ob-card-top-bar" />
                  <div className="ob-card-body">
                    <div className="ob-card-meta">
                      <span
                        className="ob-tag"
                        style={{ background: `${step.color}18`, color: step.color }}
                      >
                        {step.tag}
                      </span>
                      <span className="ob-step-num">{step.number}</span>
                    </div>
                    <div className="ob-icon">{step.icon}</div>
                    <h3 className="ob-step-title">{step.title}</h3>
                    <p className="ob-step-desc">{step.description}</p>
                    <div className="ob-progress-track">
                      <div
                        className="ob-progress-bar"
                        style={{
                          width: `${(idx + 1) * 12.5}%`,
                          background: step.color,
                        }}
                      />
                    </div>
                    <span className="ob-progress-lbl">Step {idx + 1} of 8</span>
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
