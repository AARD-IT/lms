import React from 'react'

export default function PlacementSection() {
  return (
    <section className="placeemmentssss">
      <div className="container">
        <div className="placemmenttssmainns">
          <div className="thepllacenneemtsheaaads">
            <h2 className="theplaccemmntsh2">3 MODE OF <br /><span>Placement opportunities</span></h2>
            <p className="thepplacemmentsheaddssp">
              “Skip the hype. Learn proven strategies to attract organic job calls and crack referral-driven hiring”
            </p>
          </div>
          <div className="stage">
            <svg className="svg-container" viewBox="0 0 1000 600">
              <path className="connector-line line-y" d="M 170 180 C 170 100, 250 80, 450 80" />
              <path className="connector-line line-m" d="M 290 300 L 450 300" />
              <path className="connector-line line-c" d="M 170 420 C 170 500, 250 520, 450 520" />
            </svg>

            <div className="bulb-group">
              <div className="bulb-head">
                <div className="bulb-core"><span className="theeehirringgss">Hiring</span></div>
              </div>
              <div className="bulb-neck"></div>
              <div className="bulb-base"></div>
            </div>

            <div className="text-panel">
              <div className="card">
                <h2 style={{ color: 'var(--yellow)' }}>Referral Programs</h2>
                <p>We have a strong data community channels with 5000+ Professionals through whom we receive job updates regularly.</p>
              </div>
              <div className="card">
                <h2 style={{ color: 'var(--magenta)' }}>Organic Job Calls</h2>
                <p>We create and set up profiles across nine different secret portals to organically attract placement opportunities.</p>
              </div>
              <div className="card">
                <h2 style={{ color: 'var(--cyan)' }}>Internal Project Acquisition</h2>
                <p>As a growing analytical startup, we acquire projects overseas that provide additional placement opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
