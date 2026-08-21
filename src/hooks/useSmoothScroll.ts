import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { setScrollProgress } from './useScrollProgress'

gsap.registerPlugin(ScrollTrigger)

function clamp(value: number): number {
  return Math.min(1, Math.max(0, value))
}

export function useSmoothScroll(): void {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: true,
      duration: 1.22,
      touchMultiplier: 1,
    })

    const driver = { value: 0 }
    const timeline = gsap.timeline({ paused: true })
    timeline.to(driver, { value: 1, duration: 1, ease: 'none' })

    const onTick = (time: number) => {
      lenis.raf(time * 1000)
    }

    const onRefresh = () => {
      lenis.resize()
    }

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)
    ScrollTrigger.addEventListener('refresh', onRefresh)

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: 0,
      end: () => ScrollTrigger.maxScroll(window),
      scrub: 1.25,
      onUpdate: (self) => {
        timeline.progress(clamp(self.progress))
        const progress = clamp(driver.value)
        setScrollProgress(progress)
        document.documentElement.style.setProperty(
          '--scroll-progress',
          progress.toFixed(4),
        )
      },
    })

    ScrollTrigger.refresh()
    setScrollProgress(0)
    document.documentElement.style.setProperty('--scroll-progress', '0')

    return () => {
      trigger.kill()
      timeline.kill()
      ScrollTrigger.removeEventListener('refresh', onRefresh)
      gsap.ticker.remove(onTick)
      lenis.destroy()
      setScrollProgress(0)
      document.documentElement.style.setProperty('--scroll-progress', '0')
    }
  }, [])
}
