import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { CameraRig } from './CameraRig'
import { PlaceholderGym } from './PlaceholderGym'
import { PostProcessing } from './effects/PostProcessing'
import { cameraPath } from '../../config/cameraPath'

export function Experience() {
  const initialCamera = cameraPath[0]

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
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
      <ambientLight intensity={0.1} />

      <PlaceholderGym />
      <CameraRig />
      <PostProcessing />
    </Canvas>
  )
}
