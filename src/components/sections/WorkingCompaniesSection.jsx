import React from 'react'

export default function WorkingCompaniesSection() {
  const track1Images = [
    '/assets/frontend/default/images/img/marqueess1.png',
    '/assets/frontend/default/images/img/marqueess2.png',
    '/assets/frontend/default/images/img/marqueess3.png',
    '/assets/frontend/default/images/img/marqueess4.png',
    '/assets/frontend/default/images/img/marqueess5.png',
    '/assets/frontend/default/images/img/marqueess6.png',
  ]

  const track2Images = [
    '/assets/frontend/default/images/img/marqueess7.png',
    '/assets/frontend/default/images/img/marqueess8.png',
    '/assets/frontend/default/images/img/marqueess9.png',
    '/assets/frontend/default/images/img/marqueess10.png',
    '/assets/frontend/default/images/img/marqueess11.png',
    '/assets/frontend/default/images/img/marqueess12.png',
    '/assets/frontend/default/images/img/marqueess13.png',
  ]

  const stats = [
    { figure: '2000+', heading: 'Personal & Professional',    desc: 'Consultations by Our Data Scientists Panel' },
    { figure: '100+',  heading: 'High-Performance ML Models', desc: 'Production-ready, highly accurate models' },
    { figure: '15+',   heading: 'Smart AI Automation',        desc: 'Streamline and automate workflows' },
    { figure: '1000+', heading: 'Empowering Rural Talent',    desc: 'Empowered with Data Analytics Skills' },
    { figure: '500+',  heading: 'Nationwide Professionals',   desc: 'Industry-ready projects for careers' },
    { figure: '50+',   heading: 'Guest Lectures and MOUs',    desc: 'Bridging academia with industry excellence' },
  ]

  return (
    <section
      className="thepoersmall workingcompaniess thestudeenccommsdsdslms"
      style={{ backgroundImage: 'url(/assets/frontend/default/images/img/themarqieeebacss.png)' }}
    >
      <div className="container-fluid p-0">
        <div className="powermainss workingmainss">
          <h2 className="thepoersheads">Aspirants Working With Top Companies Like</h2>

          <div className="workingmaquees1">
            <div className="marquee">
              <div className="track">
                {/* Duplicate 3 times for continuous marquee effect */}
                {[0, 1, 2].map((i) =>
                  track1Images.map((imgSrc, index) => (
                    <div className="content" key={`track1-${i}-${index}`}>
                      <img src={imgSrc} alt="" />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="workingmaquees2">
            <div className="marquee">
              <div className="track">
                {[0, 1, 2].map((i) =>
                  track2Images.map((imgSrc, index) => (
                    <div className="content" key={`track2-${i}-${index}`}>
                      <img src={imgSrc} alt="" />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  )
}
