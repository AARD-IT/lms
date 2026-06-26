import React, { useState } from 'react'

const faqs = [
    {
  id: 'faq1',
  q: 'Who is this program designed for?',
  a: 'Designed for freshers, final-year students, working professionals, career switchers, and non-IT candidates looking to build careers in Data Analytics, Data Engineering, Machine Learning, and Generative AI.',
    },
    {
    id: 'faq2',
    q: 'Do I need a coding background to join this program?',
    a: 'No. The program starts from fundamentals and gradually covers Python, SQL, Power BI, Machine Learning, Cloud, and Generative  AI.',
    },
    {
    id: 'faq3',
    q: 'What technologies and tools will I learn?',
    a: 'Python, SQL, Power BI, Machine Learning, GPT, Claude, LangChain, LlamaIndex, RAG, AI Agents, AWS, GCP, Databricks, Snowflake, Git, and GitHub.',
    },
    {
    id: 'faq4',
    q: 'What is the training format?',
    a: 'Live instructor-led sessions, recorded sessions, assignments, projects, mentorship, and career guidance.',
    },
    {
  id: 'faq5',
  q: 'Will I work on real-world projects?',
  a: 'Yes. Projects span Marketing Analytics, Healthcare, Finance, Supply Chain, Automobile, Telemetry, Bioinformatics, and Generative AI.where you will be recreate the project our mentors in their sectors',
    },
    {
    id: 'faq6',
    q: 'How does placement assistance work?',
    a: 'Through a 3-mode placement strategy: Organic Job Opportunities, Project Acquisition, and Referral Network, plus resume and interview support.',
    },
    {
    id: 'faq7',
    q: 'How long does it take to become job-ready?',
    a: 'Approximately 90–120 days, depending on commitment and completion of projects and certifications.',
    },
    {
  id: 'faq8',
  q: 'What makes Analytics Avenue different?',
  a: 'Industry mentors, real-world projects, GenAI-integrated curriculum, certifications, placement support, and practical learning. Recreate Real Industry Projects, Work under Senior Data Scientists, our mentors are working professional in different mnc and has 8+ experience.',
    },
    {
  id: 'faq9',
  q: 'Is there an internship in the program?',
  a: 'Yes — 100 candidates per year are selected for an expert internship inside Analytics Avenue\'s AI consulting operations. Interns work on real client deliverables, build business proposals, and gain end-to-end analytics exposure. Competitive: 100 spots from 5,000+ enrollments.',
    },
    {
  id: 'faq10',
  q: 'Who is eligible to join this program?',
  a: 'Anyone with a genuine intent to build a career in data — freshers, working professionals, career switchers, non-IT graduates, MBA holders, engineers, science graduates. The program has trained people from all these backgrounds. No prior coding experience required for Phase 1.',
    },


]

export default function FAQSection() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(openId === id ? null : id)

  return (
    <section className="technologicals theprograamss therightproggrams">
      <style>{`
        .theaccoordionfaqs .accordion-collapse.collapse {
          display: none;
        }
        .theaccoordionfaqs .accordion-collapse.collapse.show {
          display: block !important;
          visibility: visible !important;
        }
        .theaccoordionfaqs .accordion-body {
          padding-bottom: 20px !important;
        }
        
        /* Mobile View font sizing improvements */
        @media screen and (max-width: 767px) {
          .theaccoordionfaqs .accordion-button {
            font-size: 15px !important;
            line-height: 22px !important;
          }
          .theaccoordionfaqs .accordion-button:not(.collapsed) {
            font-size: 15px !important;
          }
          .theaccoordionfaqs .accordion-body p {
            font-size: 14px !important;
            line-height: 1.55 !important;
          }
        }
      `}</style>
      <div className="container">
        <div className="technologicalsmains theprograamssmains">
          <div className="technoheads theprograamssheadsmains">
            <div className="techloginerhedad theprograamssheads">
              <h2 className="techlogh2">Frequently Asked <span>Questions</span></h2>
            </div>
          </div>

          <div className="technologiswipers theprogrammssswright">
            <div className="therightprogramnavtaban">
              <div className="navtabssslowerrs theaccoordionfaqs" style={{ borderTop: 'none' }}>
                <div className="accordion accordion-flush" id="faqMainAccordion">
                  {faqs.map((faq, idx) => {
                    const isOpen = openId === faq.id
                    return (
                      <div className="accordion-item" key={faq.id}>
                        <h2 className="accordion-header" id={`heading-${faq.id}`}>
                          <button
                            className={`accordion-button${isOpen ? '' : ' collapsed'}`}
                            type="button"
                            onClick={() => toggle(faq.id)}
                            aria-expanded={isOpen}
                            aria-controls={`collapse-${faq.id}`}
                          >
                            {faq.q}
                          </button>
                        </h2>
                        <div
                          id={`collapse-${faq.id}`}
                          className={`accordion-collapse collapse${isOpen ? ' show' : ''}`}
                          aria-labelledby={`heading-${faq.id}`}
                        >
                          <div className="accordion-body">
                            <p style={{ margin: 0, lineHeight: 1.75, color: '#475569' }}>{faq.a}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
