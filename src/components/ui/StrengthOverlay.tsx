import { useMemo } from 'react'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { range, smooth } from './overlayUtils'

export function StrengthOverlay() {
  const progress = useScrollProgress()

  const style = useMemo(() => {
    const reveal = smooth(range(progress, 0.5, 0.64))
    const exit = smooth(range(progress, 0.76, 0.9))
    const opacity = Math.max(0, reveal * (1 - exit))
    const translateY = 52 * (1 - reveal) - 24 * exit
    const clip = Math.max(0, 100 - reveal * 100)
    const spacing = 0.18 - reveal * 0.06 + exit * 0.04

    return {
      opacity,
      transform: `translate3d(0, ${translateY}px, 0)`,
      clipPath: `inset(${clip}% 0 0 0)`,
      letterSpacing: `${spacing}em`,
    }
  }, [progress])

  return (
    <section className="strength-overlay" style={style}>
      <p>02 / H12</p>
      <h2>STRENGTH</h2>
      <p className="strength-lines">
        BUILD.
        <br />
        PUSH.
        <br />
        REPEAT.
      </p>
    </section>
  )
}
