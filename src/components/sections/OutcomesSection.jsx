import React from 'react'
import './OutcomesSection.css'

export default function OutcomesSection() {
  const outcomes = [
    {
      id: 1,
      metric: '60–65%',
      title: 'Improvement in customer retention',
      desc: 'Seen with churn prediction, cohort analysis, and behavioral segmentation in retail, BFSI, and SaaS.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      )
    },
    {
      id: 2,
      metric: '95–100%',
      title: 'Faster delivery of business insights',
      desc: 'Achieved through automated pipelines, BI self-service, and reduced manual reporting cycles.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v2"/>
          <path d="m4.93 4.93 1.41 1.41"/>
          <path d="M2 12h2"/>
          <path d="m19.07 4.93-1.41 1.41"/>
          <path d="M2 12h2"/>
          <path d="m6.34 17.66-1.41 1.41"/>
          <path d="M12 20v2"/>
          <path d="m17.66 17.66 1.41 1.41"/>
          <path d="M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/>
        </svg>
      )
    },
    {
      id: 3,
      metric: '85–95%',
      title: 'Improvement in sales forecasting accuracy',
      desc: 'Typical for time-series models, demand forecasting, and scenario-based planning.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m19 8-6 6-4-4-6 6"/>
          <path d="M12 8h7v7"/>
        </svg>
      )
    },
    {
      id: 4,
      metric: '90–95%',
      title: 'Higher accuracy in customer targeting',
      desc: 'Driven by ML-based segmentation, propensity models, and campaign analytics.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      )
    },
    {
      id: 5,
      metric: '80–90%',
      title: 'Reduction in operational and financial risk exposure',
      desc: 'Observed with anomaly detection, rule-based + predictive risk analytics.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      )
    },
    {
      id: 6,
      metric: '85–90%',
      title: 'Increase in revenue realization',
      desc: 'From pricing optimization, funnel analytics, and performance-driven decisioning.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="16"/>
          <path d="M16 10a2.5 2.5 0 0 0-5 0v4a2.5 2.5 0 0 0 5 0"/>
        </svg>
      )
    },
    {
      id: 7,
      metric: '95–100%',
      title: 'Reduction in reporting turnaround time',
      desc: 'Enabled through dashboard automation, reusable semantic models, and scheduled data refresh workflows.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    },
    {
      id: 8,
      metric: '85–95%',
      title: 'Improvement in process automation coverage',
      desc: 'Achieved by integrating AI agents, workflow orchestration, and trigger-based operations across teams.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <rect x="9" y="9" width="6" height="6"/>
          <path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 15h3"/><path d="M1 9h3"/><path d="M1 15h3"/>
        </svg>
      )
    },
    {
      id: 9,
      metric: '90–100%',
      title: 'Reduction in manual rework and duplicate efforts',
      desc: 'Driven by standardized pipelines, data quality checks, and centralized KPI definitions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
          <path d="M16 3h5v5"/>
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
          <path d="M8 21H3v-5"/>
        </svg>
      )
    }
  ]

  return (
    <section className="outcomes-section">
      <div className="container">
        <div className="outcomes-header">
          <h2 className="outcomes-heading">
            Outcomes <span>Achieved</span>
          </h2>
        </div>
        <div className="outcomes-grid">
          {outcomes.map((item) => (
            <div key={item.id} className="outcomes-card">
              <div className="outcomes-card-header">
                <div className="outcomes-icon-wrapper">
                  {item.icon}
                </div>
                <span className="outcomes-metric">{item.metric}</span>
              </div>
              <div className="outcomes-card-body">
                <h3 className="outcomes-card-title">{item.title}</h3>
                <p className="outcomes-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
