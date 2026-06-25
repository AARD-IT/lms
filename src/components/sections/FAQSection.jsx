import React, { useState } from 'react'

const faqs = [
  {
    id: 'faq1',
    q: 'What is Analytics Avenue LMS and who is it for?',
    a: 'Analytics Avenue LMS is a full-stack data learning platform designed for freshers, career switchers, and working professionals who want to build expertise in Data Analytics, AI/ML, Business Intelligence, and related fields. Whether you are just starting out or looking to level up, our curriculum and mentorship model is built to take you to your goal.',
  },
  {
    id: 'faq2',
    q: 'What programs are available on the platform?',
    a: 'We offer programs across Data Analytics, Python for Data Science, Machine Learning, Business Intelligence (Power BI / Tableau), SQL, Generative AI, and domain-specific tracks like Healthcare Analytics, E-commerce Analytics, and Manufacturing AI. New programs are added regularly and all enrolled users get access to new launches.',
  },
  {
    id: 'faq3',
    q: 'Do I need any prior experience to join?',
    a: 'No prior experience is required. Our programs are structured from the ground up, starting with fundamentals before moving into advanced topics. You only need a willingness to learn and consistent effort. We have successfully placed complete beginners in top companies.',
  },
  {
    id: 'faq4',
    q: 'How are the classes conducted — live or recorded?',
    a: 'We follow a blended learning model. You get access to structured recorded class videos that you can watch at your own pace, combined with scheduled live sessions, doubt-clearing calls, and mentor appointments you can book directly through the platform.',
  },
  {
    id: 'faq5',
    q: 'How does the mentorship and doubt-clearing work?',
    a: 'Every learner can book 1-on-1 mentor appointments through the platform\'s scheduling system. Our mentors are industry professionals who review your code, projects, and career documents. Additionally, doubt-clearing group sessions are held regularly for batch-wide questions.',
  },
  {
    id: 'faq6',
    q: 'What is included in the Full LMS Access plan?',
    a: 'The Full LMS Access (₹18,000 one-time) gives you lifetime access to all current and future programs, end-to-end interview preparation, portfolio and resume guidance, mock interviews, periodic job updates, internship opportunities, freelancing leads, referral placements, and 24/7 customer support.',
  },
  {
    id: 'faq7',
    q: 'How does the placement support work?',
    a: 'Our dedicated placement cell conducts live hiring drives with 50+ partner companies, provides internal referrals, and shares periodic job updates for learners who pass our screening assessments. Your profile is directly shortlisted and forwarded to hiring managers — you don\'t have to apply blindly.',
  },
  {
    id: 'faq8',
    q: 'Will I get a certificate after completing a program?',
    a: 'Yes. You receive a program completion certificate upon finishing the required modules and assessments. These certificates are backed by Analytics Avenue\'s brand and can be added to your LinkedIn profile and resume to strengthen your job applications.',
  },
  {
    id: 'faq9',
    q: 'Can I access the content on my phone or tablet?',
    a: 'Yes. The Analytics Avenue LMS is fully responsive and works seamlessly across desktops, tablets, and mobile phones. You can watch videos, attend live sessions, and access all learning materials from any device with an internet connection.',
  },
  {
    id: 'faq10',
    q: 'How do I get started?',
    a: 'Getting started is simple — book a free 1-on-1 consultation with our team to understand which program fits your goals. After enrolment, you will receive an orientation invite, get access to the full LMS dashboard, and can start your first module the same day.',
  },
]

export default function FAQSection() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(openId === id ? null : id)

  return (
    <section className="technologicals theprograamss therightproggrams">
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
