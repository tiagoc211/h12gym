import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { CameraRig } from './CameraRig'
import { PlaceholderGym } from './PlaceholderGym'
import { PostProcessing } from './effects/PostProcessing'

export function Experience() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
    >
      <PerspectiveCamera
        makeDefault
        fov={47}
        near={0.1}
        far={180}
        position={[0.12, 1.86, 10.8]}
      />

      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 36, 110]} />
      <ambientLight intensity={0.12} />

      <PlaceholderGym />
      <CameraRig />
      <PostProcessing />
    </Canvas>
  )
}
