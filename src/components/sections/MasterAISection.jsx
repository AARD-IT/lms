import { useEffect } from 'react'

export default function MasterAISection() {
  useEffect(() => {
    // Spider orbit canvas initialization (from original script.js and inline scripts)
    function scaleCanvas() {
      const canvas = document.querySelector('.canvas.themasteraainewws')
      const wrapper = document.getElementById('canvas-wrapper')
      if (!canvas || !wrapper) return
      const w = wrapper.clientWidth || wrapper.offsetWidth || window.innerWidth
      const s = Math.min(1, w / 800)
      canvas.style.transform = 'scale(' + s + ')'
      wrapper.style.height = Math.round(660 * s) + 'px'
    }
    window.addEventListener('resize', scaleCanvas)
    scaleCanvas()
    setTimeout(scaleCanvas, 100)
    setTimeout(scaleCanvas, 500)

    return () => window.removeEventListener('resize', scaleCanvas)
  }, [])

  return (
    <section className="masteringaaiisss">
      <div className="container-fluid">
        <div className="materingaiissmainnnss">
          <div className="masterignaiissheads">
            <h2>Mastering AI multiplies <br /> <span>your opportunities</span></h2>
            <p>AI is transforming the world and every industry is investing heavily in it. </p>
            <p>Not just to grow revenue, but to eliminate manual work, generate accurate insights, and drive predictable business outcomes</p>
          </div>
          <div className="masteraidiagrramms">
            <div className="masteraidiagrramms-wrapper">
              <p className="theclictttovvireesss"><span><i className="fa-solid fa-arrow-pointer"></i></span>Click on the icon to view hiring companies</p>
              <div id="canvas-wrapper">
                <div className="canvas themasteraainewws">
                  <div className="inner-ring-static"></div>
                  <div className="outer-ring-rotating"></div>
                  <svg id="main-svg"></svg>
                  <div className="ai-chip">
                    <i className="fas fa-microchip chip-icon"></i>
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
