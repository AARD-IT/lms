import { useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { sectors } from './data/sectors'
import { DIAGRAM_CENTER, getDiagramLayouts } from './utils/diagramGeometry'

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < breakpoint
  )

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [breakpoint])

  return isMobile
}

export default function AIDiagram({ onSectorClick }) {
  const wrapperRef = useRef(null)
  const canvasRef = useRef(null)
  const nodeRefs = useRef([])
  const labelRefs = useRef([])
  const [activeLineId, setActiveLineId] = useState(null)
  const [activeLabelIndex, setActiveLabelIndex] = useState(null)
  const [labelsVisible, setLabelsVisible] = useState(() => sectors.map(() => false))

  const isMobile = useIsMobile()
  const layouts = useMemo(
    () => getDiagramLayouts(sectors.length, isMobile),
    [isMobile]
  )

  useEffect(() => {
    setLabelsVisible(sectors.map(() => false))
  }, [layouts])

  useEffect(() => {
    const scaleCanvas = () => {
      const canvas = canvasRef.current
      const wrapper = wrapperRef.current
      if (!canvas || !wrapper) return

      const w = wrapper.clientWidth || wrapper.offsetWidth || window.innerWidth
      const isMobileView = window.innerWidth < 768
      // On mobile use a smaller reference width so the diagram fills the screen;
      // on desktop cap at 1 so it never exceeds its natural 800px size.
      const referenceWidth = isMobileView ? 320 : 800
      const s = Math.min(1, w / referenceWidth)
      canvas.style.transform = `scale(${s})`

      if (isMobileView) {
        // The 800x660 canvas has ~80px of empty space at top and bottom
        // before the actual diagram nodes start. Trim that so there's no gap.
        const trimPx = 130
        canvas.style.marginTop = `${-Math.round(trimPx * s)}px`
        wrapper.style.height = `${Math.round((660 - trimPx * 2) * s)}px`
      } else {
        canvas.style.marginTop = '0'
        wrapper.style.height = `${Math.round(660 * s)}px`
      }
    }

    scaleCanvas()
    window.addEventListener('load', scaleCanvas)
    window.addEventListener('resize', scaleCanvas)
    const t1 = window.setTimeout(scaleCanvas, 100)
    const t2 = window.setTimeout(scaleCanvas, 500)

    return () => {
      window.removeEventListener('load', scaleCanvas)
      window.removeEventListener('resize', scaleCanvas)
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [])

  useEffect(() => {
    const { cx, cy } = DIAGRAM_CENTER
    const tweens = []

    nodeRefs.current.forEach((node, i) => {
      const layout = layouts[i]
      if (!node || !layout) return

      gsap.set(node, { left: cx, top: cy, opacity: 0 })

      const tween = gsap.to(node, {
        left: layout.nodeLeft,
        top: layout.nodeTop,
        opacity: 1,
        duration: 1.4,
        delay: i * 0.16,
        ease: 'power1.inOut',
        onComplete: () => {
          setLabelsVisible((prev) => {
            const next = [...prev]
            next[i] = true
            return next
          })
        },
      })
      tweens.push(tween)
    })

    return () => {
      tweens.forEach((tween) => tween.kill())
    }
  }, [layouts])

  return (
    <div className="masteraidiagrramms-wrapper" ref={wrapperRef}>
      <div className="canvas themasteraainewws" ref={canvasRef}>
        <div className="inner-ring-static" />
        <div className="outer-ring-rotating" />

        <svg id="main-svg">
          {layouts.map((layout) => (
            <g key={layout.lineId}>
              <path
                d={layout.pathD}
                className={`circuit-line${activeLineId === layout.lineId ? ' line-active' : ''}`}
                id={layout.lineId}
              />
              <path
                d={layout.pathD}
                className="data-pulse"
                style={{ animationDelay: layout.pulseDelay }}
              />
            </g>
          ))}
        </svg>

        <div className="ai-chip">
          <i className="fas fa-microchip chip-icon" />
        </div>

        {sectors.map((sector, i) => {
          const layout = layouts[i]
          return (
            <div key={sector.name}>
              <div
                ref={(el) => {
                  nodeRefs.current[i] = el
                }}
                className="node"
                style={{ left: DIAGRAM_CENTER.cx, top: DIAGRAM_CENTER.cy, opacity: 0 }}
                onMouseEnter={() => {
                  setActiveLineId(layout.lineId)
                  setActiveLabelIndex(i)
                }}
                onMouseLeave={() => {
                  setActiveLineId(null)
                  setActiveLabelIndex(null)
                }}
                onClick={() => onSectorClick(sector)}
                dangerouslySetInnerHTML={{ __html: sector.icon }}
              />
              <div
                ref={(el) => {
                  labelRefs.current[i] = el
                }}
                className={`label${activeLabelIndex === i ? ' label-active' : ''}`}
                style={{
                  left: `${layout.labelLeft}px`,
                  top: `${layout.labelTop}px`,
                  transform: 'translate(-50%, -50%)',
                  opacity: labelsVisible[i] ? 1 : 0,
                }}
                dangerouslySetInnerHTML={{ __html: sector.name }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
