import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { CameraRig } from './CameraRig'
import { PlaceholderGym } from './PlaceholderGym'

export function Experience() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
    >
      <PerspectiveCamera
        makeDefault
        fov={58}
        near={0.1}
        far={220}
        position={[0.2, 1.75, 8.8]}
      />

      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 24, 95]} />
      <ambientLight intensity={0.45} />
      <hemisphereLight args={['#ffffff', '#101010', 0.35]} />
      <directionalLight position={[6, 9, 6]} intensity={1.1} />

      <PlaceholderGym />
      <CameraRig />
    </Canvas>
  )
}
