import React, { useEffect } from 'react'

export default function HonoursSection() {
  useEffect(() => {
    const $ = window.$
    const Swiper = window.Swiper
    if ($ && Swiper) {
      new Swiper('.mySwiperhonorssrecoggniton', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        initialSlide: 0,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.mySwiperhonorssrecoggniton .swiper-pagination',
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
        navigation: {
          nextEl: '.thehonrssregooss .swiper-button-next',
          prevEl: '.thehonrssregooss .swiper-button-prev',
        },
      })
    }
  }, [])

  const honours = [
    { id: 1, img: '/assets/frontend/default/images/img/honorsrecoggss1.png' },
    { id: 2, img: '/assets/frontend/default/images/img/honorsrecoggss2.png' },
    { id: 3, img: '/assets/frontend/default/images/img/honorsrecoggss3.png' },
    { id: 4, img: '/assets/frontend/default/images/img/honorsrecoggss4.png' },
    { id: 5, img: '/assets/frontend/default/images/img/honorsrecoggss5.png' },
    { id: 6, img: '/assets/frontend/default/images/img/honorsrecoggss6.png' },
  ]

  return (
    <section className="pocsss themediaspotlights honorssprograaamss">
      <div className="container-fluid p-0">
        <div className="poccsmains">
          <div className="poccssheaasds">
            <h2 className="pocssheadssh2">Honours and <span>Recognitions</span> </h2>
          </div>
          <div className="pocsssswipers">
            <div className="hearfromswiperss">
              <div className="swiper mySwiperhonorssrecoggniton thehomeswiperreviews">
                <div className="swiper-wrapper thehomeswiperreviews">
                  {honours.map((item) => (
                    <div className="swiper-slide thehomeswiperreviews" key={item.id}>
                      <div className="thereviewswiperinners thehomeswiperreviews">
                        <div className="theswiperrevupers thehomeswiperreviews">
                          <div className="swiperongrev">
                            <img src={item.img} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="thehonrssregooss">
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
