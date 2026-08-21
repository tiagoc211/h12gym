import { useMemo } from 'react'
import { siteContent } from '../../content/siteContent'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { range, smooth } from './overlayUtils'

export function ScrollMediaOverlay() {
  const progress = useScrollProgress()

  const activeIndex = useMemo(() => {
    if (progress < 0.34) {
      return 0
    }

    if (progress < 0.62) {
      return 1
    }

    return 2
  }, [progress])

  const style = useMemo(() => {
    const reveal = smooth(range(progress, 0.13, 0.24))
    const exit = smooth(range(progress, 0.86, 0.98))
    const opacity = Math.max(0, reveal * (1 - exit))
    const translateY = 34 * (1 - reveal) - 24 * exit

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

  return (
    <aside className="scroll-media-overlay" style={style} aria-label="Momentos H12">
      <div className="scroll-media-card">
        <img src={photo.src} alt={photo.alt} style={imageStyle} />
        <div className="scroll-media-scrim" />
        <div className="scroll-media-copy">
          <p>
            {moment.index} / {moment.kicker}
          </p>
          <h2>{moment.title}</h2>
          <span>{moment.body}</span>
        </div>
        <small>{photo.credit}</small>
      </div>
    </aside>
  )
}
