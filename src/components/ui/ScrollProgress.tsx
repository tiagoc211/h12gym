import { useMemo } from 'react'
import { useScrollProgress } from '../../hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()
  const markerStyle = useMemo(
    () => ({
      top: `${Math.round(progress * 100)}%`,
    }),
    [progress],
  )

  return (
    <aside className="scroll-progress" aria-hidden>
      <span>01</span>
      <div className="scroll-progress__track">
        <div className="scroll-progress__dot" style={markerStyle} />
      </div>
      <span>06</span>
    </aside>
  )
}
