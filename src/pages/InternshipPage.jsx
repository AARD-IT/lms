import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion'
import {
  Users,
  Cpu,
  Zap,
  GraduationCap,
  Briefcase,
  BookOpen,
  Award,
  TrendingUp,
  BarChart3,
  Database,
  Sparkles,
  ShoppingCart,
  HeartPulse,
  Building2,
  Factory,
  Truck,
  CheckCircle2,
  UserCheck,
  FileBadge,
  FolderGit2,
  CircleDollarSign,
  Calendar,
  Clock,
  User,
  Globe,
  LineChart,
  Handshake,
  ChevronDown,
  ChevronUp,
  Send,
  ArrowRight,
  MapPin,
  Check,
  Terminal,
  Layers,
  GitBranch,
  Workflow,
  HelpCircle,
  BriefcaseBusiness,
  Quote,
  MessageCircle,
  BadgeCheck,
  Code,
  Monitor
} from 'lucide-react'
import './InternshipPage.css'

/* ── Animated Counter Component ── */
function AnimatedCounter({ value, duration = 1.5 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const numericPart = parseInt(value.replace(/\D/g, ''), 10)
    if (isNaN(numericPart)) {
      setCount(value)
      return
    }

    let start = 0
    const frameRate = 1000 / 60
    const totalFrames = Math.round((duration * 1000) / frameRate)
    let frame = 0

    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      // Ease out quad
      const current = Math.round(numericPart * (progress * (2 - progress)))
      setCount(current)

      if (frame >= totalFrames) {
        setCount(numericPart)
        clearInterval(counter)
      }
    }, frameRate)

    return () => clearInterval(counter)
  }, [isInView, value, duration])

  const suffix = value.includes('+') ? '+' : value.includes('%') ? '%' : ''

  return (
    <span ref={ref} className="ip-counter-num">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

/* ── FAQ Accordion Item Component ── */
function FaqAccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`ip-faq-accordion-card ${isOpen ? 'is-open' : ''}`}>
      <button className="ip-faq-accordion-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span className="ip-faq-accordion-q">{question}</span>
        <motion.span
          className="ip-faq-accordion-icon"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown width="20" height="20" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="ip-faq-accordion-content"
          >
            <p className="ip-faq-accordion-a">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── Section Wrapper with Motion Reveal ── */
function Section({ children, className = '', id }) {
  return (
    <motion.section
      id={id}
      className={`ip-section-wrapper ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  )
}

export default function InternshipPage({ onNavigateHome }) {
  const formRef = useRef(null)
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 60%"]
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  const scrollToForm = (e) => {
    e.preventDefault()
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleChooseTrack = (trackTitle, e) => {
    e.preventDefault()
    setFormData(prev => ({ ...prev, track: trackTitle }))
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  /* Form State */
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    degreeYear: '',
    track: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  /* FAQ Accordion State */
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  /* ── Preserved Data Structures ── */
  const marqueeItems = [
    'Live Projects', 'AI Automation', 'Power BI', 'SQL', 'Python',
    'Tableau', 'Resume Building', 'Mock Interviews', 'Placement Support',
    'Industry Mentorship', 'Certifications', 'Hiring Partners',
    'Data Engineering', 'Machine Learning', 'Excel Analytics'
  ]

  /* ── New Program Details ── */
  const stats = [
    { value: '2,000+', label: 'Career consultations delivered', icon: <Users className="ip-stat-icon-lucide" /> },
    { value: '100+', label: 'Production ML models built', icon: <Cpu className="ip-stat-icon-lucide" /> },
    { value: '15+', label: 'AI automation workflows live', icon: <Zap className="ip-stat-icon-lucide" /> },
    { value: '1,000+', label: 'Rural students empowered', icon: <GraduationCap className="ip-stat-icon-lucide" /> },
    { value: '500+', label: 'Professionals placed', icon: <Briefcase className="ip-stat-icon-lucide" /> }
  ]

  const audiences = [
    {
      num: '01',
      title: 'The final-year student',
      desc: 'Your degree is almost done but your portfolio is empty. You need real project experience before placements hit — and you need it fast.',
      icon: <BookOpen className="ip-who-icon-lucide" />
    },
    {
      num: '02',
      title: 'The recent graduate',
      desc: 'You have a degree but every job asks for "2 years of experience." This is how you bridge that gap with actual work to show for it.',
      icon: <Award className="ip-who-icon-lucide" />
    },
    {
      num: '03',
      title: 'The career switcher',
      desc: "You're moving from a different field into data or AI. You need structured learning, not just YouTube videos — and a team that takes you seriously.",
      icon: <TrendingUp className="ip-who-icon-lucide" />
    }
  ]

  const programStacks = [
    {
      title: 'Data Analytics & BI',
      desc: 'Dashboards, storytelling with data, and business intelligence that actually drives decisions.',
      icon: <BarChart3 className="ip-prog-stack-icon" />
    },
    {
      title: 'Data Engineering',
      desc: 'Modern pipelines with dbt, Airflow, and Snowflake — the infrastructure layer every team needs.',
      icon: <Database className="ip-prog-stack-icon" />
    },
    {
      title: 'Generative AI & Agents',
      desc: 'LLMs, AI automation, and real-world agentic applications built with LangChain and n8n.',
      icon: <Sparkles className="ip-prog-stack-icon" />
    }
  ]

  const techChips = [
    'Python', 'SQL', 'Excel', 'Power BI', 'Tableau', 'Airflow',
    'dbt', 'Snowflake', 'LangChain', 'n8n', 'OpenAI API', 'Gemini API', 'Prompt Engineering'
  ]

  const industries = [
    { name: 'Retail & E-commerce', icon: <ShoppingCart className="ip-ind-icon" /> },
    { name: 'Healthcare', icon: <HeartPulse className="ip-ind-icon" /> },
    { name: 'BFSI', icon: <Building2 className="ip-ind-icon" /> },
    { name: 'Manufacturing', icon: <Factory className="ip-ind-icon" /> },
    { name: 'EdTech', icon: <GraduationCap className="ip-ind-icon" /> },
    { name: 'Logistics', icon: <Truck className="ip-ind-icon" /> }
  ]

  const skillsTracks = [
    {
      title: 'Data Analytics & BI',
      icon: <BarChart3 className="ip-skills-track-icon text-blue-500" />,
      skills: ['SQL', 'Excel', 'Power BI', 'Tableau', 'Python Basics']
    },
    {
      title: 'Data Engineering',
      icon: <Database className="ip-skills-track-icon text-purple-500" />,
      skills: ['Python', 'SQL', 'dbt', 'Airflow', 'Snowflake', 'Pipelines']
    },
    {
      title: 'Generative AI & Agents',
      icon: <Sparkles className="ip-skills-track-icon text-amber-500" />,
      skills: ['LangChain', 'n8n', 'OpenAI API', 'Prompt Engineering', 'Python']
    }
  ]

  const tracks = [
    {
      title: 'Data Analytics & BI',
      bestFor: 'Business-minded learners who love turning numbers into stories',
      skills: ['SQL', 'Excel', 'Power BI', 'Tableau', 'Python Basics'],
      jobs: ['Data Analyst', 'BI Developer', 'Reporting Analyst']
    },
    {
      title: 'Data Engineering',
      bestFor: 'Those who want to build the infrastructure behind data products',
      skills: ['Python', 'SQL', 'dbt', 'Airflow', 'Snowflake', 'Pipelines'],
      jobs: ['Data Engineer', 'ETL Developer', 'Analytics Engineer']
    },
    {
      title: 'Generative AI & Agents',
      bestFor: 'Curious minds excited about LLMs, automation, and the future of AI',
      skills: ['LangChain', 'n8n', 'OpenAI API', 'Prompt Engineering', 'Python'],
      jobs: ['AI Engineer', 'Prompt Engineer', 'ML Ops', 'AI Product Roles']
    }
  ]

  const walks = [
    { title: 'Live project exposure', icon: <Briefcase className="ip-walk-icon" />, desc: 'Deploy production-level code and dashboards rather than toy local projects.' },
    { title: 'Industry mentorship', icon: <UserCheck className="ip-walk-icon" />, desc: 'Get reviewed and guided weekly by senior practitioners active in global brands.' },
    { title: 'Verified certificate + LinkedIn recommendation', icon: <FileBadge className="ip-walk-icon" />, desc: 'Boost your personal profile and credibility with written mentor recommendations.' },
    { title: 'Portfolio-ready work', icon: <FolderGit2 className="ip-walk-icon" />, desc: 'Assemble a showcase of real enterprise projects to show recruiters during calls.' },
    { title: 'Placement pathway', icon: <Award className="ip-walk-icon" />, desc: 'Direct referral pipelines to top tech firms hiring data professionals.' },
    { title: 'Stipend eligibility', icon: <CircleDollarSign className="ip-walk-icon" />, desc: 'Earn performance-linked incentives and stipends based on milestone builds.' }
  ]

  const journeyTimeline = [
    {
      week: 'Week 1–2',
      title: 'Onboarding & orientation',
      desc: "Meet your mentor, get introduced to your live project, set up your tools, and understand the workflow you'll be contributing to from day one.",
      icon: <Users />
    },
    {
      week: 'Week 3–4',
      title: 'Deep-dive execution',
      desc: "Core deliverables — data cleaning, pipeline building, model testing, dashboard development, or AI agent workflows depending on your track.",
      icon: <Code />
    },
    {
      week: 'Week 5–6',
      title: 'Iteration & mentor review',
      desc: "Mid-point review with your mentor. Incorporate feedback, sharpen your work, and push your outputs closer to production quality.",
      icon: <MessageCircle />
    },
    {
      week: 'Week 7',
      title: 'Presentation prep',
      desc: "Structure your findings, build your showcase deck, and rehearse how to walk a real stakeholder through your project.",
      icon: <Monitor />
    },
    {
      week: 'Week 8',
      title: 'Final showcase & certification',
      desc: "Present to the Analytics Avenue team. Receive your internship certificate, LinkedIn recommendation, and career pathway guidance.",
      icon: <BadgeCheck />
    }
  ]

  const dayLife = [
    { time: '9:00 AM', event: 'Daily Standup', desc: 'Align on metrics, discuss blockers, and set the daily sprint goals.' },
    { time: '10:00 AM', event: 'Deep Work Block', desc: 'Intense building, debugging pipelines, or writing analytics models.' },
    { time: '2:00 PM', event: 'Skill Session', desc: 'Interactive workshop on modern architecture, GenAI agents, or dbt.' },
    { time: '4:00 PM', event: 'Review & Document', desc: 'Sync code, write clean readmes, and push changes for mentor review.' }
  ]

  const mentorStats = [
    { num: '100+', label: 'professionals mentored', icon: <Users className="ip-mentor-icon" /> },
    { num: '25+', label: 'global brands', icon: <Globe className="ip-mentor-icon" /> },
    { num: '100+', label: 'ML solutions built', icon: <Cpu className="ip-mentor-icon" /> },
    { num: '25+', label: 'guest lectures', icon: <Award className="ip-mentor-icon" /> }
  ]

  const faqs = [
    {
      q: 'Do I need coding experience to apply?',
      a: 'No prior coding experience is required. We start from the absolute fundamentals of SQL and Python, building your skills step-by-step up to Generative AI.'
    },
    {
      q: 'Is this a paid internship?',
      a: 'Yes, there is an enrollment fee to cover personalized 1-on-1 mentorship, project reviews, and resources. You also become eligible for performance-based stipends during the program.'
    },
    {
      q: 'Is this online or in-person?',
      a: 'The program is 100% online and remote, designed to fit into your academic schedule or work routine with flexible deep-work blocks.'
    },
    {
      q: 'What makes this different from an online course?',
      a: 'Unlike static video courses, this is a hands-on builder experience. You will work on actual production models, participate in daily standups, and get reviewed directly by industry mentors.'
    },
    {
      q: 'How do I know which track to choose?',
      a: "Select the track that closest aligns with your career goals. If you're unsure, apply anyway—your mentor will help you decide the best path during your onboarding consultation."
    },
    {
      q: 'Will I get a job after this?',
      a: 'While we do not guarantee jobs, we provide a complete placement pathway with resume reviews, mock interviews, and direct referrals to our 50+ hiring partners.'
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  }

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
                  <a href="#apply-form" onClick={scrollToForm} className="ip-btn-primary">
                    Claim your seat
                    <ArrowRight width="16" height="16" />
                  </a>
                  <a href="#program" className="ip-btn-secondary">
                    See what you'll build
                    <ChevronDown width="16" height="16" />
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

      {/* ── SECTION 1: IMPACT NUMBERS ── */}
      <Section className="ip-impact-section">
        <div className="ip-container">
          <motion.div
            className="ip-stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {stats.map((s, i) => (
              <motion.div key={i} className="ip-stat-card" variants={itemVariants}>
                <div className="ip-stat-card-glow" />
                <div className="ip-stat-icon-wrapper">{s.icon}</div>
                <div className="ip-stat-value-container">
                  <AnimatedCounter value={s.value} />
                </div>
                <p className="ip-stat-label-text">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── SECTION 2: WHO IS THIS FOR? ── */}
      <Section className="ip-who-section">
        <div className="ip-container">
          <div className="ip-section-heading-block">
            <h2 className="ip-new-section-title">Who is this for?</h2>
            <p className="ip-new-section-subtitle">Recognize yourself here? Good. Keep reading.</p>
          </div>
          <motion.div
            className="ip-who-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {audiences.map((aud, i) => (
              <motion.div key={i} className="ip-who-card" variants={itemVariants}>
                <div className="ip-who-card-glow" />
                <div className="ip-who-card-header">
                  <span className="ip-who-num">{aud.num}</span>
                  <div className="ip-who-icon-box">{aud.icon}</div>
                </div>
                <h3 className="ip-who-title">{aud.title}</h3>
                <p className="ip-who-desc">{aud.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── SECTION 3: THE PROGRAM ── */}
      <Section id="program" className="ip-program-section">
        <div className="ip-container">
          <div className="ip-section-heading-block">
            <h2 className="ip-new-section-title">One program. The complete Data & AI stack.</h2>
            <p className="ip-new-section-subtitle">
              Whether you're a student, fresher, or career-switcher — no prior coding needed. You'll go from data fundamentals to Generative AI with real projects at every stage.
            </p>
          </div>
          <motion.div
            className="ip-program-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {programStacks.map((stack, i) => (
              <motion.div key={i} className="ip-program-card" variants={itemVariants}>
                <div className="ip-program-card-header">
                  <div className="ip-prog-icon-box">{stack.icon}</div>
                  <div className="ip-program-card-tag">Core Module</div>
                </div>
                <h3 className="ip-program-card-title">{stack.title}</h3>
                <p className="ip-program-card-desc">{stack.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="ip-tech-cloud-block">
            <h4 className="ip-tech-cloud-title">Technologies you will master</h4>
            <div className="ip-tech-chips">
              {techChips.map((chip, i) => (
                <motion.span
                  key={i}
                  className="ip-tech-chip"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 4: INDUSTRIES ── */}
      <Section className="ip-industries-section">
        <div className="ip-container">
          <div className="ip-section-heading-block">
            <h2 className="ip-new-section-title">Industries You'll Work Across</h2>
          </div>
          <motion.div
            className="ip-industries-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {industries.map((ind, i) => (
              <motion.div key={i} className="ip-industry-card" variants={itemVariants}>
                <div className="ip-ind-icon-box">{ind.icon}</div>
                <span className="ip-industry-name">{ind.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── SECTION 5: REDESIGNED SKILLS SECTION ── */}
      <Section className="ip-skills-professional-section">
        <div className="ip-container">
          <div className="ip-section-heading-block">
            <h2 className="ip-new-section-title">Skills You'll Master</h2>
            <p className="ip-new-section-subtitle">
              Become industry-ready with targeted expertise curated across three professional disciplines.
            </p>
          </div>

          <motion.div
            className="ip-skills-tracks-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {skillsTracks.map((st, i) => (
              <motion.div key={i} className="ip-skills-track-card" variants={itemVariants}>
                <div className="ip-skills-track-header">
                  <div className="ip-skills-track-icon-wrapper">{st.icon}</div>
                  <h3 className="ip-skills-track-title">{st.title}</h3>
                </div>
                <ul className="ip-skills-track-list">
                  {st.skills.map((skill, j) => (
                    <li key={j} className="ip-skills-track-item">
                      <CheckCircle2 className="ip-skills-check-icon text-blue-500" width="16" height="16" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── SECTION 6: PICK YOUR TRACK ── */}
      <Section className="ip-tracks-section">
        <div className="ip-container">
          <div className="ip-section-heading-block">
            <h2 className="ip-new-section-title">Three tracks. One goal: industry-ready.</h2>
            <p className="ip-new-section-subtitle">
              All tracks share the same mentorship structure and certification. Choose what aligns with where you want to go.
            </p>
          </div>
          <motion.div
            className="ip-track-cards-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {tracks.map((track, i) => (
              <motion.div key={i} className="ip-compare-card" variants={itemVariants}>
                <div className="ip-compare-header">
                  <h3 className="ip-compare-title">{track.title}</h3>
                  <p className="ip-compare-best"><span>Best for:</span> {track.bestFor}</p>
                </div>
                <div className="ip-compare-body">
                  <div className="ip-compare-skills-wrap">
                    <span className="ip-compare-label">Target Skills</span>
                    <div className="ip-compare-chips">
                      {track.skills.map((s, j) => <span key={j} className="ip-compare-skill-chip">{s}</span>)}
                    </div>
                  </div>
                  <div className="ip-compare-careers-wrap">
                    <span className="ip-compare-label">Career Outcomes</span>
                    <ul className="ip-compare-jobs-list">
                      {track.jobs.map((j, k) => (
                        <li key={k}>
                          <Check className="ip-checkmark-icon text-emerald-500" width="14" height="14" strokeWidth="3" />
                          {j}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="ip-compare-footer">
                  <a
                    href="#apply-form"
                    onClick={(e) => handleChooseTrack(track.title, e)}
                    className="ip-compare-btn"
                  >
                    Choose Track
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="ip-mentor-note-highlight">
            <div className="ip-mentor-note-icon">💡</div>
            <p className="ip-mentor-note-text">
              "Not sure which track is right for you? Apply and mention it — your mentor will help you decide."
            </p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 7: WHAT YOU WALK AWAY WITH ── */}
      <Section className="ip-walkaway-section">
        <div className="ip-container">
          <div className="ip-section-heading-block">
            <h2 className="ip-new-section-title">Real gains. Not just a certificate.</h2>
            <p className="ip-new-section-subtitle">
              Every element of this program is designed around one question: what does this intern need to actually land a job?
            </p>
          </div>
          <motion.div
            className="ip-walkaway-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {walks.map((w, i) => (
              <motion.div key={i} className="ip-walk-card" variants={itemVariants}>
                <div className="ip-walk-icon-box">{w.icon}</div>
                <h3 className="ip-walk-title">{w.title}</h3>
                <p className="ip-walk-desc">{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── SECTION 8: 8 WEEK JOURNEY ── */}
      <Section className="ip-journey-section">
        <div className="ip-journey-container">
          <div className="ip-journey-header">
            <span className="ip-journey-eyebrow">8-WEEK JOURNEY</span>
            <h2 className="ip-journey-title-main">Week by week. Milestone by milestone.</h2>
            <p className="ip-journey-desc-main">
              A structured program with clear checkpoints — so you always know where you are and where you're headed.
            </p>
          </div>

          <div className="ip-journey-timeline" ref={timelineRef}>
            {/* Background line track */}
            <div className="ip-journey-timeline-track" />

            {/* Scroll-animated progress line */}
            <motion.div
              className="ip-journey-timeline-progress"
              style={{ scaleY }}
            />

            {journeyTimeline.map((item, i) => (
              <motion.div
                key={i}
                className="ip-journey-milestone"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="ip-journey-timeline-col">
                  <motion.div
                    className="ip-journey-icon-circle"
                    whileHover={{ scale: 1.05, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {item.icon}
                  </motion.div>
                  {i < journeyTimeline.length - 1 && (
                    <motion.div
                      className="ip-journey-connector-dot"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 300 }}
                    />
                  )}
                </div>

                <div className="ip-journey-card-col">
                  <motion.div
                    className="ip-journey-step-card"
                    whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(3, 119, 239, 0.08)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="ip-journey-card-header-row">
                      <span className="ip-journey-week-badge-pill">{item.week}</span>
                      <h3 className="ip-journey-card-title-text">{item.title}</h3>
                    </div>
                    <p className="ip-journey-card-desc-text">{item.desc}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SECTION 9: A DAY IN THE LIFE ── */}
      <Section className="ip-daylife-section">
        <div className="ip-container">
          <div className="ip-section-heading-block">
            <h2 className="ip-new-section-title">A Day in the Life</h2>
          </div>
          <div className="ip-horizontal-timeline-scroll">
            <motion.div
              className="ip-horizontal-timeline"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {dayLife.map((step, i) => (
                <motion.div key={i} className="ip-daylife-card" variants={itemVariants}>
                  <div className="ip-daylife-card-glow" />
                  <div className="ip-daylife-header">
                    <div className="ip-daylife-time-tag">{step.time}</div>
                    <Clock width="16" height="16" className="text-blue-500" />
                  </div>
                  <h3 className="ip-daylife-event">{step.event}</h3>
                  <p className="ip-daylife-desc">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 10: LED BY ── */}
      <Section className="ip-ledby-section">
        <div className="ip-container">
          <div className="ip-ledby-card">
            <div className="ip-ledby-grid">
              <div className="ip-ledby-left">
                <div className="ip-mentor-badge">Program Director</div>
                <h2 className="ip-ledby-name">Subramani Arumugam</h2>
                <p className="ip-ledby-role">Founder & Chief Data Scientist, Analytics Avenue</p>

                <div className="ip-mentor-stats-grid">
                  {mentorStats.map((ms, i) => (
                    <div key={i} className="ip-mentor-stat-item">
                      <div className="ip-mentor-stat-header">
                        {ms.icon}
                        <span className="ip-mentor-stat-num">{ms.num}</span>
                      </div>
                      <span className="ip-mentor-stat-lbl">{ms.label}</span>
                    </div>
                  ))}
                </div>

                <div className="ip-mentor-quote-block">
                  <Quote className="ip-mentor-quote-symbol" />
                  <p className="ip-mentor-quote-text">
                    "Empowering the next generation of Data & AI professionals through mentorship, innovation, and industry-focused learning."
                  </p>
                </div>
              </div>
              <div className="ip-ledby-right">
                <div className="ip-mentor-avatar-box">
                  <img src="/assets/frontend/default/images/img/thelmmssbanners1.jpeg" alt="Subramani Arumugam" className="ip-mentor-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 11: FAQ ── */}
      <Section className="ip-faq-section">
        <div className="ip-container">
          <div className="ip-section-heading-block">
            <h2 className="ip-new-section-title">Frequently Asked Questions</h2>
          </div>
          <div className="ip-faq-accordion-list">
            {faqs.map((faq, i) => (
              <FaqAccordionItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaqIndex === i}
                onToggle={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* ── SECTION 12: FINAL CTA ── */}
      <Section className="ip-finalcta-section">
        <div className="ip-container">
          <div className="ip-finalcta-block">
            <div className="ip-finalcta-glow-1" />
            <div className="ip-finalcta-glow-2" />
            <div className="ip-finalcta-content">
              <h2 className="ip-finalcta-heading">Ready?</h2>
              <h3 className="ip-finalcta-subheading">Every day you wait, someone else is building your portfolio.</h3>
              <p className="ip-finalcta-desc">
                No more "someday." No more "one more course." Real projects, real mentors, and a network that's already placed 500+ people — starting now.
              </p>

              <div className="ip-finalcta-actions">
                <a href="#apply-form" onClick={scrollToForm} className="ip-btn-cta-primary-new">
                  Claim your seat <ArrowRight width="16" height="16" style={{ marginLeft: '6px' }} />
                </a>
                <a href="https://pages.razorpay.com/discussion" target="_blank" rel="noopener noreferrer" className="ip-btn-cta-secondary-new">
                  Talk to us first
                </a>
              </div>

              <p className="ip-finalcta-disclaimer">
                Seats are capped each cohort to protect mentor access · Response within 2 business days
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 13: APPLICATION FORM ── */}
      <Section id="apply-form" className="ip-form-section">
        <div className="ip-container" ref={formRef}>
          <div className="ip-form-card">
            {submitted ? (
              <motion.div
                className="ip-form-success"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <span className="ip-success-icon">🎉</span>
                <h3 className="ip-success-title">Application Submitted Successfully!</h3>
                <p className="ip-success-desc">
                  Thank you for applying. The Analytics Avenue admissions team will reach out to you within 2 business days.
                </p>
              </motion.div>
            ) : (
              <>
                <h2 className="ip-form-card-title">Apply for the Cohort</h2>
                <form className="ip-app-form" onSubmit={handleFormSubmit}>
                  <div className="ip-form-grid-fields">
                    <div className="ip-form-field">
                      <label className="ip-form-label">First Name *</label>
                      <input
                        type="text"
                        className="ip-form-input"
                        placeholder="Enter your first name"
                        required
                        value={formData.firstName}
                        onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="ip-form-field">
                      <label className="ip-form-label">Last Name *</label>
                      <input
                        type="text"
                        className="ip-form-input"
                        placeholder="Enter your last name"
                        required
                        value={formData.lastName}
                        onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                    <div className="ip-form-field">
                      <label className="ip-form-label">Email *</label>
                      <input
                        type="email"
                        className="ip-form-input"
                        placeholder="you@example.com"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="ip-form-field">
                      <label className="ip-form-label">Phone *</label>
                      <input
                        type="tel"
                        className="ip-form-input"
                        placeholder="Enter phone number"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="ip-form-field">
                      <label className="ip-form-label">College / University *</label>
                      <input
                        type="text"
                        className="ip-form-input"
                        placeholder="Your university name"
                        required
                        value={formData.university}
                        onChange={e => setFormData({ ...formData, university: e.target.value })}
                      />
                    </div>
                    <div className="ip-form-field">
                      <label className="ip-form-label">Degree & Year *</label>
                      <input
                        type="text"
                        className="ip-form-input"
                        placeholder="e.g. B.Tech 2026"
                        required
                        value={formData.degreeYear}
                        onChange={e => setFormData({ ...formData, degreeYear: e.target.value })}
                      />
                    </div>
                    <div className="ip-form-field full-width">
                      <label className="ip-form-label">Track Dropdown *</label>
                      <select
                        className="ip-form-input ip-form-select"
                        required
                        value={formData.track}
                        onChange={e => setFormData({ ...formData, track: e.target.value })}
                      >
                        <option value="">Select your preferred track</option>
                        <option value="Data Analytics & BI">Data Analytics & BI</option>
                        <option value="Data Engineering">Data Engineering</option>
                        <option value="Generative AI & Agents">Generative AI & Agents</option>
                      </select>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="ip-form-submit-btn"
                    whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(3, 119, 239, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Application
                  </motion.button>

                  <p className="ip-form-disclosure">
                    By submitting, you agree to be contacted by the Analytics Avenue team regarding your application.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </Section>

    </div>
  )
}
