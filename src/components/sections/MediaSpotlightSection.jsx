import React, { useEffect } from 'react'

export default function MediaSpotlightSection() {
  useEffect(() => {
    const $ = window.$
    const Swiper = window.Swiper
    if ($ && Swiper) {
      new Swiper('.mySwiperspotlighhts', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: false, // Set to false since there is only 1 active slide in approved version
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
            spaceBetween: 30,
          },
        },
        pagination: {
          el: '.themediaspotlights .swiper-pagination',
          clickable: true,
        },
      })
    }
  }, [])

  return (
    <section className="pocsss themediaspotlights">
      <div className="container">
        <div className="poccsmains">
          <div className="poccssheaasds">
            <h2 className="pocssheadssh2">Media <br /><span>Spotlight</span> </h2>
          </div>
          <div className="pocsssswipers">
            <div className="swiper mySwiperspotlighhts">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="thepoccssslidesinnnerslide">
                    <div className="pocsssinnerimage">
                      <img src="/uploads/blog/thumbnail/viewverse-user-demographics-1771485109.jpg" alt="" />
                    </div>
                    <div className="pocsssinnercontent">
                      <h3 className="pocsssinnercontenth3">Viewverse User Demographics</h3>
                      <div className="theinnnerpoccontenlindsd">
                        <a href="https://analyticsavenue.in/blog/viewverse-user-demographics" className="pocsssinnercontenta">Read More</a>
                        <p>Feb 19, 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination therelativpaginas"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
