import { useMemo } from 'react'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { range, smooth } from './overlayUtils'

export function HeroOverlay() {
  const progress = useScrollProgress()

  const style = useMemo(() => {
    const exit = smooth(range(progress, 0.02, 0.12))
    const opacity = 1 - exit
    const translateY = -48 * exit
    const spacing = 0.22 + 0.14 * exit

    return {
      opacity,
      transform: `translate3d(0, ${translateY}px, 0)`,
      letterSpacing: `${spacing}em`,
    }
  }, [progress])

  return (
    <header className="hero-overlay" style={style}>
      <p className="hero-kicker">01 / H12</p>
      <h1>H12</h1>
      <p className="hero-subtitle">TRAIN BEYOND.</p>
    </header>
  )
}
