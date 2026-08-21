import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { MathUtils, Vector3 } from 'three'
import { cameraPath } from '../../config/cameraPath'
import { getScrollProgress } from '../../hooks/useScrollProgress'

function interpolatePoint(
  progress: number,
  outputPosition: Vector3,
  outputTarget: Vector3,
): void {
  const clampedProgress = MathUtils.clamp(progress, 0, 1)
  const points = cameraPath

  if (clampedProgress <= points[0].progress) {
    outputPosition.set(...points[0].position)
    outputTarget.set(...points[0].target)
    return
  }

  const lastPoint = points[points.length - 1]
  if (clampedProgress >= lastPoint.progress) {
    outputPosition.set(...lastPoint.position)
    outputTarget.set(...lastPoint.target)
    return
  }

  for (let i = 0; i < points.length - 1; i += 1) {
    const currentPoint = points[i]
    const nextPoint = points[i + 1]

    if (
      clampedProgress >= currentPoint.progress &&
      clampedProgress <= nextPoint.progress
    ) {
      const range = nextPoint.progress - currentPoint.progress || 1
      const alpha = (clampedProgress - currentPoint.progress) / range

      outputPosition.set(
        MathUtils.lerp(currentPoint.position[0], nextPoint.position[0], alpha),
        MathUtils.lerp(currentPoint.position[1], nextPoint.position[1], alpha),
        MathUtils.lerp(currentPoint.position[2], nextPoint.position[2], alpha),
      )

      outputTarget.set(
        MathUtils.lerp(currentPoint.target[0], nextPoint.target[0], alpha),
        MathUtils.lerp(currentPoint.target[1], nextPoint.target[1], alpha),
        MathUtils.lerp(currentPoint.target[2], nextPoint.target[2], alpha),
      )
      return
    }
  }
}

export function CameraRig() {
  const { camera } = useThree()
  const desiredPosition = useRef(new Vector3(...cameraPath[0].position))
  const desiredTarget = useRef(new Vector3(...cameraPath[0].target))
  const smoothedTarget = useRef(new Vector3(...cameraPath[0].target))

  useFrame((_, delta) => {
    interpolatePoint(
      getScrollProgress(),
      desiredPosition.current,
      desiredTarget.current,
    )

    const damping = 1 - Math.exp(-4.5 * delta)
    camera.position.lerp(desiredPosition.current, damping)
    smoothedTarget.current.lerp(desiredTarget.current, damping)
    camera.lookAt(smoothedTarget.current)
  })

  return null
}
