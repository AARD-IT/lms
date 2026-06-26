import React, { useEffect } from 'react'

export default function HonoursAndRecognitions() {
  useEffect(() => {
    const Swiper = window.Swiper
    if (Swiper) {
      const swiperInstance = new Swiper('.mySwiperHonoursAndRecognitions', {
        slidesPerView: 4,
        spaceBetween: 24,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.har-swiper-button-next',
          prevEl: '.har-swiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 1.8,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        },
      })

      return () => {
        if (swiperInstance && typeof swiperInstance.destroy === 'function') {
          swiperInstance.destroy(true, true)
        }
      }
    }
  }, [])

  const honours = [
    { id: 1, img: '/assets/gallery/image1.png' },
    { id: 2, img: '/assets/gallery/image2.png' },
    { id: 3, img: '/assets/gallery/image3.png' },
    { id: 4, img: '/assets/gallery/image4.png' },
    { id: 5, img: '/assets/gallery/image5.png' },
    { id: 6, img: '/assets/gallery/image6.png' },
    { id: 7, img: '/assets/gallery/image7.png' },
    { id: 8, img: '/assets/gallery/image8.png' },
    { id: 9, img: '/assets/gallery/image9.png' },
    { id: 10, img: '/assets/gallery/image10.png' },
  ]

  return (
    <section className="py-16 bg-[#f8fafc] overflow-hidden relative w-full">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-bold font-[Libre] text-slate-900 tracking-tight">
            Honours and <span className="text-[#0377EF] font-[Libre]">Recognitions</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group px-2 md:px-10">
          <div className="swiper mySwiperHonoursAndRecognitions overflow-hidden">
            <div className="swiper-wrapper py-4">
              {honours.map((item) => (
                <div className="swiper-slide h-auto flex" key={item.id}>
                  <div className="w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col">
                    <img 
                      src={item.img} 
                      alt={`Honour ${item.id}`} 
                      className="w-full h-auto object-contain block rounded-2xl" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons overlaying the edges */}
          <button 
            className="har-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white hover:bg-slate-50 text-slate-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 border border-slate-200 cursor-pointer opacity-80 hover:opacity-100 hover:scale-105 active:scale-95"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="har-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white hover:bg-slate-50 text-slate-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 border border-slate-200 cursor-pointer opacity-80 hover:opacity-100 hover:scale-105 active:scale-95"
            aria-label="Next Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
