import { useEffect } from 'react'
import gsap from 'gsap'
import Lenis from 'lenis'
import { setScrollProgress } from './useScrollProgress'

function clamp(value: number): number {
  return Math.min(1, Math.max(0, value))
}

export function useSmoothScroll(): void {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: true,
      duration: 1.05,
    })

    const driver = { progress: 0 }
    const timeline = gsap.timeline({ paused: true })
    timeline.to(driver, { progress: 1, duration: 1, ease: 'none' })

    lenis.on('scroll', () => {
      const rawProgress =
        Number.isFinite(lenis.progress) && lenis.progress >= 0
          ? lenis.progress
          : 0

      timeline.progress(clamp(rawProgress))
      setScrollProgress(driver.progress)
    })

    let frameId = 0

    const onFrame = (time: number) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(onFrame)
    }

    frameId = requestAnimationFrame(onFrame)
    setScrollProgress(0)

    return () => {
      cancelAnimationFrame(frameId)
      timeline.kill()
      lenis.destroy()
      setScrollProgress(0)
    }
  }, [])
}
