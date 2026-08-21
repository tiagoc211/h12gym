import { useMemo } from 'react'
import { siteContent } from '../../content/siteContent'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { CTAButton } from './CTAButton'
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
      <p className="hero-kicker">{siteContent.hero.cityLabel}</p>
      <h1>{siteContent.hero.displayTitle}</h1>
      <p className="hero-subtitle">{siteContent.hero.lines.join(' ')}</p>
      <div className="hero-actions">
        <CTAButton href="#conceito">{siteContent.hero.primaryCta}</CTAButton>
        <CTAButton href="#planos" variant="ghost">
          {siteContent.hero.secondaryCta}
        </CTAButton>
      </div>
    </header>
  )
}
