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
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const lenis = new Lenis({
      smoothWheel: !prefersReducedMotion,
      syncTouch: true,
      duration: prefersReducedMotion ? 0.3 : 1.22,
      touchMultiplier: 1,
    })

    const onTick = (time: number) => {
      lenis.raf(time * 1000)
    }

    const onRefresh = () => {
      lenis.resize()
    }

    const onViewportResize = () => {
      ScrollTrigger.refresh()
    }

    const updateProgress = (value: number) => {
      const progress = clamp(value)
      setScrollProgress(progress)
      document.documentElement.style.setProperty(
        '--scroll-progress',
        progress.toFixed(4),
      )
    }

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)
    ScrollTrigger.addEventListener('refresh', onRefresh)

    const immersiveTrack = document.querySelector<HTMLElement>('.immersive-track')

    const trigger = ScrollTrigger.create({
      trigger: immersiveTrack ?? document.body,
      start: 'top top',
      end: 'bottom top',
      scrub: 1.25,
      onUpdate: (self) => {
        updateProgress(self.progress)
      },
    })

    window.visualViewport?.addEventListener('resize', onViewportResize)
    ScrollTrigger.refresh()
    updateProgress(0)

    return () => {
      trigger.kill()
      window.visualViewport?.removeEventListener('resize', onViewportResize)
      ScrollTrigger.removeEventListener('refresh', onRefresh)
      gsap.ticker.remove(onTick)
      lenis.destroy()
      updateProgress(0)
    }
  }, [])
}
