import React, { useEffect } from 'react'

export default function POCsSection() {
  useEffect(() => {
    const $ = window.$
    const Swiper = window.Swiper
    if ($ && Swiper) {
      new Swiper('.mySwiperpocsss', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: false, // Set to false since there is only 1 active slide in the approved version
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.pocsssswipers .swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
      })
    }
  }, [])

  return (
    <section className="pocsss">
      <div className="container-fluid p-0">
        <div className="poccsmains">
          <div className="poccssheaasds">
            <h2 className="pocssheadssh2"> Our <span>POC’s</span> </h2>
          </div>
          <div className="pocsssswipers">
            <div className="swiper mySwiperpocsss">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="thepoccssslidesinnnerslide">
                    <div className="pocsssinnerimage">
                      <img src="/uploads/blog/thumbnail/credit-card-customer-report-1771482538.jpg" alt="" />
                    </div>
                    <div className="pocsssinnercontent">
                      <h3 className="pocsssinnercontenth3">Credit Card Customer Report</h3>
                      <div className="theinnnerpoccontenlindsd">
                        <p>Feb 19, 2026</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other slides are commented out in the original index.html */}
              </div>
              <div className="swiper-pagination therelativpaginas"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
