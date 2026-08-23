import { MeshStandardMaterial } from 'three'

const yellowMaterial = new MeshStandardMaterial({
  color: '#f2c230',
  emissive: '#4a3500',
  emissiveIntensity: 0.24,
  roughness: 0.52,
  metalness: 0.12,
})

export function BrandDetails() {
  return (
    <group>
      <mesh position={[-3.8, 0.018, 7.2]} material={yellowMaterial}>
        <boxGeometry args={[0.08, 0.025, 4.2]} />
      </mesh>
      <mesh position={[-3.8, 0.018, -1.2]} material={yellowMaterial}>
        <boxGeometry args={[0.08, 0.025, 3.2]} />
      </mesh>
      <mesh position={[-3.8, 0.018, -7.6]} material={yellowMaterial}>
        <boxGeometry args={[0.08, 0.025, 3.2]} />
      </mesh>

      <mesh position={[0, 1.35, -34.78]} material={yellowMaterial}>
        <boxGeometry args={[13.5, 0.08, 0.04]} />
      </mesh>

      <mesh position={[10.78, 1.4, -7.4]} material={yellowMaterial}>
        <boxGeometry args={[0.04, 0.1, 4.7]} />
      </mesh>

      <mesh position={[8.35, 0.055, -7.8]} material={yellowMaterial}>
        <boxGeometry args={[3.35, 0.025, 0.08]} />
      </mesh>
      <mesh position={[8.35, 0.055, -20.4]} material={yellowMaterial}>
        <boxGeometry args={[3.35, 0.025, 0.08]} />
      </mesh>
    </group>
  )
}
