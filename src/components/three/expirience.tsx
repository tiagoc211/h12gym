import { Canvas } from '@react-three/fiber'
import { PlaceholderGym } from './PlaceholderGym.tsx'

export function Experience() {
  return (
    <Canvas
      camera={{
        position: [0, 1.7, 8],
        fov: 60,
      }}
    >
      <color attach="background" args={['#050505']} />

      <ambientLight intensity={0.5} />

      <directionalLight
        position={[5, 10, 5]}
        intensity={2}
      />

      <PlaceholderGym />
    </Canvas>
  )
}