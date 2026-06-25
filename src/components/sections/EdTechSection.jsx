import { useEffect } from 'react'

export default function EdTechSection() {
  useEffect(() => {
    // EdTech feature carousel JS - ported from original inline script
    const features = [
      { icon: 'fa-solid fa-video', title: 'Live Classes', desc: 'Interactive live sessions with real-time Q&A' },
      { icon: 'fa-solid fa-project-diagram', title: 'Live Projects', desc: 'Work on industry-level projects alongside data scientists' },
      { icon: 'fa-solid fa-users', title: 'Expert Panel', desc: '1-on-1 consultation with data experts panel' },
      { icon: 'fa-solid fa-briefcase', title: 'Placement Support', desc: 'Access to placement drives and job referrals' },
      { icon: 'fa-solid fa-certificate', title: 'Certification', desc: 'Industry-recognized certifications on completion' },
      { icon: 'fa-solid fa-laptop-code', title: 'Self-Paced Learning', desc: 'Recorded sessions accessible anytime, anywhere' },
      { icon: 'fa-solid fa-chart-bar', title: 'Portfolio Building', desc: 'Build a standout data portfolio with expert guidance' },
      { icon: 'fa-solid fa-handshake', title: 'Freelance Access', desc: 'Access to freelancing opportunities in analytics' },
    ]

    const stage = document.getElementById('feature-stage')
    if (!stage) return

    const isMobile = window.innerWidth < 768
    if (isMobile) {
      // On mobile: render as simple list
      features.forEach(f => {
        const card = document.createElement('div')
        card.className = 'feature-card-mobile'
        card.innerHTML = `<i class="${f.icon}"></i><h4>${f.title}</h4><p>${f.desc}</p>`
        stage.appendChild(card)
      })
      return
    }

    const cx = stage.offsetWidth / 2
    const cy = stage.offsetHeight / 2
    const radius = Math.min(cx, cy) * 0.75

    features.forEach((f, i) => {
      const angle = (i / features.length) * 2 * Math.PI - Math.PI / 2
      const x = cx + radius * Math.cos(angle)
      const y = cy + radius * Math.sin(angle)

      const card = document.createElement('div')
      card.className = 'feature-card'
      card.style.left = x + 'px'
      card.style.top = y + 'px'
      card.innerHTML = `<i class="${f.icon}"></i><h4>${f.title}</h4><p>${f.desc}</p>`
      stage.appendChild(card)
    })
  }, [])

  return (
    <section className="edutech-section" id="edutechSection">
      <div className="header-box">
        <h1>Special features in Our <span>Analytics Avenue LMS</span></h1>
      </div>
      <div className="carousel-container">
        <div className="center-hub">
          <div className="hub-content">Edutech <br />Features</div>
        </div>
        <div id="feature-stage" className="feature-stage"></div>
      </div>
    </section>
  )
}
