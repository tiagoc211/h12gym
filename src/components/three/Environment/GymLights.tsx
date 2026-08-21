import { Environment, Lightformer } from '@react-three/drei'

const stripZ = [7.5, 1.4, -4.7, -10.8, -16.9, -23, -29.1] as const

export function GymLights() {
  return (
    <group>
      <Environment resolution={64}>
        <Lightformer
          form="rect"
          intensity={1.35}
          color="#ffffff"
          position={[0, 5.1, -7]}
          scale={[16, 0.8, 1]}
        />
        <Lightformer
          form="rect"
          intensity={0.75}
          color="#f2c230"
          position={[-10.5, 2.8, 7.2]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[7, 0.85, 1]}
        />
        <Lightformer
          form="rect"
          intensity={0.75}
          color="#ffffff"
          position={[10.5, 2.7, -18]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[12, 0.85, 1]}
        />
      </Environment>

      <pointLight position={[-7.8, 3.2, 6.8]} intensity={2.4} color="#f2c230" distance={9} />
      <pointLight position={[0, 3.6, -5]} intensity={2.2} color="#ffffff" distance={16} />
      <pointLight position={[-4.8, 3.45, -22]} intensity={2.1} color="#ffffff" distance={15} />

      {stripZ.map((z) => (
        <group key={z}>
          <mesh position={[-4.2, 4.18, z]}>
            <boxGeometry args={[5.6, 0.08, 0.38]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={1.15}
              roughness={0.15}
              metalness={0.25}
            />
          </mesh>
          <mesh position={[4.2, 4.18, z]}>
            <boxGeometry args={[5.6, 0.08, 0.38]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={1.05}
              roughness={0.15}
              metalness={0.25}
            />
          </mesh>
          <pointLight
            position={[-4.2, 3.9, z]}
            color="#dfe8ff"
            intensity={0.85}
            distance={7}
            decay={2}
          />
          <pointLight
            position={[4.2, 3.9, z]}
            color="#dfe8ff"
            intensity={0.78}
            distance={7}
            decay={2}
          />
        </group>
      ))}
    </group>
  )
}
