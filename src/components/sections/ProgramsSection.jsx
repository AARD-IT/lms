import React, { useEffect } from 'react'

export default function ProgramsSection() {
  useEffect(() => {
    const $ = window.$
    const Swiper = window.Swiper
    if ($ && Swiper) {
      // Initialize the Swiper for ProgramsSection
      // Since it had class="swiper " in HTML, we will initialize it using a unique class we added or target it specifically.
      new Swiper('.my-programs-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.theprogrammpaginationss .swiper-pagination',
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
            spaceBetween: 30,
          },
        },
      })
    }
  }, [])

  const courses = [
    {
      id: 1,
      url: 'https://analyticsavenue.in/lms/course/test-course-title-1',
      title: 'Test Course Title',
      description: 'Test Course TitleTest Course TitleTest Course TitleTest Course TitleTest Course TitleTest Course TitleTest Course TitleTest Course TitleTest Course Ti...',
      image: 'public/uploads/system/placeholder.png',
      badge: 'Enrolled',
      authorImage: 'public/uploads/system/placeholder.png',
      rating: '0.00',
      lessons: '0',
    },
    {
      id: 2,
      url: 'https://analyticsavenue.in/lms/course/instructor-course-2',
      title: 'Instructor Course',
      description: '',
      image: 'public/uploads/system/placeholder.png',
      badge: 'Free',
      authorImage: 'public/uploads/system/placeholder.png',
      rating: '0.00',
      lessons: '0',
    },
    {
      id: 3,
      url: 'https://analyticsavenue.in/lms/course/python-for-beginners-3',
      title: 'Python for beginners',
      description: 'Python for beginnersPython for beginnersPython for beginnersPython for beginnersPython for beginnersPython for beginnersPython for beginnersPython for...',
      image: 'public/uploads/system/placeholder.png',
      badge: 'Enrolled',
      authorImage: 'public/uploads/system/placeholder.png',
      rating: '5.00',
      lessons: '5',
    },
    {
      id: 4,
      url: 'https://analyticsavenue.in/lms/course/nationwide-data-analytics-program-2026-4',
      title: 'Nationwide Data Analytics Program 2026',
      description: 'About Analytics Avenue &amp; Advanced Analytics At Analytics Avenue and Advanced Analytics, we are a team of data scientists, engineers, and business...',
      image: 'public/uploads/course-thumbnail/nationwide-data-analytics-program-2026-1768888370.jpg',
      badge: 'Enrolled',
      authorImage: 'public/uploads/system/placeholder.png',
      rating: '0.00',
      lessons: '8',
    },
    {
      id: 5,
      url: 'https://analyticsavenue.in/lms/course/nationwide-data-analytics-2026-test-5',
      title: 'Nationwide Data Analytics 2026 Test',
      description: 'Nationwide Data Analytics&nbsp; 2026 TestNationwide Data Analytics&nbsp; 2026 TestNationwide Data Analytics&nbsp; 2026 TestNationwide Data Analytics&n...',
      image: 'public/uploads/course-thumbnail/nationwide-data-analytics-2026-test-1769873159.png',
      badge: 'Enrolled',
      authorImage: 'public/uploads/system/placeholder.png',
      rating: '0.00',
      lessons: '1',
    },
    {
      id: 6,
      url: 'https://analyticsavenue.in/lms/course/test-paid-6',
      title: 'Test Paid',
      description: '',
      image: 'public/uploads/course-thumbnail/-1770815440.png',
      badge: 'Enrolled',
      authorImage: 'public/uploads/system/placeholder.png',
      rating: '0.00',
      lessons: '2',
    },
    {
      id: 7,
      url: 'https://analyticsavenue.in/lms/course/test-7',
      title: 'Test',
      description: 'ousdnjklsdn',
      image: 'public/uploads/system/placeholder.png',
      badge: 'Enrolled',
      authorImage: 'public/uploads/system/placeholder.png',
      rating: '0.00',
      lessons: '0',
    },
    {
      id: 8,
      url: 'https://analyticsavenue.in/lms/course/test-course-1-8',
      title: 'Test COurse 1',
      description: 'Test COurse 1Test COurse 1Test COurse 1Test COurse 1Test COurse 1Test COurse 1Test COurse 1Test COurse 1Test COurse 1Test COurse 1Test COurse 1Test CO...',
      image: 'public/uploads/course-thumbnail/test-course-1-1770820811.webp',
      badge: 'Enrolled',
      authorImage: 'public/uploads/system/placeholder.png',
      rating: '5.00',
      lessons: '3',
    }
  ]

  return (
    <section className="technologicals theprograamss therightproggrams">
      <div className="container">
        <div className="technologicalsmains theprograamssmains">
          <div className="technoheads theprograamssheadsmains">
            <div className="techloginerhedad theprograamssheads">
              <h2 className="techlogh2">Our Industry Ready <br /> <span>AI Programs </span></h2>
            </div>
          </div>
          <div className="technologiswipers theprogrammssswright">
            <div className="therightprogramnavtaban">
              <div className="navtabssuppers"></div>
              <div className="navtabssslowerrs">
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" role="tabpanel">
                    <div className="swiper my-programs-swiper">
                      <div className="swiper-wrapper">
                        {courses.map((course) => (
                          <div className="swiper-slide" key={course.id}>
                            <div className="col-lg-4 col-md-6 col-sm-6 mb-30 w-100">
                              <a href={course.url} className="card Ecard eBar-card">
                                <div className="courses-img">
                                  <img src={course.image} alt="course-thumbnail" />
                                  <div className="cText d-flex">
                                    <h4>
                                      {course.badge === 'Enrolled' ? (
                                        <span className="enrolled-badge">Enrolled</span>
                                      ) : (
                                        course.badge
                                      )}
                                    </h4>
                                  </div>
                                  <span data-bs-toggle="tooltip" data-bs-title="Add to wishlist" className="heart toggleWishItem" id={`item-${course.id}`}>
                                    <i className="fa-regular fa-heart"></i>
                                  </span>
                                </div>
                                <div className="card-body entry-details mt-0">
                                  <div className="info-card mb-15">
                                    <div className="creator">
                                      <img src={course.authorImage} alt="author-image" />
                                      <h5></h5>
                                    </div>
                                  </div>
                                  <div className="entry-title thegridtitledescription">
                                    <h3 className="w-100 ellipsis-line-2">{course.title}</h3>
                                    <p
                                      className="description ellipsis-2 gridssdescriptions"
                                      dangerouslySetInnerHTML={{ __html: course.description }}
                                    ></p>
                                  </div>
                                  <ul>
                                    <li>
                                      <span>{course.rating}</span><i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M12.6521 9.54004L14.8477 8.27081C14.9758 8.19549 15.0399 8.08879 15.0399 7.95071C15.0399 7.81263 14.9758 7.70458 14.8477 7.62658L12.6521 6.35735C12.5395 6.29326 12.4144 6.26121 12.2768 6.26121C12.1392 6.26121 12.0133 6.29326 11.8989 6.35735L9.70344 7.62658C9.57523 7.7019 9.51113 7.8086 9.51113 7.94669C9.51113 8.08479 9.57523 8.19283 9.70344 8.27081L11.8989 9.54004C12.0115 9.60414 12.1366 9.63619 12.2743 9.63619C12.4119 9.63619 12.5378 9.60414 12.6521 9.54004ZM12.6521 11.9968L14.1265 11.1554C14.2395 11.0928 14.3305 11.0021 14.3995 10.8832C14.4686 10.7643 14.5031 10.636 14.5031 10.4984V9.32371L12.6521 10.399C12.5392 10.4685 12.4136 10.5032 12.2755 10.5032C12.1374 10.5032 12.0119 10.4685 11.8989 10.399L10.048 9.32371V10.4984C10.048 10.636 10.0825 10.7643 10.1515 10.8832C10.2206 11.0021 10.3116 11.0928 10.4246 11.1554L11.8989 11.9968C12.0115 12.0609 12.1366 12.0929 12.2743 12.0929C12.4119 12.0929 12.5378 12.0609 12.6521 11.9968ZM16.4101 16.25H12.2755C12.2755 16.0416 12.2684 15.8333 12.2543 15.625C12.2401 15.4166 12.2189 15.2083 12.1906 15H16.4101C16.4849 15 16.5464 14.9759 16.5944 14.9279C16.6425 14.8798 16.6666 14.8183 16.6666 14.7435V5.25642C16.6666 5.18163 16.6425 5.12019 16.5944 5.0721C16.5464 5.02402 16.4849 4.99998 16.4101 4.99998H3.58967C3.51488 4.99998 3.45344 5.02402 3.40536 5.0721C3.35727 5.12019 3.33323 5.18163 3.33323 5.25642V6.14263C3.1249 6.11431 2.91657 6.09307 2.70825 6.07892C2.49992 6.06476 2.29159 6.05769 2.08325 6.05769V5.25642C2.08325 4.84215 2.23076 4.48752 2.52577 4.19252C2.82077 3.89751 3.17541 3.75 3.58967 3.75H16.4101C16.8244 3.75 17.179 3.89751 17.474 4.19252C17.769 4.48752 17.9165 4.84215 17.9165 5.25642V14.7435C17.9165 15.1578 17.769 15.5124 17.474 15.8074C17.179 16.1025 16.8244 16.25 16.4101 16.25ZM6.58498 16.25C6.41715 16.25 6.27127 16.1973 6.14734 16.0921C6.02341 15.9869 5.94595 15.8498 5.91498 15.681C5.79425 14.8274 5.42592 14.1017 4.81 13.504C4.19409 12.9062 3.45664 12.5443 2.59767 12.4182C2.43692 12.3974 2.31099 12.3219 2.2199 12.1917C2.1288 12.0615 2.08325 11.913 2.08325 11.7464C2.08325 11.5693 2.14362 11.4209 2.26436 11.3013C2.38508 11.1816 2.52556 11.133 2.68581 11.1555C3.8685 11.2901 4.87623 11.7759 5.70902 12.613C6.54181 13.45 7.02712 14.4599 7.16494 15.6426C7.18737 15.8114 7.1409 15.9548 7.02552 16.0729C6.91013 16.1909 6.76329 16.25 6.58498 16.25ZM9.82361 16.25C9.64091 16.25 9.49107 16.1869 9.37409 16.0609C9.25711 15.9348 9.18741 15.7777 9.16496 15.5897C9.00257 13.86 8.31027 12.3918 7.08804 11.1851C5.86582 9.97834 4.3872 9.3034 2.65217 9.16023C2.48336 9.14313 2.34634 9.07206 2.24111 8.94702C2.13587 8.82197 2.08325 8.67607 2.08325 8.50933C2.08325 8.33217 2.14148 8.18162 2.25794 8.05769C2.37438 7.93377 2.5154 7.88035 2.681 7.89744C4.7622 8.0406 6.53275 8.84135 7.99267 10.2997C9.4526 11.758 10.2627 13.5235 10.4229 15.5961C10.44 15.7788 10.3887 15.9334 10.2689 16.06C10.1491 16.1867 10.0007 16.25 9.82361 16.25ZM2.93215 16.25C2.6942 16.25 2.49324 16.1678 2.32925 16.0035C2.16525 15.8392 2.08325 15.6381 2.08325 15.4001C2.08325 15.1622 2.1654 14.9612 2.32971 14.7972C2.494 14.6332 2.69512 14.5512 2.93306 14.5512C3.17101 14.5512 3.37197 14.6334 3.53596 14.7977C3.69996 14.962 3.78196 15.1631 3.78196 15.4011C3.78196 15.639 3.69981 15.84 3.5355 16.004C3.37121 16.168 3.17009 16.25 2.93215 16.25Z"
                                          fill="#6B7385"
                                        ></path>
                                      </svg> {course.lessons} lessons
                                    </li>
                                  </ul>
                                </div>
                                <div className="learn-more theenrollnowbtn">
                                  <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                </div>
                                <div className="learn-more">
                                  <i className="fa-solid fa-play"></i>
                                </div>
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="theprogrammpaginationss">
                        <div className="swiper-pagination"></div>
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
