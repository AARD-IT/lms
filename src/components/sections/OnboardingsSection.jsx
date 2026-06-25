import React, { useEffect } from 'react'

export default function OnboardingsSection() {
  useEffect(() => {
    const $ = window.$
    const Swiper = window.Swiper
    if ($ && Swiper) {
      new Swiper('.mySwiperpocsssonboardings', {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        loop: false, // Only 1 active slide in approved version
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.onboardinnngss .swiper-pagination',
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
            slidesPerView: 4,
            spaceBetween: 10,
          },
        },
      })
    }
  }, [])

  return (
    <section className="pocsss onboardinnngss">
      <div className="container-fluid p-0">
        <div className="poccsmains">
          <div className="poccssheaasds">
            <h2 className="pocssheadssh2">Check Our <br /><span>Onboardings</span> </h2>
          </div>
          <div className="pocsssswipers">
            <div className="swiper mySwiperpocsssonboardings">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="thepoccssslidesinnnerslide">
                    <div className="pocsssinnerimage">
                      <img src="public/uploads/blog/thumbnail/how-does-yolo-work-1771483292.jpg" alt="" />
                    </div>
                    <div className="pocsssinnercontent">
                      <h3 className="pocsssinnercontenth3">How does Yolo work?</h3>
                      <div className="theinnnerpoccontenlindsd">
                        <p>Feb 19, 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
