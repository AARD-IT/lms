import './SuccessModulesSection.css'

export default function SuccessModulesSection() {
  return (
    <section className="successmodules">
      <div className="container">
        <div className="sucessmodulemains">
          <div className="sucessmoduleheads">
            <h2 className="sucessmodeheadsh2 techlogh2">Our Success Strategy <br /><span>Module</span></h2>
            <p className="sucessmoudlleheadsp">Prepared exclusively for freshers, immediate job seekers, and career transition candidates from our core data scientist panel</p>
          </div>
          <div className="success-strategy-container">
            <div className="success-strategy-diagram">
              
              <div className="success-phases-list">
                
                {/* Phase 1 */}
                <div className="success-phase-row">
                  <div className="success-phase-title">Phase 1</div>
                  
                  {/* AI Tools Column */}
                  <div className="success-list-container">
                    <div className="bracket-left"></div>
                    <div className="success-list-content">
                      <h4 className="success-column-heading">AI Tools</h4>
                      <ul className="success-skills-list">
                        <li>Python</li>
                        <li>SQL</li>
                        <li>Power BI</li>
                        <li>Statistics</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Roles & Designations Column */}
                  <div className="success-list-container">
                    <div className="bracket-left"></div>
                    <div className="success-list-content">
                      <h4 className="success-column-heading">Roles &amp; Designations</h4>
                      <ul className="success-roles-list">
                        <li>Data Engineer</li>
                        <li>Data Analyst</li>
                        <li>Visualization Engineer</li>
                        <li>Data Consultant</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Plus & Bonus */}
                  <div className="success-bonus-container">
                    <span className="success-plus-sign">+</span>
                    <span className="success-bonus-text">SQL Developer &amp; Python Developer</span>
                  </div>
                </div>
                
                {/* Phase 2 */}
                <div className="success-phase-row">
                  <div className="success-phase-title">Phase 2</div>
                  
                  {/* AI Tools Column */}
                  <div className="success-list-container">
                    <div className="bracket-left"></div>
                    <div className="success-list-content">
                      <h4 className="success-column-heading">AI Tools</h4>
                      <ul className="success-skills-list">
                        <li>GenAi and ML Flow with AgenticAI</li>
                        <li>Data Science</li>
                        <li>Machine Learning</li>
                        <li>MLflow</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Roles & Designations Column */}
                  <div className="success-list-container">
                    <div className="bracket-left"></div>
                    <div className="success-list-content">
                      <h4 className="success-column-heading">Roles &amp; Designations</h4>
                      <ul className="success-roles-list">
                        <li>GenAI Specialist</li>
                        <li>Data Scientist</li>
                        <li>ML Engineer</li>
                        <li>AgenticAI Specialist</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Plus & Bonus */}
                  <div className="success-bonus-container">
                    <span className="success-plus-sign">+</span>
                    <span className="success-bonus-text">1 lakh worth digital notes</span>
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

