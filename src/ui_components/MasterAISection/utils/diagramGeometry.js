const CX = 400
const CY = 330

/** Mirrors the original even angular spacing around the AI chip. */
export function getDiagramLayouts(sectorCount, isMobile) {
  const radius = isMobile ? 105 : 210
  const labelDist = isMobile ? 40 : 105
  const nodeOffset = isMobile ? 25 : 41

  return Array.from({ length: sectorCount }, (_, i) => {
    let angle = (i / sectorCount) * Math.PI * 2
    angle += Math.PI * 0.1

    const x = CX + radius * Math.cos(angle)
    const y = CY + radius * Math.sin(angle)
    const midX = CX + (x - CX) * 0.35
    const midY = CY + (y - CY) * 0.12

    const labelX = CX + (radius + labelDist) * Math.cos(angle)
    const labelY = CY + (radius + labelDist) * Math.sin(angle)

    return {
      lineId: `line-${i}`,
      pathD: `M ${CX} ${CY} L ${midX} ${midY} L ${x} ${y}`,
      nodeLeft: x - nodeOffset,
      nodeTop: y - nodeOffset,
      labelLeft: labelX,
      labelTop: labelY,
      pulseDelay: `${i * 0.55}s`,
    }
  })
}

export const DIAGRAM_CENTER = { cx: CX, cy: CY }
