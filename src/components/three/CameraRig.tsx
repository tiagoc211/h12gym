import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import {
  CatmullRomCurve3,
  MathUtils,
  PerspectiveCamera,
  Vector2,
  Vector3,
} from 'three'
import { cameraPath } from '../../config/cameraPath'
import { getScrollProgress } from '../../hooks/useScrollProgress'

function clamp(value: number): number {
  return Math.min(1, Math.max(0, value))
}

function interpolateFov(progress: number): number {
  const points = cameraPath
  const clamped = clamp(progress)

  if (clamped <= points[0].progress) {
    return points[0].fov
  }

  const lastPoint = points[points.length - 1]
  if (clamped >= lastPoint.progress) {
    return lastPoint.fov
  }

  for (let index = 0; index < points.length - 1; index += 1) {
    const current = points[index]
    const next = points[index + 1]
    const inSegment = clamped >= current.progress && clamped <= next.progress
    if (!inSegment) {
      continue
    }

    const segmentLength = next.progress - current.progress || 1
    const alpha = (clamped - current.progress) / segmentLength
    return MathUtils.lerp(current.fov, next.fov, alpha)
  }

  return lastPoint.fov
}

export function CameraRig() {
  const camera = useThree((state) => state.camera as PerspectiveCamera)
  const cameraRef = useRef<PerspectiveCamera>(camera)
  const pointer = useRef(new Vector2())
  const smoothPointer = useRef(new Vector2())
  const isFinePointer = useRef(false)
  const isMobile = useRef(false)

  const positionSample = useRef(new Vector3(...cameraPath[0].position))
  const targetSample = useRef(new Vector3(...cameraPath[0].target))
  const desiredPosition = useRef(new Vector3(...cameraPath[0].position))
  const desiredTarget = useRef(new Vector3(...cameraPath[0].target))
  const smoothedTarget = useRef(new Vector3(...cameraPath[0].target))

  const positionCurve = useMemo(
    () => new CatmullRomCurve3(cameraPath.map((point) => new Vector3(...point.position))),
    [],
  )
  const targetCurve = useMemo(
    () => new CatmullRomCurve3(cameraPath.map((point) => new Vector3(...point.target))),
    [],
  )

  useEffect(() => {
    cameraRef.current = camera
  }, [camera])

  useEffect(() => {
    const finePointerMedia = window.matchMedia('(pointer: fine)')
    const mobileMedia = window.matchMedia('(max-width: 900px)')

    const updateFinePointer = () => {
      isFinePointer.current = finePointerMedia.matches
    }
    const updateMobile = () => {
      isMobile.current = mobileMedia.matches
    }

    updateFinePointer()
    updateMobile()

    const onPointerMove = (event: PointerEvent) => {
      if (!isFinePointer.current) {
        pointer.current.set(0, 0)
        return
      }

      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = (event.clientY / window.innerHeight) * 2 - 1
      pointer.current.set(MathUtils.clamp(x, -1, 1), MathUtils.clamp(y, -1, 1))
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    finePointerMedia.addEventListener('change', updateFinePointer)
    mobileMedia.addEventListener('change', updateMobile)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      finePointerMedia.removeEventListener('change', updateFinePointer)
      mobileMedia.removeEventListener('change', updateMobile)
    }
  }, [])

  useFrame((state, delta) => {
    const activeCamera = cameraRef.current
    const scroll = getScrollProgress()
    const curveProgress = MathUtils.smoothstep(scroll, 0, 1)

    positionCurve.getPointAt(curveProgress, positionSample.current)
    targetCurve.getPointAt(curveProgress, targetSample.current)

    smoothPointer.current.lerp(pointer.current, 1 - Math.exp(-3.2 * delta))
    const cursorX = isFinePointer.current ? smoothPointer.current.x : 0
    const cursorY = isFinePointer.current ? smoothPointer.current.y : 0
    const mobileMultiplier = isMobile.current ? 0.4 : 1

    const wave = Math.sin(state.clock.elapsedTime * 0.85) * 0.05
    desiredPosition.current.set(
      positionSample.current.x + cursorX * 0.24 * mobileMultiplier,
      positionSample.current.y - cursorY * 0.12 * mobileMultiplier + wave,
      positionSample.current.z,
    )
    desiredTarget.current.set(
      targetSample.current.x + cursorX * 0.16 * mobileMultiplier,
      targetSample.current.y - cursorY * 0.08 * mobileMultiplier + wave * 0.35,
      targetSample.current.z,
    )

    const damping = 1 - Math.exp(-4.1 * delta)
    activeCamera.position.lerp(desiredPosition.current, damping)
    smoothedTarget.current.lerp(desiredTarget.current, damping)
    activeCamera.lookAt(smoothedTarget.current)

    const roll = cursorX * -0.015 * mobileMultiplier + Math.sin(state.clock.elapsedTime * 0.42) * 0.004
    activeCamera.rotation.z = MathUtils.lerp(
      activeCamera.rotation.z,
      roll,
      damping * 0.72,
    )

    const baseFov = interpolateFov(scroll)
    const desiredFov = baseFov + (isMobile.current ? 4 : 0) + cursorY * 0.65 * mobileMultiplier
    activeCamera.fov = MathUtils.lerp(activeCamera.fov, desiredFov, damping * 0.8)
    activeCamera.updateProjectionMatrix()
  })

  return null
}
