import { useState } from 'react'
import './LiveBatchesSection.css'

const CURRICULUM_TABS = [
  {
    id: 'genai',
    label: 'Gen AI',
    icon: '/assets/our_program_modules/ai.svg',
    title: 'Data & Generative AI',
    meta: '6 Weeks • Live + Recorded • Intermediate → Advanced',
    description: 'From LLM foundations to production GenAI—then the 2026 market signals hiring teams actually watch for.',
    heroStats: [
      { value: '35%', label: 'CAGR Growth', color: '#2563eb' },
      { value: '₹50L', label: 'Max Package', color: '#7c3aed' },
      { value: '7L+', label: 'Openings', color: '#059669' },
    ],
    outcomes: ['AI Engineer', 'GenAI Developer', 'ML Engineer'],
    learn: [
      'AI & ML foundations — supervised, unsupervised & reinforcement',
      'LLMs — GPT, Gemini, Claude — architecture & applications',
      'Prompt engineering & RAG (Retrieval-Augmented Generation)',
      'LangChain, LlamaIndex & vector database integration',
      'Building custom GenAI products & AI-powered workflows',
      'MLOps — model deployment, monitoring & CI/CD pipelines',
      'Hugging Face, fine-tuning & open-source LLM deployment',
      'Capstone: production-ready GenAI application',
    ],
    trendsHeading: '2026 market intelligence',
    trendsItems: [
      'GenAI growing 3× faster than classical ML libraries — PyTorch now #1 AI framework',
      'Agentic AI — autonomous agents that plan, execute & verify entire workflows',
      'RAG evolving beyond vector search → graph-aware, hybrid & multimodal retrieval',
      'AI factories: Procter & Gamble, Intuit building internal GenAI operating systems',
      'Prompt engineering is the fastest ROI skill for any data professional in 2026',
      '35% CAGR in data + AI sector — 5–7 lakh openings in Bengaluru & Hyderabad',
      'GenAI Developer salary: ₹18–50 LPA • MLOps: ₹20–35 LPA at top MNCs',
    ],
    videoUrl: 'https://www.youtube.com/embed/8vNgtV-nquI?rel=0',
    accentColor: '#7c3aed',
    accentSoft: 'rgba(124,58,237,0.08)',
  },
  {
    id: 'python',
    label: 'Python',
    icon: '/assets/our_program_modules/python.svg',
    title: 'Python for Data Analytics',
    meta: '8 Weeks • Live + Recorded • Beginner → Advanced',
    description: 'Build a strong analytics core in Python—then layer in how teams actually work in 2026: GenAI helpers, cloud warehouses, AutoML, and the stack employers screen for.',
    heroStats: [
      { value: '32%', label: 'CAGR Growth', color: '#2563eb' },
      { value: '₹42L', label: 'Max Package', color: '#7c3aed' },
      { value: '6L+', label: 'Openings', color: '#059669' },
    ],
    outcomes: ['Data Analyst', 'Python Developer', 'ML Analyst'],
    learn: [
      'Python fundamentals, data structures & OOP',
      'Pandas & NumPy — data manipulation & analysis',
      'Data cleaning, wrangling & preprocessing pipelines',
      'Matplotlib, Seaborn & Plotly — visual storytelling',
      'EDA, statistical analysis & hypothesis testing',
      'Scikit-learn ML intro — regression, classification, clustering',
      'Git & GitHub — portfolio & version control',
      '2 sector-based capstone projects',
    ],
    trendsHeading: '2026 trends & AI integration',
    trendsItems: [
      'Copilot AI inside Jupyter — auto-generates Python code from prompts',
      'PyTorch now more popular than TensorFlow (2025 Google Trends)',
      'GenAI integration growing 3x faster than classical ML libraries',
      'Python + Snowflake/BigQuery = most in-demand stack in 2026',
      'AutoML (H2O.ai, DataRobot) — analysts now build models without PhD',
      'LangChain & LlamaIndex — Python is the #1 GenAI language',
      'Data Engineer + AI skills = ₹12–25 LPA packages at MNCs',
    ],
    videoUrl: 'https://www.youtube.com/embed/72-lgIWfC8U?rel=0',
    accentColor: '#2563eb',
    accentSoft: 'rgba(37,99,235,0.08)',
  },
  {
    id: 'powerbi',
    label: 'Power BI',
    icon: '/assets/our_program_modules/powerbi.svg',
    title: 'Power BI for Data Visualization',
    meta: '5 Weeks • Live + Recorded • Beginner → Advanced',
    description: 'Executive-grade dashboards and semantic models—plus how Copilot and embedded AI are reshaping BI delivery in 2026.',
    heroStats: [
      { value: '26%', label: 'CAGR Growth', color: '#2563eb' },
      { value: '₹28L', label: 'Max Package', color: '#7c3aed' },
      { value: '4L+', label: 'Openings', color: '#059669' },
    ],
    outcomes: ['BI Developer', 'Data Analyst', 'Power BI Developer'],
    learn: [
      'Data visualisation fundamentals & chart selection principles',
      'Power BI Desktop — data modelling, DAX & relationships',
      'Executive dashboard design & business storytelling',
      'Advanced DAX — time intelligence, calculated tables, KPIs',
      'Data connectors — SQL, Excel, SharePoint, APIs, cloud sources',
      'Enterprise BI design & semantic data modelling',
      '3 sector projects — Retail, Healthcare, Finance dashboards',
      'Power BI Service — publish, schedule & manage reports',
    ],
    trendsHeading: '2026 trends & AI integration',
    trendsItems: [
      'Microsoft Copilot in Power BI — builds dashboards from natural language prompts',
      'AI Insights: anomaly detection, key influencers & smart narratives built-in',
      'Tableau Pulse & Looker AI auto-generate data narratives for executives',
      'Power BI + Azure Synapse — real-time streaming analytics at enterprise scale',
      'Self-service BI: marketing managers now build own dashboards — no IT needed',
      'AutoML inside Power BI — predict outcomes without writing a single line of code',
      'BI Analysts with AI skills: ₹12–20 LPA — fastest-growing analytics role 2026',
    ],
    videoUrl: 'https://www.youtube.com/embed/Q1RWLRaPf_w?rel=0',
    accentColor: '#059669',
    accentSoft: 'rgba(5,150,105,0.08)',
  },
  {
    id: 'sql',
    label: 'SQL',
    icon: '/assets/our_program_modules/mysql.svg',
    title: 'SQL for Data Analytics',
    meta: '4 Weeks • Live + Recorded • Beginner → Advanced',
    description: 'Interview-ready SQL through warehouses and pipelines—plus NL-to-SQL, cloud engines, and where demand is headed in 2026.',
    heroStats: [
      { value: '45%', label: 'CAGR Growth', color: '#2563eb' },
      { value: '₹38L', label: 'Max Package', color: '#7c3aed' },
      { value: '8L+', label: 'Openings', color: '#059669' },
    ],
    outcomes: ['SQL Developer', 'Data Engineer', 'Database Admin'],
    learn: [
      'SQL basics — SELECT, WHERE, GROUP BY, ORDER BY',
      'Advanced queries — JOINs, CTEs, subqueries, window functions',
      'Query optimisation & performance tuning',
      'Analytical data modelling & warehouse schema design',
      'ETL/ELT pipeline concepts & data transformation',
      'Cloud SQL — BigQuery, Snowflake, Redshift, Azure SQL',
      '100+ SQL interview questions + case study walkthroughs',
      'Capstone: full data engineering pipeline project',
    ],
    trendsHeading: '2026 trends & AI integration',
    trendsItems: [
      'Natural Language SQL — Microsoft Copilot writes SQL from plain English questions',
      'Google BigQuery ML: build ML models with just SQL commands, no Python needed',
      'Snowflake Intelligence — query & act on data by asking questions in natural language',
      '60%+ enterprise workloads now on cloud — SQL + AWS/GCP = critical skill combo',
      '50%+ global developers still use SQL-based systems — demand never declining',
      'Real-time SQL streaming with Apache Kafka + Spark SQL — next frontier',
      'Cloud-focused SQL roles: ₹18–30 LPA at Wipro, TCS, Fractal, Sigmoid',
    ],
    videoUrl: 'https://www.youtube.com/embed/N3evdBbz2HY?rel=0',
    accentColor: '#ca8a04',
    accentSoft: 'rgba(202,138,4,0.10)',
  },
]

const STATS = [
  { figure: '2,000+', caption: 'Nationwide Consultations' },
  { figure: '10+', caption: 'AI Career Opportunities' },
  { figure: '15+', caption: 'Data Experts across Nation' },
  { figure: '50+', caption: 'Industrial POCs' },
]

export default function LiveBatchesSection() {
  const [activeId, setActiveId] = useState('genai')
  const [openPanel, setOpenPanel] = useState(null)

  const active = CURRICULUM_TABS.find(t => t.id === activeId)

  const togglePanel = (panel) => {
    setOpenPanel(prev => prev === panel ? null : panel)
  }

  const handleTabChange = (id) => {
    setActiveId(id)
    setOpenPanel(null)
  }

  return (
    <section id="liveBatchesSection" className="technologicals theprograamss therightproggrams" style={{ background: 'linear-gradient(180deg, #e8eefc 0%, #f0f4fd 50%, #f8fafc 100%)', padding: '60px 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontFamily: "'Libre', serif", fontWeight: 700, fontSize: '60px', lineHeight: '65px', color: '#000', marginBottom: '12px' }}>
            Our <br /><span style={{ color: '#0377EF', fontStyle: 'italic' }}>Program Modules</span>
          </h2>
          <p style={{ color: '#000', fontSize: '19px', fontFamily: "'Helvetica', sans-serif", fontWeight: 400 }}>
            Nationwide Data Analytics &amp; GenAI Industrial Program
          </p>
        </div>

        {/* Main Card */}
        <div className="live-batches-card">

          {/* Hero Headline */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h3 style={{ fontFamily: "'Helvetica', sans-serif", fontWeight: 700, fontSize: '23px', color: '#0f172a', lineHeight: 1.4 }}>
              Empowered{' '}
              <span style={{ backgroundColor: '#1A73E8', color: '#fff', borderRadius: '4px', padding: '2px 10px' }}>
                2,000+ professionals
              </span>
              {' '}globally from the team of Data Scientists
            </h3>
          </div>

          {/* Stats Strip */}
          <div className="live-batches-stats-strip">
            <div className="live-batches-stats-grid">
              {STATS.map((s, i) => (
                <div key={i} className="live-batches-stat-item">
                  <p>{s.figure}</p>
                  <p>{s.caption}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tab selector */}
          <div className="live-batches-tabs-container">
            <p>Select program</p>
            <div className="live-batches-tabs-grid">
              {CURRICULUM_TABS.map(tab => {
                const isActive = tab.id === activeId
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`live-batches-tab-btn ${isActive ? 'active' : ''}`}
                  >
                    <img src={tab.icon} alt={tab.label} />
                    {tab.id === 'genai' && <span>{tab.label}</span>}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Tab Panel */}
          <div>
            {/* Two-column: left = program info card, right = video */}
            <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              {/* Left: Program card */}
              <div style={{ flex: '1 1 360px', minWidth: 0 }}>
                <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid rgba(226,232,240,0.9)', padding: '24px', boxShadow: '0 4px 24px rgba(15,23,42,0.06)' }}>
                  <h3 style={{ fontSize: '23px', fontWeight: 700, color: '#0377EF', marginBottom: '14px', fontFamily: "'Helvetica', sans-serif" }}>
                    {active.title}
                  </h3>

                  {/* Meta row */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '14px' }}>
                    {active.meta.split('•').map((m, i) => (
                      <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#64748b', fontFamily: "'Helvetica', sans-serif" }}>
                        <span style={{ opacity: 0.6 }}>
                          {i === 0 ? '⏱' : i === 1 ? '🎥' : '🎓'}
                        </span>
                        {m.trim()}
                      </span>
                    ))}
                  </div>

                  <p style={{ fontSize: '14px', fontWeight: 400, color: '#000', marginBottom: '16px', lineHeight: 1.6, fontFamily: "'Helvetica', sans-serif" }}>
                    {active.description}
                  </p>

                  {/* Career outcomes */}
                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', marginBottom: '8px', fontFamily: "'Helvetica', sans-serif" }}>Career outcomes</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {active.outcomes.map(tag => (
                        <span key={tag} style={{
                          backgroundColor: active.accentSoft,
                          boxShadow: `inset 0 0 0 1px ${active.accentColor}40`,
                          color: '#000',
                          borderRadius: '6px', padding: '2px 5px',
                          fontSize: '13px', fontFamily: "'Helvetica', sans-serif",
                          border: '1px solid #000', borderBottom: '4px solid #000',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '18px' }}>
                    {active.heroStats.map((stat, i) => (
                      <div key={i} style={{
                        borderRadius: '12px', padding: '14px 8px', textAlign: 'center',
                        backgroundColor: stat.color + '10',
                        border: `1px solid ${stat.color}22`,
                      }}>
                        <p style={{ fontSize: '23px', fontWeight: 800, color: stat.color, margin: 0, fontFamily: "'Libre', serif" }}>{stat.value}</p>
                        <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0', fontWeight: 500, fontFamily: "'Helvetica', sans-serif" }}>{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="https://pages.razorpay.com/discussion"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block', textAlign: 'center', width: '100%',
                      backgroundColor: '#1A73E8', color: '#fff',
                      borderRadius: '10px', padding: '14px',
                      fontWeight: 600, fontSize: '14px', fontFamily: "'Helvetica', sans-serif", textDecoration: 'none',
                      boxShadow: '0 4px 16px rgba(26,115,232,0.35)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Enroll Now — Under Shortlisted Aspirants
                  </a>
                </div>
              </div>

              {/* Right: Video */}
              <div style={{ flex: '0 1 380px', minWidth: 0 }}>
                <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px -16px rgba(15,23,42,0.14)', border: '1px solid rgba(226,232,240,0.9)' }}>
                  <div style={{ position: 'relative', paddingTop: '56.25%', background: '#0f172a' }}>
                    <iframe
                      src={active.videoUrl}
                      title={`${active.title} preview`}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                    <div style={{
                      position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)',
                      background: 'rgba(0,0,0,0.45)', borderRadius: '6px', padding: '4px 10px',
                      fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em',
                      textTransform: 'uppercase', color: 'rgba(255,255,255,0.95)', pointerEvents: 'none',
                    }}>
                      Course preview
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What you'll learn accordions */}
            <div style={{ marginTop: '36px' }}>
              <p style={{ fontSize: '17px', fontWeight: 600, color: '#000', marginBottom: '16px', fontFamily: "'Helvetica', sans-serif" }}>What you'll learn</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Core curriculum accordion */}
                <div style={{ borderRadius: '16px', border: '1px solid rgba(226,232,240,0.9)', background: '#fff', boxShadow: '0 4px 20px rgba(15,23,42,0.05)', overflow: 'hidden' }}>
                  <button
                    onClick={() => togglePanel('core')}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                      background: 'rgba(26,115,232,0.1)', color: '#1A73E8', fontSize: '1.1rem',
                      border: '1px solid rgba(26,115,232,0.2)',
                    }}>📖</span>
                    <span style={{ flex: 1, fontSize: '17px', fontWeight: 600, color: '#000', fontFamily: "'Helvetica', sans-serif" }}>Core curriculum</span>
                    <span style={{
                      width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #e2e8f0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', flexShrink: 0,
                      transition: 'transform 0.2s',
                      transform: openPanel === 'core' ? 'rotate(0deg)' : 'rotate(180deg)',
                    }}>▲</span>
                  </button>
                  {openPanel === 'core' && (
                    <div style={{ borderTop: '1px solid #f1f5f9', background: '#f8fafc', padding: '20px' }}>
                      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px 24px', listStyle: 'none', margin: 0, padding: 0 }}>
                        {active.learn.map((item, i) => (
                          <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '13px', fontFamily: "'Helvetica', sans-serif", color: '#000' }}>
                            <span style={{ marginTop: '5px', width: '7px', height: '7px', borderRadius: '50%', background: '#1A73E8', flexShrink: 0, boxShadow: '0 0 0 3px rgba(26,115,232,0.15)' }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Market intelligence accordion */}
                {active.trendsItems && (
                  <div style={{ borderRadius: '16px', border: '1px solid rgba(226,232,240,0.9)', background: '#fff', boxShadow: '0 4px 20px rgba(15,23,42,0.05)', overflow: 'hidden' }}>
                    <button
                      onClick={() => togglePanel('market')}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                        background: 'rgba(124,58,237,0.1)', color: '#7c3aed', fontSize: '1.1rem',
                        border: '1px solid rgba(124,58,237,0.2)',
                      }}>📈</span>
                      <span style={{ flex: 1, fontSize: '17px', fontWeight: 600, color: '#000', fontFamily: "'Helvetica', sans-serif" }}>2026 market intelligence</span>
                      <span style={{
                        width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #e2e8f0',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', flexShrink: 0,
                        transition: 'transform 0.2s',
                        transform: openPanel === 'market' ? 'rotate(0deg)' : 'rotate(180deg)',
                      }}>▲</span>
                    </button>
                    {openPanel === 'market' && (
                      <div style={{ borderTop: '1px solid #f1f5f9', background: '#f8fafc', padding: '20px' }}>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px 24px', listStyle: 'none', margin: 0, padding: 0 }}>
                          {active.trendsItems.map((item, i) => (
                            <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '13px', fontFamily: "'Helvetica', sans-serif", color: '#000', lineHeight: 1.5 }}>
                              <span style={{ marginTop: '5px', width: '7px', height: '7px', borderRadius: '50%', background: '#1A73E8', flexShrink: 0, boxShadow: '0 0 0 3px rgba(26,115,232,0.15)' }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
