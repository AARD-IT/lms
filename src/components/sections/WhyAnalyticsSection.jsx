export default function WhyAnalyticsSection() {
  return (
    <section className="iaamhereress">
      <div className="container-fluid">
        <div className="iamheresmains">
          <div className="row">
            <div className="col-md-7">
              <div className="thewhyanayticslefts">
                <div className="thewhyanayticleftheads">
                  <h2>Why Analytics Avenue for L&amp;D?</h2>
                </div>
                <div className="thewhyanayicssinfosleft">
                  <h4 className="themainhighlights">We don't educate analytics <br /> We build data experts who automate entire businesses end-to-end through scalable data pipelines, intelligent ML &amp; Agentic AI solutions, and automation systems that eliminate manual effort while delivering accurate insights and outcomes.</h4>
                  <p><span className="thepiticon"><img src="/assets/frontend/default/images/img/pwefectpoints.png" alt="" /></span>A perfect platform for career transition seekers, freshers, unemployed professionals looking to restart their careers, and passionate data experts to learn, build real-world projects, and unlock new career opportunities.</p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="thewhyanayticsrights" style={{ height: 'auto' }}>
                <div className="the-video-card" style={{ height: 'auto' }}>
                  <img src="/assets/about/image.png" alt="" className="thebigaboutimage" style={{ height: 'auto', objectFit: 'contain' }} />
                  <button className="play-wave" id="playBtn" type="button">
                    <img src="/assets/frontend/default/images/img/aboutrowplay.png" alt="" className="theaboutrowplays" />
                  </button>
                  <div className="video-wrapper" id="videoWrapper">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OWfoMZlzozk?si=2M-ysUg8l-cJK2kc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
