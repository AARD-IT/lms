import React, { useEffect } from 'react'

export default function TestimonialsSection() {
  useEffect(() => {
    const $ = window.$
    const Swiper = window.Swiper
    if ($ && Swiper) {
      new Swiper('.mySwiperhearfromms', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.hearfromswiperss .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.hearfromswiperss .swiper-button-next',
          prevEl: '.hearfromswiperss .swiper-button-prev',
        },
      })
    }
  }, [])

  const testimonials = [
    { id: 1, img: '/uploads/testimonials/1771919718-testimonial-1.png' },
    { id: 2, img: '/uploads/testimonials/1771919729-testimonial-2.png' },
    { id: 3, img: '/uploads/testimonials/1771919740-testimonial-3.png' },
    { id: 4, img: '/uploads/testimonials/1771919752-testimonial-4.png' },
    { id: 5, img: '/uploads/testimonials/1771919764-testimonial-5.png' },
    { id: 6, img: '/uploads/testimonials/1771919773-testimonial-6.png' },
    { id: 7, img: '/uploads/testimonials/1771919784-testimonial-7.png' },
    { id: 8, img: '/uploads/testimonials/1771919794-testimonial-8.png' },
  ]

  return (
    <section className="hearfromss">
      <style>{`
        .testimonials-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        @media (max-width: 767px) {
          .testimonials-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .testimonials-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <div className="container">
        <div className="hearfrommsmains">
          <div className="row">
            <div className="col-md-8">
              <div className="thehearfrommsleftts">
                <div className="hearfromsheadss">
                  <h2 className="hearfrommssh2">Hear It From <br /> <span>Our Aspirants</span></h2>
                </div>

                <div className="theheadrfrommcollssnums">
                  <div className="testimonials-stats-grid">
                    {[
                      { figure: '2000+', heading: 'Personal & Professional',    desc: 'Consultations by Our Data Scientists Panel' },
                      { figure: '100+',  heading: 'High-Performance ML Models', desc: 'Production-ready, highly accurate models' },
                      { figure: '15+',   heading: 'Smart AI Automation',        desc: 'Streamline and automate workflows' },
                      { figure: '1000+', heading: 'Empowering Rural Talent',    desc: 'Empowered with Data Analytics Skills' },
                      { figure: '500+',  heading: 'Nationwide Professionals',   desc: 'Industry-ready projects for careers' },
                      { figure: '50+',   heading: 'Guest Lectures and MOUs',    desc: 'Bridging academia with industry excellence' },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="gradient-border"
                        style={{
                          padding: 0,
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          margin: 0,
                        }}
                      >
                        <div
                          className="themunnsheareinners"
                          style={{
                            textAlign: 'center',
                            padding: '14px 10px',
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            height: '100%',
                          }}
                        >
                          <h4 className="thenumbbsnumberh4" style={{
                            fontFamily: "'Libre', serif",
                            fontSize: '32px',
                            fontWeight: 800,
                            marginBottom: '4px',
                          }}>{stat.figure}</h4>
                          <p style={{
                            fontFamily: "'Helvetica', sans-serif",
                            fontSize: '13px',
                            fontWeight: 700,
                            color: '#000',
                            margin: '0 0 6px 0',
                            lineHeight: 1.3,
                          }}>{stat.heading}</p>
                          <p style={{
                            fontFamily: "'Helvetica', sans-serif",
                            fontSize: '12px',
                            color: '#475569',
                            margin: 'auto 0 0 0',
                            lineHeight: 1.4,
                          }}>{stat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="hearfromswiperss">
                <div className="swiper mySwiperhearfromms thehomeswiperreviews">
                  <div className="swiper-wrapper thehomeswiperreviews">
                    {testimonials.map((t) => (
                      <div className="swiper-slide thehomeswiperreviews" key={t.id}>
                        <div className="thereviewswiperinners thehomeswiperreviews">
                          <div className="theswiperrevupers thehomeswiperreviews">
                            <div className="swiperongrev">
                              <img src={t.img} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
