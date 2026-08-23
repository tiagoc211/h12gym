import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { CameraRig } from './CameraRig'
import { PlaceholderGym } from './PlaceholderGym'
import { PostProcessing } from './effects/PostProcessing'
import { cameraPath } from '../../config/cameraPath'

export function Experience() {
  const initialCamera = cameraPath[0]
  const isMobile =
    typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches
  const navigatorInfo = typeof navigator !== 'undefined' ? navigator : undefined
  const cpuCores = navigatorInfo?.hardwareConcurrency ?? 8
  const deviceMemory = Number(
    (navigatorInfo as (Navigator & { deviceMemory?: number }) | undefined)?.deviceMemory ?? 8,
  )
  const isLowPower = isMobile || cpuCores <= 4 || deviceMemory <= 4

  return (
    <Canvas
      dpr={isLowPower ? [0.7, 1] : [0.85, 1.25]}
      gl={{ antialias: !isLowPower, powerPreference: 'high-performance' }}
    >
      <PerspectiveCamera
        makeDefault
        fov={initialCamera.fov}
        near={0.1}
        far={180}
        position={initialCamera.position}
        onUpdate={(camera) => {
          camera.lookAt(...initialCamera.target)
        }}
      />

      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 44, 92]} />
      <ambientLight intensity={0.16} />

      <PlaceholderGym />
      <CameraRig />
      <PostProcessing mobile={isLowPower} />
    </Canvas>
  )
}
