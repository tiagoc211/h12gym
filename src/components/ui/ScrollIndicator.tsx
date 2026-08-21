import { useMemo } from 'react'
import { siteContent } from '../../content/siteContent'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { range, smooth } from './overlayUtils'

export function ScrollIndicator() {
  const progress = useScrollProgress()

  const style = useMemo(() => {
    const fade = smooth(range(progress, 0.03, 0.2))
    return {
      opacity: 1 - fade,
      transform: `translate3d(0, ${16 * fade}px, 0)`,
    }
  }, [progress])

  return (
    <aside className="scroll-indicator" style={style}>
      {siteContent.hero.scrollHint}
    </aside>
  )
}
