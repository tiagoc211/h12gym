import { useMemo } from 'react'
import { siteContent } from '../../content/siteContent'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { range, smooth } from './overlayUtils'

export function ScrollMediaOverlay() {
  const progress = useScrollProgress()

  const activeIndex = useMemo(() => {
    if (progress < 0.48) {
      return 0
    }

    return 1
  }, [progress])

  const style = useMemo(() => {
    const reveal = smooth(range(progress, 0.015, 0.08))
    const exit = smooth(range(progress, 0.58, 0.72))
    const opacity = Math.max(0, reveal * (1 - exit))
    const translateY = 22 * (1 - reveal) - 24 * exit

    return {
      opacity,
      transform: `translate3d(0, ${translateY}px, 0)`,
    }
  }, [progress])

  const imageStyle = useMemo(
    () => ({
      objectPosition: siteContent.scrollMoments[activeIndex]?.imagePosition ?? 'center center',
    }),
    [activeIndex],
  )

  const moment = siteContent.scrollMoments[activeIndex] ?? siteContent.scrollMoments[0]
  const photo = siteContent.media.h12Interior
  const imageSrc = moment.imageSrc ?? photo.src
  const imageAlt = moment.imageAlt ?? photo.alt
  const credit = moment.credit ?? photo.credit

  if (progress >= 0.74) {
    return null
  }

  return (
    <aside className="scroll-media-overlay" style={style} aria-label="Momentos H12">
      <div className="scroll-media-card">
        <img src={imageSrc} alt={imageAlt} style={imageStyle} />
        <div className="scroll-media-scrim" />
        <div className="scroll-media-copy">
          <p>
            {moment.index} / {moment.kicker}
          </p>
          <h2>{moment.title}</h2>
          <span>{moment.body}</span>
          {moment.facts ? (
            <ul className="scroll-media-facts">
              {moment.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          ) : null}
        </div>
        <small>{credit}</small>
      </div>
    </aside>
  )
}
