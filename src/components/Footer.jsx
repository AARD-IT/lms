import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-area themainwebfooter">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="footer-content drop-area">
              <img src="/assets/frontend/default/images/img/mainwebsitelogofoter.png" className="themainwebfoootlogos" alt="system logo" />
              <p className="description builder-editable themainwebfootdesc" builder-identity="1" style={{ marginBottom: '16px' }}>
                Analytics Avenue is an IT and EdTech organization focused on delivering advanced analytics, data engineering, and AI-powered solutions. We help businesses unlock value through Enterprise BI, Generative AI, predictive analytics, and scalable data platforms that drive measurable business outcomes.
              </p>
              <p className="description builder-editable themainwebfootdesc" builder-identity="2" style={{ marginBottom: '24px' }}>
                Our approach combines industry-focused solution delivery with practical upskilling programs to bridge the gap between learning and real-world application. Through hands-on training, live project exposure, mentorship from professionals, and curated freelancing opportunities, we support individuals in building career-ready skills while collaborating with global clients to create data-driven impact.
              </p>
              <div className="thesocialss" style={{ marginTop: '24px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'Helvetica', textTransform: 'uppercase', marginBottom: '30px', color: '#000' }}>Connect With Us</h4>
                <ul className="f-socials d-flex">
                  <li>
                    <a href="https://www.linkedin.com/company/analytics-avenue-and-advanced-analytics/" target="_blank" rel="noopener noreferrer">
                      <img src="/assets/socialmedia/linkedin.svg" alt="LinkedIn" className="footer-social-svg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/subu_datascientist/" target="_blank" rel="noopener noreferrer">
                      <img src="/assets/socialmedia/instagram.svg" alt="Instagram" className="footer-social-svg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/917550279838" target="_blank" rel="noopener noreferrer">
                      <img src="/assets/socialmedia/whatsapp.svg" alt="WhatsApp" className="footer-social-svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4>Quick Links</h4>
                  <ul className="drop-area">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Industies</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Solutions</a></li>
                    <li><a href="#">Career</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4>Services</h4>
                  <ul className="drop-area">
                    <li><a href="#">Data Engineering</a></li>
                    <li><a href="#">Data Analytics</a></li>
                    <li><a href="#">Data Science</a></li>
                    <li><a href="#">Machine Learning</a></li>
                    <li><a href="#">NLP</a></li>
                    <li><a href="#">Open AI</a></li>
                    <li><a href="#">Digital Marketing</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4>Industries</h4>
                  <ul className="drop-area">
                    <li><a href="#">Oil &amp; Gas</a></li>
                    <li><a href="#">Constructional</a></li>
                    <li><a href="#">Semiconductos</a></li>
                    <li><a href="#">Electronics</a></li>
                    <li><a href="#">Automotive</a></li>
                    <li><a href="#">Chemical</a></li>
                    <li><a href="#">Pharmaceutical</a></li>
                    <li><a href="#">Aerospace</a></li>
                    <li><a href="#">Healthcare</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4>Help</h4>
                  <ul className="drop-area">
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom" style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '24px', marginTop: '40px', textAlign: 'center' }}>
        <p style={{ margin: 0, color: '#64748b', fontSize: '14px', fontFamily: "'Inter', sans-serif" }}>
          © 2026 Analytics Avenue. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
