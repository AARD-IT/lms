import React, { useState, useEffect, useRef } from 'react'
import './InternshipPage.css'

/* ── Scroll animation hook ── */
function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

/* ── Animated Counter ── */
function Counter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView()
  useEffect(() => {
    if (!inView) return
    const num = parseInt(target.replace(/\D/g, ''))
    const step = Math.ceil(num / (duration / 16))
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + step, num)
      setCount(current)
      if (current >= num) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return <span ref={ref}>{count}{suffix}</span>
}

/* ── FAQ Item ── */
function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`ip-faq-item${open ? ' open' : ''}`}>
      <button className="ip-faq-question" onClick={() => setOpen(!open)}>
        {question}
        <svg className="ip-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="ip-faq-answer">{answer}</div>
    </div>
  )
}

/* ─────────────── MAIN PAGE ─────────────── */
export default function InternshipPage({ onNavigateHome }) {

  /* Scroll to section */
  const journeyRef = useRef(null)
  const scrollToJourney = (e) => {
    e.preventDefault()
    journeyRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  /* Form state */
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', track: '', background: '' })
  const [submitted, setSubmitted] = useState(false)
  const handleForm = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  /* ── Intersection observer for section animations ── */
  useEffect(() => {
    const els = document.querySelectorAll('.ip-animate')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view') }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  /* ── Data ── */
  const marqueeItems = [
    'Live Projects', 'AI Automation', 'Power BI', 'SQL', 'Python',
    'Tableau', 'Resume Building', 'Mock Interviews', 'Placement Support',
    'Industry Mentorship', 'Certifications', 'Hiring Partners',
    'Data Engineering', 'Machine Learning', 'Excel Analytics'
  ]

  const features = [
    { icon: '🎯', title: 'Real Industry Projects', desc: 'Work on live projects that mirror actual industry scenarios, building a portfolio employers trust.' },
    { icon: '🤖', title: 'AI & Automation Training', desc: 'Master cutting-edge AI tools like ChatGPT, Claude, n8n, and Make to automate analytics workflows.' },
    { icon: '👩‍💼', title: 'Expert Mentor Access', desc: 'Book 1-on-1 sessions with senior data scientists with 6–9 years of industry experience.' },
    { icon: '📋', title: 'Interview Preparation', desc: 'End-to-end mock interviews, resume reviews, and LinkedIn optimization by placement experts.' },
    { icon: '🏢', title: '50+ Hiring Partners', desc: 'Direct referrals to our network of 50+ companies actively hiring data analytics professionals.' },
  ]

  const journeySteps = [
    { num: '01', tag: 'Week 1–2', title: 'Onboarding & Foundations', desc: 'Environment setup, data fundamentals, SQL basics, and Excel mastery. Build your first mini-project.', duration: '2 Weeks', progress: 100, icon: '🚀' },
    { num: '02', tag: 'Week 3–5', title: 'Core Analytics Tools', desc: 'Deep-dive into Python for data analysis, Power BI dashboard creation, and Tableau visualizations.', duration: '3 Weeks', progress: 85, icon: '📊' },
    { num: '03', tag: 'Week 6–8', title: 'Industry Projects', desc: 'Apply your skills to 3 full-scale industry projects: Sales, HR, and Healthcare analytics dashboards.', duration: '3 Weeks', progress: 70, icon: '🏗️' },
    { num: '04', tag: 'Week 9–10', title: 'AI & Automation', desc: 'Integrate GenAI tools, automate workflows using n8n and Make, and build AI-powered analytics solutions.', duration: '2 Weeks', progress: 55, icon: '🤖' },
    { num: '05', tag: 'Week 11–12', title: 'Placement Preparation', desc: 'Portfolio review, mock interviews, LinkedIn setup, resume crafting, and referral placement support.', duration: '2 Weeks', progress: 40, icon: '🎓' },
  ]

  const tracks = [
    {
      icon: '📊', name: 'Data Analytics', duration: '12 Weeks',
      tools: ['Python', 'SQL', 'Excel', 'Power BI', 'Tableau'],
      projects: ['Sales Dashboard', 'Customer Analysis', 'Financial Report'],
      careerPath: 'Data Analyst → Senior Analyst → Analytics Lead',
    },
    {
      icon: '📈', name: 'Business Analytics', duration: '10 Weeks',
      tools: ['Excel', 'Power BI', 'SQL', 'Tableau', 'Google Analytics'],
      projects: ['Market Research', 'KPI Dashboard', 'Business Report'],
      careerPath: 'Business Analyst → Product Analyst → Strategy Manager',
    },
    {
      icon: '🤖', name: 'AI & Automation', duration: '12 Weeks',
      tools: ['Python', 'ChatGPT', 'n8n', 'Make', 'Claude', 'Gemini'],
      projects: ['AI Chatbot', 'Automation Workflow', 'ML Pipeline'],
      careerPath: 'AI Analyst → ML Engineer → Data Science Lead',
    },
  ]

  const projects = [
    { icon: '📊', name: 'Sales Dashboard', type: 'Power BI' },
    { icon: '🏥', name: 'Healthcare Analytics', type: 'Python' },
    { icon: '👥', name: 'HR Dashboard', type: 'Tableau' },
    { icon: '🗄️', name: 'SQL Database Design', type: 'SQL' },
    { icon: '🐍', name: 'Python Analytics', type: 'Pandas/NumPy' },
    { icon: '🤖', name: 'AI Chatbot', type: 'ChatGPT API' },
    { icon: '⚡', name: 'Automation Workflow', type: 'n8n/Make' },
    { icon: '💰', name: 'Finance Report', type: 'Excel' },
  ]

  const sidebarProjects = [
    { icon: '📊', bg: 'rgba(3,119,239,0.08)', name: 'Retail Analytics', cat: 'Business Intelligence', tags: ['Power BI', 'SQL'] },
    { icon: '🤖', bg: 'rgba(139,92,246,0.08)', name: 'AI Automation', cat: 'GenAI Tools', tags: ['n8n', 'ChatGPT'] },
    { icon: '🐍', bg: 'rgba(16,185,129,0.08)', name: 'Python ML Model', cat: 'Machine Learning', tags: ['Scikit-learn', 'Pandas'] },
  ]

  const skills = [
    // Ring 1 (inner)
    { label: 'Python', emoji: '🐍', r: 140, angle: 0 },
    { label: 'SQL', emoji: '🗄️', r: 140, angle: 72 },
    { label: 'Power BI', emoji: '📊', r: 140, angle: 144 },
    { label: 'Excel', emoji: '📗', r: 140, angle: 216 },
    { label: 'Tableau', emoji: '📈', r: 140, angle: 288 },
    // Ring 2 (outer)
    { label: 'Machine Learning', emoji: '🤖', r: 220, angle: 36 },
    { label: 'AI', emoji: '🧠', r: 220, angle: 96 },
    { label: 'Automation', emoji: '⚡', r: 220, angle: 156 },
    { label: 'Statistics', emoji: '📉', r: 220, angle: 216 },
    { label: 'Business Analytics', emoji: '💼', r: 220, angle: 276 },
    { label: 'Git', emoji: '🔀', r: 220, angle: 336 },
  ]

  const tools = [
    { emoji: '🐍', name: 'Python' },
    { emoji: '🗄️', name: 'SQL' },
    { emoji: '📊', name: 'Power BI' },
    { emoji: '📗', name: 'Excel' },
    { emoji: '📈', name: 'Tableau' },
    { emoji: '🐙', name: 'GitHub' },
    { emoji: '💻', name: 'VS Code' },
    { emoji: '🤖', name: 'ChatGPT' },
    { emoji: '🦙', name: 'Claude' },
    { emoji: '✨', name: 'Gemini' },
    { emoji: '⚙️', name: 'n8n' },
    { emoji: '🔧', name: 'Make' },
    { emoji: '🔗', name: 'Zapier' },
    { emoji: '🎨', name: 'Figma' },
  ]

  const audiences = [
    { emoji: '🎓', name: 'Students', desc: 'Build portfolio before graduating and land offers early' },
    { emoji: '🆕', name: 'Freshers', desc: 'Gain industry experience and skip the entry barrier' },
    { emoji: '🔄', name: 'Career Switchers', desc: 'Transition into data analytics from any background' },
    { emoji: '💼', name: 'Professionals', desc: 'Upskill with AI & analytics while continuing work' },
    { emoji: '🏫', name: 'Final Year', desc: 'Graduate placement-ready with real projects on resume' },
  ]

  const benefits = [
    { icon: '🏅', title: 'Industry Certificate', desc: 'Globally recognized certification backed by Analytics Avenue to strengthen your LinkedIn and resume.', tag: 'Verified', wide: false, tall: false },
    { icon: '🤝', title: 'Placement Support', desc: 'Active referrals to 50+ hiring partners, job updates, and direct shortlisting.', tag: 'Active', wide: false, tall: false },
    { icon: '🎤', title: 'Mock Interviews', desc: 'Practice with real data analytics interview questions conducted by industry professionals.', tag: 'Live', wide: true, tall: false },
    { icon: '📝', title: 'Resume Building', desc: 'One-on-one resume reviews, ATS optimization, and LinkedIn profile setup with expert guidance.', tag: 'Personal', wide: false, tall: false },
    { icon: '🏗️', title: 'Industry Projects', desc: 'Complete 5+ real projects used by top companies. Build a portfolio that speaks for itself.', tag: '5+ Projects', wide: false, tall: false },
    { icon: '🎯', title: 'Career Mentorship', desc: 'Weekly 1-on-1 sessions with senior mentors who have placed 1000+ students in top companies.', tag: 'Weekly', wide: false, tall: false },
    { icon: '👥', title: 'Community Access', desc: 'Join 10,000+ analytics professionals in our exclusive WhatsApp and Discord community.', tag: '10K+ Members', wide: true, tall: false },
    { icon: '🤖', title: 'AI Tools Training', desc: 'Master ChatGPT, Claude, Gemini, n8n, Make, and Zapier for automated analytics workflows.', tag: 'Cutting Edge', wide: false, tall: false },
  ]

  const daySchedule = [
    { time: '9:00 AM', icon: '📚', title: 'Learning Session', desc: 'Watch structured video lessons covering the day\'s topic with practical examples.' },
    { time: '11:00 AM', icon: '💻', title: 'Hands-on Practice', desc: 'Apply what you learned through guided exercises and real datasets.' },
    { time: '1:00 PM', icon: '🏗️', title: 'Project Work', desc: 'Contribute to your ongoing industry project, building real deliverables.' },
    { time: '3:00 PM', icon: '👩‍🏫', title: 'Mentor Session', desc: 'Join live doubt-clearing calls or book a 1-on-1 appointment with your mentor.' },
    { time: '5:00 PM', icon: '📋', title: 'Assignments', desc: 'Complete daily assignments that are reviewed by our expert panel for feedback.' },
    { time: '7:00 PM', icon: '🌐', title: 'Community', desc: 'Engage with peers, share progress, ask questions, and celebrate wins together.' },
  ]

  const testimonials = [
    { initials: 'RS', name: 'Rahul Sharma', role: 'Data Analyst @ Infosys', review: 'Analytics Avenue transformed my career. The projects were real, the mentors were top-notch, and I landed my dream job within 3 months.', pkg: '₹5.2 LPA', stars: 5 },
    { initials: 'PA', name: 'Priya Agarwal', role: 'Business Analyst @ Wipro', review: 'I switched from marketing to data analytics. The internship program gave me the confidence and the portfolio to make that leap.', pkg: '₹4.8 LPA', stars: 5 },
    { initials: 'AM', name: 'Arjun Mehta', role: 'AI Analyst @ TCS', review: 'The AI & Automation track was incredible. I built real automation workflows with n8n and ChatGPT. This is the future of analytics.', pkg: '₹6.1 LPA', stars: 5 },
    { initials: 'SK', name: 'Sneha Kumar', role: 'Data Scientist @ Accenture', review: 'Best investment in my career. 1-on-1 mentorship, real projects, and actual placement support. Not just another online course.', pkg: '₹7.2 LPA', stars: 5 },
    { initials: 'VR', name: 'Vikram Reddy', role: 'Analytics Lead @ Deloitte', review: 'The SQL and Power BI projects I built here are still what interviewers talk about in every round. Absolutely worth it.', pkg: '₹8.5 LPA', stars: 5 },
  ]

  const faqs = [
    { q: 'What is the duration of the internship program?', a: 'The internship program runs for 10–12 weeks depending on the track you choose. Each track is designed to take you from beginner to job-ready in the shortest time possible.' },
    { q: 'Do I need prior experience in data analytics?', a: 'No prior experience is required. Our program starts from absolute basics and progressively builds towards industry-level skills. Many of our students come from non-technical backgrounds.' },
    { q: 'Is this a remote or in-person internship?', a: 'The program is fully remote, allowing you to learn from anywhere in India (or abroad). All sessions, mentorships, and project submissions are conducted online.' },
    { q: 'Will I get a certificate after completion?', a: 'Yes. Upon successfully completing the internship and all project milestones, you will receive a completion certificate from Analytics Avenue that can be added to your LinkedIn profile and resume.' },
    { q: 'How does placement support work?', a: 'Our placement cell actively refers qualified graduates to 50+ hiring partner companies. We also conduct hiring drives, share job updates, and provide referral-based placements through our professional network.' },
    { q: 'What tools and technologies will I learn?', a: 'You will master Python, SQL, Power BI, Tableau, Excel, GitHub, VS Code, and AI tools like ChatGPT, Claude, Gemini, n8n, Make, and Zapier across different tracks.' },
    { q: 'Is there a fee for the internship?', a: 'Yes, the internship is a paid program. The fee covers mentorship, project resources, placement support, and lifetime community access. Contact us for current pricing and EMI options.' },
    { q: 'How do I apply for the internship?', a: 'Fill out the registration form on this page or book a free 1-on-1 consultation with our team. We will assess your goals and recommend the best track for your career path.' },
  ]

  const regHighlights = [
    { icon: '📅', title: 'Flexible Start Dates', desc: 'New batches start every month. Join when you are ready.' },
    { icon: '🎯', title: 'Personalized Track', desc: 'Our team recommends the best track based on your goals and background.' },
    { icon: '💰', title: 'EMI Available', desc: 'Flexible payment options to make quality education accessible to everyone.' },
    { icon: '🔄', title: 'Money-back Guarantee', desc: '7-day no-questions-asked refund if the program is not a fit for you.' },
  ]

  const regSteps = [
    'Fill the registration form',
    'Book a free consultation call',
    'Choose your internship track',
    'Begin your journey on Day 1',
  ]

  return (
    <div className="ip-page">

      {/* ── HERO ── */}
      <section className="ip-hero">
        <div className="ip-hero-bg-grid" />
        <div className="ip-hero-blob-1" />
        <div className="ip-hero-blob-2" />
        <div className="ip-container">
          <div className="ip-hero-inner">
            <div className="ip-hero-content">
              {/* Left */}
              <div className="ip-hero-left">
                <div className="ip-hero-badge">
                  <span className="ip-hero-badge-dot" />
                  Now Enrolling · Batch 2026
                </div>
                <h1 className="ip-hero-title">
                  Stop watching tutorials. <span className="ip-hero-title-accent">Start shipping AI</span><br />
                  that pays clients.
                </h1>
                <p className="ip-hero-desc">
                  8 weeks. One live project. A mentor who's actually built this stuff for global brands. Walk away with a portfolio that gets you hired — not another certificate that gathers dust.
                </p>
                <div className="ip-hero-pills">
                  {['🏗️ Live Projects', '🤖 AI & Automation', '🎓 Certification', '🤝 Placement Support'].map(p => (
                    <span key={p} className="ip-hero-pill">{p}</span>
                  ))}
                </div>
                <div className="ip-hero-actions">
                  <a href="https://pages.razorpay.com/discussion" target="_blank" rel="noopener noreferrer" className="ip-btn-primary">
                    Claim your seat
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </a>
                  <a href="#journey" onClick={scrollToJourney} className="ip-btn-secondary">
                    See what you'll build
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </a>
                </div>
              </div>

              {/* Right – Dashboard mockup */}
              <div className="ip-hero-right">
                <div className="ip-hero-dashboard">
                  <div className="ip-dashboard-topbar">
                    <div className="ip-dashboard-dot ip-dot-red" />
                    <div className="ip-dashboard-dot ip-dot-yellow" />
                    <div className="ip-dashboard-dot ip-dot-green" />
                  </div>
                  <div className="ip-dashboard-body">
                    <p className="ip-dashboard-title">Analytics Avenue · Student Dashboard</p>
                    <div className="ip-dashboard-stats">
                      <div className="ip-dash-stat">
                        <div className="ip-dash-stat-num">95%</div>
                        <div className="ip-dash-stat-lbl">Placement Rate</div>
                      </div>
                      <div className="ip-dash-stat">
                        <div className="ip-dash-stat-num">50+</div>
                        <div className="ip-dash-stat-lbl">Hiring Partners</div>
                      </div>
                      <div className="ip-dash-stat">
                        <div className="ip-dash-stat-num">10K+</div>
                        <div className="ip-dash-stat-lbl">Students</div>
                      </div>
                    </div>
                    <div className="ip-dashboard-bar-chart">
                      {[['Data Analytics', 95], ['Machine Learning', 80], ['AI Automation', 72], ['Business Intelligence', 88]].map(([label, pct]) => (
                        <div key={label} className="ip-bar-row">
                          <span className="ip-bar-label">{label}</span>
                          <div className="ip-bar-track"><div className="ip-bar-fill" style={{ width: `${pct}%` }} /></div>
                          <span className="ip-bar-pct">{pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="ip-hero-float-card card-1">
                  <div className="ip-float-icon ip-float-icon-blue">🏅</div>
                  <div>
                    <p className="ip-float-text-top">Certificate Included</p>
                    <p className="ip-float-text-bot">Industry recognized</p>
                  </div>
                </div>
                <div className="ip-hero-float-card card-2">
                  <div className="ip-float-icon ip-float-icon-green">✅</div>
                  <div>
                    <p className="ip-float-text-top">95% Got Placed</p>
                    <p className="ip-float-text-bot">In top companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="ip-marquee-section">
        <div className="ip-marquee-track">
          <div className="ip-marquee-inner">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="ip-marquee-item">
                <span className="ip-marquee-dot" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION 1: WHY ANALYTICS AVENUE ── */}
      <section className="ip-section">
        <div className="ip-container">
          <div className="ip-why-grid">
            {/* Left: visual */}
            <div className="ip-why-visual ip-animate">
              <div className="ip-why-float-badge">✅ 95% Placement Rate</div>
              <div className="ip-why-dashboard">
                <div className="ip-why-dashboard-header">
                  <div className="ip-why-dashboard-dots">
                    <div className="ip-wdot ip-wdot-r" />
                    <div className="ip-wdot ip-wdot-y" />
                    <div className="ip-wdot ip-wdot-g" />
                  </div>
                  <span className="ip-why-dashboard-label">ANALYTICS OVERVIEW</span>
                </div>
                <div className="ip-why-dashboard-body">
                  <div className="ip-why-chart-row">
                    <div className="ip-why-chart-card">
                      <div className="ip-why-chart-lbl">Placement Rate</div>
                      <div className="ip-why-donut" />
                    </div>
                    <div className="ip-why-chart-card">
                      <div className="ip-why-chart-lbl">Skills Progress</div>
                      <div className="ip-why-bar-group">
                        {[['Python', '90%'], ['SQL', '85%'], ['Power BI', '80%']].map(([n, w]) => (
                          <div key={n} className="ip-why-bar-row">
                            <span className="ip-why-bar-name">{n}</span>
                            <div className="ip-why-bar-bg"><div className="ip-why-bar-fill" style={{ width: w }} /></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="ip-why-stats-row">
                    <div className="ip-why-stat-box">
                      <div className="ip-why-stat-num">100+</div>
                      <div className="ip-why-stat-lbl">Projects</div>
                    </div>
                    <div className="ip-why-stat-box">
                      <div className="ip-why-stat-num">50+</div>
                      <div className="ip-why-stat-lbl">Companies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div className="ip-why-right ip-animate">
              <div className="ip-section-tag">Why Choose Us</div>
              <h2 className="ip-section-heading">
                The Only Internship That <span>Guarantees Results</span>
              </h2>
              <p className="ip-section-sub">
                Analytics Avenue is not just a training program. It's a complete career transformation system with real projects, expert mentors, and active placement support.
              </p>
              <div className="ip-why-features">
                {features.map((f, i) => (
                  <div key={i} className="ip-why-feature">
                    <div className="ip-why-feature-icon">{f.icon}</div>
                    <div>
                      <p className="ip-why-feature-title">{f.title}</p>
                      <p className="ip-why-feature-desc">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="ip-why-stats">
            {[['95%', 'Placement Rate'], ['50+', 'Hiring Partners'], ['100+', 'Industry Projects'], ['10,000+', 'Students Placed']].map(([num, lbl]) => (
              <div key={lbl} className="ip-stat-item ip-animate">
                <div className="ip-stat-num">{num}</div>
                <div className="ip-stat-lbl">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: LEARNING JOURNEY ── */}
      <section className="ip-section ip-section-alt" ref={journeyRef} id="journey">
        <div className="ip-container">
          <div className="ip-section-header-center ip-animate">
            <div className="ip-section-tag">Your Roadmap</div>
            <h2 className="ip-section-heading">12-Week <span>Learning Journey</span></h2>
            <p className="ip-section-sub ip-section-sub-center">
              A structured, step-by-step program designed to take you from zero to job-ready in 12 weeks.
            </p>
          </div>

          <div className="ip-journey-timeline">
            <div className="ip-journey-line" />
            {journeySteps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={i} className="ip-journey-step ip-animate">
                  {isLeft ? (
                    <>
                      <div className="ip-journey-step-left">
                        <div className="ip-journey-card">
                          <div className="ip-journey-card-tag">{step.icon} {step.tag}</div>
                          <div className="ip-journey-card-title">{step.title}</div>
                          <div className="ip-journey-card-desc">{step.desc}</div>
                          <div className="ip-journey-card-duration">⏱ {step.duration}</div>
                          <div className="ip-journey-progress">
                            <div className="ip-journey-progress-bar" style={{ width: `${step.progress}%` }} />
                          </div>
                        </div>
                      </div>
                      <div className="ip-journey-dot-col">
                        <div className="ip-journey-dot">{step.num}</div>
                      </div>
                      <div className="ip-journey-empty" />
                    </>
                  ) : (
                    <>
                      <div className="ip-journey-empty" />
                      <div className="ip-journey-dot-col">
                        <div className="ip-journey-dot">{step.num}</div>
                      </div>
                      <div className="ip-journey-step-right is-right">
                        <div className="ip-journey-card">
                          <div className="ip-journey-card-tag">{step.icon} {step.tag}</div>
                          <div className="ip-journey-card-title">{step.title}</div>
                          <div className="ip-journey-card-desc">{step.desc}</div>
                          <div className="ip-journey-card-duration">⏱ {step.duration}</div>
                          <div className="ip-journey-progress">
                            <div className="ip-journey-progress-bar" style={{ width: `${step.progress}%` }} />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: INTERNSHIP TRACKS ── */}
      <section className="ip-section">
        <div className="ip-container">
          <div className="ip-section-header-center ip-animate">
            <div className="ip-section-tag">Choose Your Path</div>
            <h2 className="ip-section-heading">Internship <span>Tracks</span></h2>
            <p className="ip-section-sub ip-section-sub-center">
              Three specialized tracks designed for different career goals. Each comes with live projects, mentorship, and placement support.
            </p>
          </div>

          <div className="ip-tracks-grid">
            {tracks.map((track, i) => (
              <div key={i} className="ip-track-card ip-animate">
                <div className="ip-track-card-top">
                  <div className="ip-track-icon">{track.icon}</div>
                  <div className="ip-track-name">{track.name}</div>
                  <span className="ip-track-duration">⏱ {track.duration}</span>
                </div>
                <div className="ip-track-card-body">
                  <div className="ip-track-row">
                    <div className="ip-track-row-label">Tools & Technologies</div>
                    <div className="ip-track-tools">
                      {track.tools.map(t => <span key={t} className="ip-track-tool-tag">{t}</span>)}
                    </div>
                  </div>
                  <div className="ip-track-row">
                    <div className="ip-track-row-label">Projects You'll Build</div>
                    <div className="ip-track-item-list">
                      {track.projects.map(p => (
                        <div key={p} className="ip-track-item">
                          <svg className="ip-track-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="ip-track-row">
                    <div className="ip-track-row-label">Career Path</div>
                    <div className="ip-track-item">
                      <svg className="ip-track-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {track.careerPath}
                    </div>
                  </div>
                  <div className="ip-track-row">
                    <div className="ip-track-row-label">Included</div>
                    <div className="ip-track-item-list">
                      {['Placement Support', 'Industry Certificate', 'Community Access'].map(b => (
                        <div key={b} className="ip-track-item">
                          <svg className="ip-track-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="ip-track-card-footer">
                  <a href="https://pages.razorpay.com/discussion" target="_blank" rel="noopener noreferrer" className="ip-track-apply-btn">
                    Apply for {track.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: INDUSTRY PROJECTS ── */}
      <section className="ip-section ip-section-alt">
        <div className="ip-container">
          <div className="ip-section-header-center ip-animate">
            <div className="ip-section-tag">Real Work</div>
            <h2 className="ip-section-heading">Industry <span>Project Portfolio</span></h2>
            <p className="ip-section-sub ip-section-sub-center">
              Every project you build here is based on real industry use-cases. Your portfolio will speak for itself.
            </p>
          </div>

          <div className="ip-projects-showcase">
            <div className="ip-projects-featured ip-animate">
              <div className="ip-projects-featured-header">
                <p className="ip-projects-featured-title">🏗️ Projects You'll Build</p>
                <span className="ip-projects-featured-badge">8 Projects</span>
              </div>
              <div className="ip-projects-featured-body">
                <div className="ip-projects-grid-mini">
                  {projects.map((p, i) => (
                    <div key={i} className="ip-project-mini-card">
                      <div className="ip-project-mini-icon">{p.icon}</div>
                      <p className="ip-project-mini-name">{p.name}</p>
                      <p className="ip-project-mini-type">{p.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="ip-projects-sidebar">
              {sidebarProjects.map((p, i) => (
                <div key={i} className="ip-project-sidebar-card ip-animate">
                  <div className="ip-project-sidebar-top">
                    <div className="ip-project-sidebar-icon" style={{ background: p.bg }}>{p.icon}</div>
                    <div>
                      <p className="ip-project-sidebar-name">{p.name}</p>
                      <p className="ip-project-sidebar-cat">{p.cat}</p>
                    </div>
                  </div>
                  <div className="ip-project-sidebar-tags">
                    {p.tags.map(t => <span key={t} className="ip-project-sidebar-tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SKILLS ORBIT ── */}
      <section className="ip-section">
        <div className="ip-container">
          <div className="ip-section-header-center ip-animate">
            <div className="ip-section-tag">Skills</div>
            <h2 className="ip-section-heading">Skills You'll <span>Master</span></h2>
          </div>

          <div className="ip-skills-wrapper ip-animate">
            {/* Rings */}
            <div className="ip-orbit-ring ip-orbit-ring-1" />
            <div className="ip-orbit-ring ip-orbit-ring-2" />

            {/* Center */}
            <div className="ip-skills-center">
              <span className="ip-skills-center-top">Become</span>
              <span className="ip-skills-center-main">Industry Ready</span>
            </div>

            {/* Skill nodes */}
            {skills.map((s, i) => {
              const rad = (s.angle * Math.PI) / 180
              const cx = 250 + s.r * Math.cos(rad - Math.PI / 2)
              const cy = 250 + s.r * Math.sin(rad - Math.PI / 2)
              return (
                <div key={i} className="ip-skill-node" style={{ left: cx, top: cy }}>
                  <div className="ip-skill-node-icon">{s.emoji}</div>
                  <span className="ip-skill-node-label">{s.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: TOOLS ── */}
      <section className="ip-section ip-section-alt">
        <div className="ip-container">
          <div className="ip-section-header-center ip-animate">
            <div className="ip-section-tag">Tech Stack</div>
            <h2 className="ip-section-heading">Tools You'll <span>Master</span></h2>
            <p className="ip-section-sub ip-section-sub-center">
              Master the exact tools used by data professionals at top companies worldwide.
            </p>
          </div>
          <div className="ip-tools-grid">
            {tools.map((t, i) => (
              <div key={i} className="ip-tool-item ip-animate">
                <div className="ip-tool-emoji">{t.emoji}</div>
                <div className="ip-tool-name">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: MENTOR ── */}
      <section className="ip-section ip-section-dark">
        <div className="ip-container">
          <div className="ip-mentor-grid">
            <div className="ip-mentor-portrait ip-animate">
              <div className="ip-mentor-img-wrap">
                <div className="ip-mentor-placeholder">
                  <div className="ip-mentor-avatar">👨‍💼</div>
                  <div className="ip-mentor-name-overlay">
                    <p className="ip-mentor-name">Founder & Lead Mentor</p>
                    <p className="ip-mentor-title-tag">Analytics Avenue</p>
                  </div>
                </div>
              </div>
              <div className="ip-mentor-experience-badge">
                <div className="ip-mentor-exp-num">9+</div>
                <div className="ip-mentor-exp-lbl">Years Experience</div>
              </div>
            </div>

            <div className="ip-mentor-right ip-animate">
              <div className="ip-section-tag">Meet Your Mentor</div>
              <blockquote className="ip-mentor-quote">
                "I built Analytics Avenue to give every aspiring data professional the exact mentorship I wished I had. Real projects. Real guidance. Real placements."
              </blockquote>
              <p className="ip-mentor-bio">
                With 9+ years in data analytics, business intelligence, and AI automation, our lead mentor has personally guided 1,000+ students and professionals into high-paying data roles. He has worked with Fortune 500 clients across India, US, and Europe.
              </p>
              <div className="ip-mentor-achievements">
                {[
                  ['🏆', '1,000+ Students Placed'],
                  ['🌍', 'Clients in 15+ Countries'],
                  ['📊', '500+ Industry Projects Delivered'],
                  ['🤝', '50+ Hiring Partner Network'],
                ].map(([icon, text]) => (
                  <div key={text} className="ip-mentor-achievement">
                    <div className="ip-mentor-achievement-icon">{icon}</div>
                    {text}
                  </div>
                ))}
              </div>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="ip-mentor-linkedin">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: WHO CAN JOIN ── */}
      <section className="ip-section">
        <div className="ip-container">
          <div className="ip-section-header-center ip-animate">
            <div className="ip-section-tag">Eligibility</div>
            <h2 className="ip-section-heading">Who Can <span>Join?</span></h2>
            <p className="ip-section-sub ip-section-sub-center">
              This program is designed for anyone who wants to build a career in data analytics — regardless of background.
            </p>
          </div>
          <div className="ip-audience-grid">
            {audiences.map((a, i) => (
              <div key={i} className="ip-audience-card ip-animate">
                <div className="ip-audience-emoji">{a.emoji}</div>
                <p className="ip-audience-name">{a.name}</p>
                <p className="ip-audience-desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: BENEFITS BENTO ── */}
      <section className="ip-section ip-section-alt">
        <div className="ip-container">
          <div className="ip-section-header-center ip-animate">
            <div className="ip-section-tag">What You Get</div>
            <h2 className="ip-section-heading">Internship <span>Benefits</span></h2>
          </div>
          <div className="ip-bento-grid">
            {benefits.map((b, i) => (
              <div key={i} className={`ip-bento-card${b.wide ? ' ip-bento-card-wide' : ''} ip-animate`}>
                <div className="ip-bento-accent" />
                <div className="ip-bento-icon">{b.icon}</div>
                <p className="ip-bento-title">{b.title}</p>
                <p className="ip-bento-desc">{b.desc}</p>
                <span className="ip-bento-tag">{b.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: A DAY INSIDE ── */}
      <section className="ip-section">
        <div className="ip-container">
          <div className="ip-section-header-center ip-animate">
            <div className="ip-section-tag">Daily Schedule</div>
            <h2 className="ip-section-heading">A Day Inside <span>Analytics Avenue</span></h2>
            <p className="ip-section-sub ip-section-sub-center">
              Every day is structured to maximize learning, practice, and growth. Here's what a typical internship day looks like.
            </p>
          </div>
          <div className="ip-day-timeline ip-animate">
            <div className="ip-day-timeline-line" />
            {daySchedule.map((item, i) => (
              <div key={i} className="ip-day-item">
                <div className="ip-day-icon-col">
                  <div className="ip-day-icon-circle">{item.icon}</div>
                </div>
                <div className="ip-day-content">
                  <div className="ip-day-time">{item.time}</div>
                  <div className="ip-day-title">{item.title}</div>
                  <div className="ip-day-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: NUMBERS ── */}
      <section className="ip-section ip-section-alt">
        <div className="ip-container">
          <div className="ip-section-header-center ip-animate">
            <div className="ip-section-tag">Our Impact</div>
            <h2 className="ip-section-heading">Numbers That <span>Speak</span></h2>
          </div>
          <div className="ip-numbers-grid ip-animate">
            <div className="ip-number-item">
              <div className="ip-number-big"><Counter target="95" suffix="%" /></div>
              <div className="ip-number-label">Placement Rate</div>
            </div>
            <div className="ip-number-item">
              <div className="ip-number-big"><Counter target="50" suffix="+" /></div>
              <div className="ip-number-label">Hiring Partners</div>
            </div>
            <div className="ip-number-item">
              <div className="ip-number-big"><Counter target="10000" suffix="+" /></div>
              <div className="ip-number-label">Students Trained</div>
            </div>
            <div className="ip-number-item">
              <div className="ip-number-big"><Counter target="500" suffix="+" /></div>
              <div className="ip-number-label">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: TESTIMONIALS ── */}
      <section className="ip-section">
        <div className="ip-container">
          <div className="ip-section-header-center ip-animate">
            <div className="ip-section-tag">Student Stories</div>
            <h2 className="ip-section-heading">Hear From Our <span>Alumni</span></h2>
            <p className="ip-section-sub ip-section-sub-center">
              Real results from real people. Our alumni are now data professionals at top companies.
            </p>
          </div>
          <div className="ip-testimonials-track ip-animate">
            {testimonials.map((t, i) => (
              <div key={i} className="ip-testimonial-card">
                <div className="ip-testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} className="ip-testimonial-star">★</span>
                  ))}
                </div>
                <p className="ip-testimonial-review">"{t.review}"</p>
                <div className="ip-testimonial-person">
                  <div className="ip-testimonial-avatar">{t.initials}</div>
                  <div>
                    <p className="ip-testimonial-name">{t.name}</p>
                    <p className="ip-testimonial-role">{t.role}</p>
                  </div>
                  <span className="ip-testimonial-package">{t.pkg}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 13: FAQ ── */}
      <section className="ip-section ip-section-alt">
        <div className="ip-container">
          <div className="ip-section-header-center ip-animate">
            <div className="ip-section-tag">FAQs</div>
            <h2 className="ip-section-heading">Frequently Asked <span>Questions</span></h2>
          </div>
          <div className="ip-faq-list ip-animate">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 14: REGISTRATION ── */}
      <section className="ip-section">
        <div className="ip-container">
          <div className="ip-reg-grid">
            {/* Left */}
            <div className="ip-reg-left ip-animate">
              <div className="ip-section-tag">Get Started</div>
              <h2 className="ip-section-heading">Register for the <span>Internship</span></h2>
              <p className="ip-section-sub">
                Take the first step towards your data analytics career. Our team will reach out within 24 hours to guide you through the selection process.
              </p>

              <div className="ip-reg-highlights">
                {regHighlights.map((h, i) => (
                  <div key={i} className="ip-reg-highlight">
                    <div className="ip-reg-highlight-icon">{h.icon}</div>
                    <div>
                      <p className="ip-reg-highlight-title">{h.title}</p>
                      <p className="ip-reg-highlight-desc">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ip-reg-timeline-mini">
                {regSteps.map((step, i) => (
                  <div key={i} className="ip-reg-timeline-step">
                    <div className="ip-reg-timeline-dot">{i + 1}</div>
                    <div className="ip-reg-timeline-text">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="ip-reg-right ip-animate">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
                  <h3 className="ip-reg-form-title">Application Submitted!</h3>
                  <p className="ip-reg-form-sub">Our team will contact you within 24 hours to guide you through the next steps.</p>
                </div>
              ) : (
                <>
                  <p className="ip-reg-form-title">Apply Now — It's Free</p>
                  <p className="ip-reg-form-sub">Fill in your details and we'll get in touch within 24 hours.</p>
                  <form className="ip-reg-form" onSubmit={handleForm}>
                    <div className="ip-form-group">
                      <label className="ip-form-label">Full Name *</label>
                      <input className="ip-form-input" type="text" placeholder="Enter your full name" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className="ip-form-group">
                      <label className="ip-form-label">Email Address *</label>
                      <input className="ip-form-input" type="email" placeholder="Enter your email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div className="ip-form-group">
                      <label className="ip-form-label">Phone Number *</label>
                      <input className="ip-form-input" type="tel" placeholder="+91 XXXXX XXXXX" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div className="ip-form-group">
                      <label className="ip-form-label">Internship Track *</label>
                      <select className="ip-form-select" required value={formData.track} onChange={e => setFormData({ ...formData, track: e.target.value })}>
                        <option value="">Select your track</option>
                        <option value="data-analytics">Data Analytics</option>
                        <option value="business-analytics">Business Analytics</option>
                        <option value="ai-automation">AI & Automation</option>
                      </select>
                    </div>
                    <div className="ip-form-group">
                      <label className="ip-form-label">Current Background</label>
                      <select className="ip-form-select" value={formData.background} onChange={e => setFormData({ ...formData, background: e.target.value })}>
                        <option value="">Select your background</option>
                        <option value="student">Student</option>
                        <option value="fresher">Fresher (0–1 yr)</option>
                        <option value="professional">Working Professional</option>
                        <option value="career-switch">Career Switcher</option>
                      </select>
                    </div>
                    <button type="submit" className="ip-form-submit">Submit Application →</button>
                    <p className="ip-form-note">🔒 Your data is safe. We never spam or share your information.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 15: FINAL CTA ── */}
      <section className="ip-final-cta">
        <div className="ip-final-cta-bg-glow" />
        <div className="ip-container">
          <div className="ip-final-cta-inner">
            <div className="ip-final-cta-badge">🚀 Batch 2026 Now Open</div>
            <h2 className="ip-final-cta-title">
              Start Your <span>Analytics Career</span> Today
            </h2>
            <p className="ip-final-cta-sub">
              Join 10,000+ students who transformed their careers with Analytics Avenue's internship program.
            </p>
            <div className="ip-final-cta-actions">
              <a href="https://pages.razorpay.com/discussion" target="_blank" rel="noopener noreferrer" className="ip-btn-cta-primary">
                Apply Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="/assets/broucher/nationwide program Brouchure.pdf" download className="ip-btn-cta-secondary">
                Download Brochure
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
