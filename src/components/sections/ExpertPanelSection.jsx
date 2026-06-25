export default function ExpertPanelSection() {
  return (
    <section className="experttspannel">
      <div className="container">
        <div className="expertpanelsmains">
          <div className="ecpertpanerheadss">
            <h2 className="expertpannelheadssh2">Our Data <br /><span>Experts Pannel</span></h2>
            <p className="theexpertpanneparap">
              A Unified team of data experts, with hands-on experience across diverse industries Healthcare, Automobile, Manufacturing, Telemetry, Semiconductors, Supply Chain, BFSI and Talent Acquisition
            </p>
          </div>
          <div className="expertpanelswipers">
            {/* Row 1: Subramani */}
            <div className="expert-row row-1">
              <div className="thehomeswiperreviews">
                <div className="swiper-slide thehomeswiperreviews">
                  <div className="thereviewswiperinners thehomeswiperreviews">
                    <span className="thequoteicons"><i className="fa-solid fa-quote-left"></i></span>
                    <div className="theswiperrevupers thehomeswiperreviews">
                      <div className="swiperongrev"><img src="public/assets/frontend/default/images/img/mentooors1.jpeg" alt="" /></div>
                      <div className="swiperrevtherenameinersers thehomeswiperreviews">
                        <h3 className="swiperrevtherenameinersnames thehomeswiperreviews">Subramani </h3>
                        <p className="thepostioosssofmentor">Chief Data Scientist</p>
                      </div>
                    </div>
                    <div className="swiperrevdowners thehomeswiperreviews">
                      <p className="thereviewwwdetails thehomeswiperreviews">Worked with 15+ international brands, honored as a Top AI Speaker for outstanding contributions to AI education and industry adoption, and empowered 1,000+ data aspirants through focused AI and data analytics initiatives.</p>
                      <div className="keysskillsexpeerts">
                        <h5 className="keyskillsepertsh5">Key skills</h5>
                        <ul className="keyskillexperrtsullls">
                          <li>B2B Consultations</li><li>Business development</li><li>Data Engineering</li><li>Data Science</li><li>SQL</li><li>GenAI</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Row 2: Nishanth + Prasanna */}
            <div className="expert-row row-2">
              {[
                { name:'Nishanth', role:'Senior Data Engineer', img:'mentooors3.jpeg', desc:'With 8+ years of experience in designing and maintaining scalable data pipelines and architectures across multiple cloud platforms through data engineering', skills:['Building optimised data pipelines','Data Engineering','DBT','Snowflake','Cloud computing'] },
                { name:'Prasanna', role:'Senior BI-Developer', img:'mentooors4.jpg', desc:'Builds predictive dashboards and data models to deliver actionable insights and accurate decisions for various global brands with 5+ years of experience', skills:['AWS','GCP','SQL','Power BI','Databricks'] }
              ].map((expert,i) => (
                <div key={i} className="thehomeswiperreviews">
                  <div className="swiper-slide thehomeswiperreviews">
                    <div className="thereviewswiperinners thehomeswiperreviews">
                      <span className="thequoteicons"><i className="fa-solid fa-quote-left"></i></span>
                      <div className="theswiperrevupers thehomeswiperreviews">
                        <div className="swiperongrev"><img src={`public/assets/frontend/default/images/img/${expert.img}`} alt="" /></div>
                        <div className="swiperrevtherenameinersers thehomeswiperreviews">
                          <h3 className="swiperrevtherenameinersnames thehomeswiperreviews">{expert.name}</h3>
                          <p className="thepostioosssofmentor">{expert.role}</p>
                        </div>
                      </div>
                      <div className="swiperrevdowners thehomeswiperreviews">
                        <p className="thereviewwwdetails thehomeswiperreviews">{expert.desc}</p>
                        <div className="keysskillsexpeerts">
                          <h5 className="keyskillsepertsh5">Key skills</h5>
                          <ul className="keyskillexperrtsullls">{expert.skills.map((s,j)=><li key={j}>{s}</li>)}</ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Row 3: Bala + Kishore */}
            <div className="expert-row row-2">
              {[
                { name:'Bala', role:'Senior Data Scientist', img:'mentooors5.jpeg', desc:'Builds predictive ML models for accurate predictions across healthcare and BFSI sectors with 8+ years of experience', skills:['B2B Consultations','AWS','Machine learning','SQL','GenAI'] },
                { name:'Kishore', role:'Senior AI Engineer', img:'mentooors6.jpg', desc:'Builds Agentic AI solutions and automations for Supply chain and automobile industry with 8+ years of Industrial Experience', skills:['B2B Consultations','Azure','Machine learning','SQL','GenAI'] }
              ].map((expert,i) => (
                <div key={i} className="thehomeswiperreviews">
                  <div className="swiper-slide thehomeswiperreviews">
                    <div className="thereviewswiperinners thehomeswiperreviews">
                      <span className="thequoteicons"><i className="fa-solid fa-quote-left"></i></span>
                      <div className="theswiperrevupers thehomeswiperreviews">
                        <div className="swiperongrev"><img src={`public/assets/frontend/default/images/img/${expert.img}`} alt="" /></div>
                        <div className="swiperrevtherenameinersers thehomeswiperreviews">
                          <h3 className="swiperrevtherenameinersnames thehomeswiperreviews">{expert.name}</h3>
                          <p className="thepostioosssofmentor">{expert.role}</p>
                        </div>
                      </div>
                      <div className="swiperrevdowners thehomeswiperreviews">
                        <p className="thereviewwwdetails thehomeswiperreviews">{expert.desc}</p>
                        <div className="keysskillsexpeerts">
                          <h5 className="keyskillsepertsh5">Key skills</h5>
                          <ul className="keyskillexperrtsullls">{expert.skills.map((s,j)=><li key={j}>{s}</li>)}</ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Row 4: Mahesh, Deepak Raj, Rizwan Ahmed */}
            <div className="expert-row row-4">
              {[
                { name:'Mahesh', role:'Senior AI Engineer', img:'mentooors7.jpeg', desc:'Builds scalable AI solutions for Supply chain and automobile industry with 3+ years of Industrial Experience', skills:['Machine learning','SQL','GenAI','AgenticAI'] },
                { name:'Deepak Raj', role:'Agentic AI Engineer', img:'mentooors8.jpeg', desc:'Builds Agentic AI automations for Supply chain and automobile industry to reduce manual efforts and improve the process efficiency', skills:['Machine learning','SQL','GenAI','AgenticAI'] },
                { name:'Rizwan Ahmed', role:'Bio Research Analytics Engineer', img:'mentooors9.jpeg', desc:'Pre-Doctoral Fellow at IIT Kharagpur who Engineers biomaterial scaffolds for regenerative medicine by integrating tissue engineering with systems pharmacology and AI-driven analytics.', skills:[] }
              ].map((expert,i) => (
                <div key={i} className="thehomeswiperreviews">
                  <div className="swiper-slide thehomeswiperreviews">
                    <div className="thereviewswiperinners thehomeswiperreviews">
                      <span className="thequoteicons"><i className="fa-solid fa-quote-left"></i></span>
                      <div className="theswiperrevupers thehomeswiperreviews">
                        <div className="swiperongrev"><img src={`public/assets/frontend/default/images/img/${expert.img}`} alt="" /></div>
                        <div className="swiperrevtherenameinersers thehomeswiperreviews">
                          <h3 className="swiperrevtherenameinersnames thehomeswiperreviews">{expert.name}</h3>
                          <p className="thepostioosssofmentor">{expert.role}</p>
                        </div>
                      </div>
                      <div className="swiperrevdowners thehomeswiperreviews">
                        <p className="thereviewwwdetails thehomeswiperreviews">{expert.desc}</p>
                        {expert.skills.length > 0 && (
                          <div className="keysskillsexpeerts">
                            <h5 className="keyskillsepertsh5">Key skills</h5>
                            <ul className="keyskillexperrtsullls">{expert.skills.map((s,j)=><li key={j}>{s}</li>)}</ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
