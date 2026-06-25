import { useEffect, useState } from 'react'
import SubHeader from './components/SubHeader'
import Header from './components/Header'
import HeroSection from './components/sections/HeroSection'
import WhyAnalyticsSection from './components/sections/WhyAnalyticsSection'
import SpecialFeatures from './ui_components/SpecialFeatures/SpecialFeatures'
import MasterAISection from './ui_components/MasterAISection'
import ExpertPanelSection from './components/sections/ExpertPanelSection'
import SuccessModulesSection from './components/sections/SuccessModulesSection'
import LiveBatchesSection from './components/sections/LiveBatchesSection'
import ProgramsSection from './components/sections/ProgramsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import WorkingCompaniesSection from './components/sections/WorkingCompaniesSection'
import POCsSection from './components/sections/POCsSection'
import PlacementOpportunities from './ui_components/PlacementOpportunities/PlacementOpportunities'
import OnboardingsSection from './components/sections/OnboardingsSection'
import HonoursSection from './components/sections/HonoursSection'
import OutcomesSection from './components/sections/OutcomesSection'
import MediaSpotlightSection from './components/sections/MediaSpotlightSection'
import FAQSection from './components/sections/FAQSection'
import Footer from './components/Footer'
import Modals from './components/Modals'
import ConsultationPopup from './components/ConsultationPopup'
import PodcastPage from './pages/PodcastPage'
import FloatingSocials from './components/FloatingSocials'
import OnBoardingPage from './pages/OnBoardingPage'

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash
    if (hash === '#/podcast') return 'podcast'
    if (hash === '#/on-boarding') return 'onboarding'
    return 'home'
  })

  useEffect(() => {
    // Sync hash on page change and scroll to top
    if (currentPage === 'podcast') {
      window.history.pushState(null, '', '#/podcast')
      document.title = 'Podcast | Analytics Avenue'
    } else if (currentPage === 'onboarding') {
      window.history.pushState(null, '', '#/on-boarding')
      document.title = 'On-Boarding | Analytics Avenue'
    } else {
      window.history.pushState(null, '', '#/')
      document.title = 'Analytics Avenue | LMS'
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [currentPage])

  useEffect(() => {
    // Listen for back/forward browser navigation
    const onHashChange = () => {
      const hash = window.location.hash
      if (hash === '#/podcast') setCurrentPage('podcast')
      else if (hash === '#/on-boarding') setCurrentPage('onboarding')
      else setCurrentPage('home')
    }
    window.addEventListener('hashchange', onHashChange)

    // Listen for navigate-home custom event (from PodcastPage breadcrumb)
    const onNavHome = () => setCurrentPage('home')
    window.addEventListener('navigate-home', onNavHome)

    return () => {
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('navigate-home', onNavHome)
    }
  }, [])

  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init()
    }

    // Enroll strip button → consultation popup
    const $ = window.$
    if (!$) return

    $(document).on('click', '.trigger-action', function (e) {
      e.preventDefault()
      $('#popup-overlay').fadeIn(300)
    })

    $(document).on('click', '.thebootcampconsult', function (e) {
      e.preventDefault()
      const id = $(this).data('id')
      $('#bootcamp_id').val(id)
      $('#popup-overlay').fadeIn(300)
    })

    $(document).on('click', '.close-x', function () {
      $('#popup-overlay').fadeOut(300)
    })

    $('#popup-overlay').on('click', function (e) {
      if ($(e.target).is('#popup-overlay')) {
        $(this).fadeOut(300)
      }
    })

    // Play button for video
    const playBtn = document.getElementById('playBtn')
    const videoWrapper = document.getElementById('videoWrapper')
    if (playBtn && videoWrapper) {
      playBtn.addEventListener('click', function () {
        videoWrapper.style.display = 'block'
        playBtn.style.display = 'none'
      })
    }

    // Consultation form submit
    $(document).on('submit', '#consultation-form', function (e) {
      e.preventDefault()
      const form = $(this)
      const action = form.data('action')
      const formData = form.serialize()
      $.ajax({
        url: action,
        method: 'POST',
        data: formData,
        success: function (res) {
          $('#form-message').html('<p style="color:green">Thank you! Your consultation has been booked.</p>')
          form[0].reset()
        },
        error: function () {
          $('#form-message').html('<p style="color:red">Something went wrong. Please try again.</p>')
        }
      })
    })

    // Buy bootcamp trigger
    $(document).on('click', '.buy-bootcamp-trigger', function () {
      const price = $(this).data('price')
      const discountedPrice = $(this).data('discounted-price')
      const discountFlag = $(this).data('discount-flag')
      const bootcampId = $(this).data('bootcamp-id')
      const title = $(this).data('bootcamp-title')

      $('#buy-single-link').attr('href', '/purchase/bootcamp/' + bootcampId)

      if (discountFlag == 1 && discountedPrice > 0) {
        $('#single-price').text('₹ ' + discountedPrice)
        $('#single-original').text('₹ ' + price)
      } else {
        $('#single-price').text('₹ ' + price)
        $('#single-original').text('')
      }
    })

    // Logout
    $(document).on('click', '.logout-link', function (e) {
      e.preventDefault()
      window.location.href = 'https://analyticsavenue.in/logout'
    })

    // Nice select
    if ($.fn.niceSelect) {
      $('select.nice-control').niceSelect()
    }
  }, [])

  return (
    <>
      <SubHeader />
      <AppHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === 'podcast' ? (
        <PodcastPage onNavigateHome={() => { setCurrentPage('home'); window.scrollTo({ top: 0 }) }} />
      ) : currentPage === 'onboarding' ? (
        <OnBoardingPage onNavigateHome={() => { setCurrentPage('home'); window.scrollTo({ top: 0 }) }} />
      ) : (
        <section>
          <div id="enroll-strip">
            <span> Book a 1:1 consultation to setup your portfolio for upcoming drives</span>
            <button className="btn-strip trigger-action">Book Now</button>
          </div>
          <HeroSection />
          <WhyAnalyticsSection />
          <SpecialFeatures />
          <MasterAISection />

          <ExpertPanelSection />
          <SuccessModulesSection />
          <LiveBatchesSection />
          {/* <ProgramsSection /> */}
          <TestimonialsSection />
          <WorkingCompaniesSection />
          <POCsSection />
          <PlacementOpportunities />
          {/* <OnboardingsSection /> */}
          <HonoursSection />
          <OutcomesSection />
          {/* <MediaSpotlightSection /> */}
          <FAQSection />
        </section>
      )}

      <Footer />
      <Modals />
      <ConsultationPopup />
      <FloatingSocials />
    </>
  )
}

/* ── Wrapper around Header that injects the Podcast nav link ── */
function AppHeader({ currentPage, setCurrentPage }) {
  const navToPodcast = (e) => {
    e.preventDefault()
    setCurrentPage('podcast')
  }
  const navToHome = (e) => {
    e.preventDefault()
    setCurrentPage('home')
  }
  const navToOnboarding = (e) => {
    e.preventDefault()
    setCurrentPage('onboarding')
  }

  return (
    <>
      <style>{`
        li.pe-2.ps-5.themenntorrss a { color:#000; font-size:16px; }
        .Userprofile .dropmenu-end a { padding:6px 10px; margin-bottom:0; display:flex; }
        @media screen and (min-width:320px) and (max-width:767px){
          li.pe-2.ps-5.themenntorrss a{color:#000;font-size:16px;margin-bottom:20px;}
          .thelmssheadsrsss div#mySidenav{display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:column;height:100vh!important;}
          .nav-menu .primary-menu{flex-direction:column;height:auto;padding-left:20px;padding-top:20px;text-align:left!important;align-items:flex-start!important;padding-left:0;}
          .sidenav .primary-menu.main-menu-ul{flex-direction:column;align-items:flex-start!important;}
          .sidenav .primary-menu.main-menu-ul li{text-align:left;margin-bottom:0;}
          .sidenav .primary-end{flex-direction:column;margin-top:0;align-items:flex-start!important;justify-content:flex-start;}
          .sidenav .Userprofile{display:block!important;}
          .sidenav .ms-lg-auto.col-auto{width:100%;}
          .thelmssheadsrsss span.toggle-bar.text-dark.ms-0{position:absolute;bottom:0;right:13px;transform:translate(-50%,-50%);top:58%;}
          #mySidenav .nav-menu{box-shadow:unset;}
          li.have-mega-menu.theallprogramsedss.thelmmsprogrammms{width:fit-content;padding:2px 15px 10px;margin-left:11px;}
          .hembargar__00099e{float:right;position:absolute;right:0;top:12px;}
          .close-x{position:absolute;top:-14px!important;right:11px!important;font-size:39px!important;cursor:pointer;color:#999;}
          body .masteringaaiisss .masterignaiissheads p{font-size:18px!important;line-height:27px;}
          #modal #side-card{position:relative!important;top:auto!important;left:auto!important;width:100%!important;max-width:100%!important;padding:20px!important;border-radius:18px!important;margin-bottom:20px;line-height:27px;margin-top:0!important;}
          div#modal{flex-direction:column;z-index:99999999;overflow-y:scroll;padding-top:150px!important;align-items:flex-start;justify-content:flex-start;}
          p.theexpertpanneparap{color:#000;font-family:'Helvetica';width:100%;margin:0 auto;text-align:center;font-size:18px;padding-top:6px;line-height:27px;}
          .expertpanelswipers p.thereviewwwdetails.thehomeswiperreviews{color:#000;font-family:'Helvetica';font-size:16px;text-align:center;line-height:27px;}
          #popup-overlay{padding:16px!important;align-items:center!important;justify-content:center!important;overflow-y:auto;box-sizing:border-box;}
          .themasteraainewws .label{z-index:999;background:#fff;}
          p.sucessmoudlleheadsp{font-family:'Helvetica';text-align:center;padding-top:7px;color:#000;font-size:18px;width:100%;margin:0 auto;line-height:27px;}
          .theliveeclasssesscards .card.Ecard.eBar-card.bootcamp-grid-card{height:auto;padding-bottom:44px;}
          .thelivecllassinnrebtns{margin-bottom:10px;}
          section.pocsss.themediaspotlights.honorssprograaamss{padding-top:30px;}
          .thelmsloginns{display:flex!important;}
        }
        /* Podcast nav active state */
        .podcast-nav-active { color: #0377EF !important; font-weight: 700 !important; }
      `}</style>

      <header className="header-area themainwebsiteheader thelmssheadsrsss">
        <div className="container">
          <div className="row flex-md-nowrap theheaderinners">
            <div className="col-auto">
              <div className="logo-image">
                <a href="#/" onClick={navToHome}>
                  <img src="/assets/frontend/default/images/img/mainwebsitelogohead.png" alt="system logo" className="object-fit-cover rounded header-dark-logo themainwebsitelogos" />
                </a>
              </div>
              <div className="hembargar__00099e">
                <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => {
                  const nav = document.getElementById('mySidenav')
                  if (nav) { nav.style.width = '300px'; document.body.style.backgroundColor = 'rgba(0,0,0,0.4)' }
                }}>&#9776; </span>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-menu d-flex justify-content-end me-lg-auto ms-lg-0 ms-auto mt-2 pt-1">
                <div id="mySidenav" className="sidenav">
                  <a href="javascript:void(0)" className="closebtn" onClick={() => {
                    const nav = document.getElementById('mySidenav')
                    if (nav) { nav.style.width = '0'; document.body.style.backgroundColor = 'white' }
                  }}>&times;</a>
                  <div className="ms-lg-auto col-auto">
                    <div className="primary-end d-flex align-items-center">
                      <div className="d-flex align-items-center gap-2">
                        <ul className="primary-menu main-menu-ul d-flex align-items-center w-100 drop-area">
                          <li><a href="#/" onClick={navToHome} className={currentPage === 'home' ? 'active' : ''}>Home</a></li>
                          <li className="pe-2 ps-5">
                            <a
                              href="#/podcast"
                              onClick={navToPodcast}
                              className={currentPage === 'podcast' ? 'podcast-nav-active' : ''}
                              style={{ cursor: 'pointer' }}
                            >
                              Podcast
                            </a>
                          </li>
                          <li className="pe-2 ps-5"><a href="https://analyticsavenue.in/lms/referals#refferlass">Referral</a></li>
                          <li className="pe-2 ps-5"><a href="#">Internship</a></li>
                          <li className="have-mega-menu pe-2 ps-5">
                            <a className="menu-parent-a" href="#">Payment</a>
                            <ul className="mega-dropdown-menu mega main-mega-menu">
                              <div className="mega-menu-items">
                                <ul className="mega_list thefittpaymments">
                                  <li className="Click-here thecompleletelmms">
                                    <a href="https://pages.razorpay.com/discussion" target="_blank" rel="noopener noreferrer">
                                      <span className="me-3"><img src="/assets/frontend/default/images/img/industriesicon1.png" alt="" /></span>
                                      <span className="me-auto">Book your 1-1 consultation</span>
                                    </a>
                                  </li>
                                  <li className="pe-2 ps-5 themenntorrss thecompleletelmms">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#purchaseOptionsFullLMSModal">
                                      <span className="me-3"><img src="/assets/frontend/default/images/img/industriesicon2.png" alt="" /></span>
                                      <span className="me-auto"> Full LMS Access </span>
                                      <small className="thelmmssactive">Active</small>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </ul>
                          </li>
                          <li className="pe-2 ps-5"><a href="https://analyticsavenue.in/">IT services</a></li>
                          <li className="pe-2 ps-5">
                            <a
                              href="#/on-boarding"
                              onClick={navToOnboarding}
                              className={currentPage === 'onboarding' ? 'podcast-nav-active' : ''}
                              style={{ cursor: 'pointer' }}
                            >
                              On-Boarding
                            </a>
                          </li>
                          <li className="pe-2 ps-5">
                            <a href="/assets/broucher/nationwide program Brouchure.pdf" download="nationwide program Brouchure.pdf" className="eBtn gradient download-brochure-btn" style={{ padding: '8px 20px', borderRadius: '50px', fontSize: '14px', fontWeight: 'bold', color: '#fff', textDecoration: 'none', display: 'inline-block' }}>
                              Download Brochure
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Full LMS Modal */}
      <div className="modal fade theprincinggcommonnsss" id="purchaseOptionsFullLMSModal" tabIndex="-1" aria-labelledby="purchaseOptionsFullLMSModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content radius-15 shadow-lg border-0 overflow-hidden">
            <div className="modal-header border-0 pb-1 pt-4 px-4 px-md-5">
              <h4 className="modal-title fw-bold" id="purchaseOptionsFullLMSModalLabel">Choose Your Data Analytics Learning Plan</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body px-4 px-md-5 pb-5">
              <p className="text-center text-muted mb-4">Select the plan that fits your career goals and start your journey today</p>
              <div className="row g-4">
                <div className="col-md-12">
                  <div className="purchase-option h-100 p-4 border radius-15 bg-white position-relative transition-all hover-lift">
                    <div className="ribbon position-absolute top-0 end-0 bg-warning text-white px-3 py-1 rounded-bottom-left">Best Value</div>
                    <h5 className="fw-bold mb-3">ACCESS COMPLETE LMS</h5>
                    <div className="price-block mb-4">
                      <span className="fs-1 fw-bold text-primary thepriceemainnnnss">₹ 18000</span>
                      <small className="text-muted ms-2">one-time payment</small>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-3"><i className="fa-solid fa-circle-check"></i> Access to all the programs and new launches</li>
                      <li className="mb-3"><i className="fa-solid fa-circle-check"></i> A complete end-to-end interview preparation series</li>
                      <li className="mb-3"><i className="fa-solid fa-circle-check"></i> Customize your profile portfolio with data experts' guidance</li>
                      <li className="mb-3"><i className="fa-solid fa-circle-check"></i> Get notifications for special workshops</li>
                      <li className="mb-3"><i className="fa-solid fa-circle-check"></i> Book for the mock interviews</li>
                      <li className="mb-3"><i className="fa-solid fa-circle-check"></i> Periodic job updates for those who passed the screening test</li>
                      <li className="mb-3"><i className="fa-solid fa-circle-check"></i> Apply for internship, internal and referral job opportunities</li>
                      <li className="mb-3"><i className="fa-solid fa-circle-check"></i> Access to freelancing opportunities</li>
                      <li className="mb-3"><i className="fa-solid fa-circle-check"></i> 24/7 customer support</li>
                    </ul>
                    <a href="https://analyticsavenue.in/purchase/full-lms" className="eBtn gradient w-100 mt-auto d-block text-center purchase-full-lms">Get Lifetime Access</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

