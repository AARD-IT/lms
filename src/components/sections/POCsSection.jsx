import React, { useState, useEffect } from 'react'

export default function POCsSection() {
  const images = [
    '/assets/poc/image1.png',
    '/assets/poc/image2.png',
    '/assets/poc/image3.png',
    '/assets/poc/image4.png',
    '/assets/poc/image5.png',
    '/assets/poc/image6.png',
    '/assets/poc/image7.png',
    '/assets/poc/image7-1.png'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <section className="poc-section">
      <style>{`
        /* Container styling */
        .poc-section {
          padding: 60px 0;
          background-color: #f8fafc;
        }
        .poc-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .poc-heading-container {
          text-align: center;
          margin-bottom: 40px;
        }
        .poc-main-heading {
           font-family: 'Libre', serif;
           font-weight: 600;
           font-size: 48px;
           
           color: #000;
           text-align: center;
           position: relative;
           margin: 0;
        }
        .poc-main-heading span {
           font-family: 'Libre';
           font-weight: 700;
           color: #0377EF;
        }
        /* Slideshow Container */
        .poc-slideshow-wrapper {
          position: relative;
          background-color: #ffffff;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          border: 1px solid #e2e8f0;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .poc-slideshow-wrapper:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.12);
        }
        .poc-slideshow-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .poc-slide-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
          pointer-events: none;
          padding: 10px;
        }
        .poc-slide-image.active {
          opacity: 1;
          pointer-events: auto;
        }
        /* Manual Navigation Arrows */
        .poc-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(15, 23, 42, 0.6);
          color: #ffffff;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: background-color 0.2s ease, transform 0.2s ease, opacity 0.2s ease;
          opacity: 0;
        }
        .poc-slideshow-container:hover .poc-arrow {
          opacity: 1;
        }
        .poc-arrow:hover {
          background-color: rgba(15, 23, 42, 0.85);
          transform: translateY(-50%) scale(1.05);
        }
        .poc-arrow-left {
          left: 16px;
        }
        .poc-arrow-right {
          right: 16px;
        }
        /* Dot indicators */
        .poc-dots {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }
        .poc-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(15, 23, 42, 0.2);
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .poc-dot.active {
          background-color: #2563eb;
          transform: scale(1.2);
        }
        /* Responsive styles */
        @media (max-width: 768px) {
          .poc-section {
            padding: 40px 0;
          }
          .poc-main-heading {
            font-size: 24px;
          }
          .poc-arrow {
            width: 36px;
            height: 36px;
            opacity: 0.6; /* always visible on mobile */
          }
          .poc-slide-image {
            padding: 5px;
          }
        }
      `}</style>
      <div className="poc-container">
        <div className="poc-heading-container">
          <h2 className="poc-main-heading">
            Recreate the projects worked by <span>top data scientists</span> for your placement journey
          </h2>
        </div>

        <div className="poc-slideshow-wrapper">
          {/* Slideshow Area */}
          <div className="poc-slideshow-container">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Capstone Project ${index + 1}`}
                className={`poc-slide-image ${index === currentIndex ? 'active' : ''}`}
              />
            ))}

            {/* Navigation Arrows */}
            <button className="poc-arrow poc-arrow-left" onClick={handlePrev} aria-label="Previous Project">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button className="poc-arrow poc-arrow-right" onClick={handleNext} aria-label="Next Project">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            {/* Indicator Dots */}
            <div className="poc-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`poc-dot ${index === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
