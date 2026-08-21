import { Environment, Lightformer } from '@react-three/drei'

const stripZ = [-1.2, -7, -12.8, -18.6, -24.4, -30.2, -36] as const

export function GymLights() {
  return (
    <group>
      <Environment resolution={64}>
        <Lightformer
          form="rect"
          intensity={1.8}
          color="#ffffff"
          position={[0, 6, -14]}
          scale={[16, 1.1, 1]}
        />
        <Lightformer
          form="rect"
          intensity={1.1}
          color="#f2c230"
          position={[-8, 2.8, -22]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[12, 1, 1]}
        />
        <Lightformer
          form="rect"
          intensity={0.9}
          color="#ffffff"
          position={[8.2, 2.6, -29]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[10, 1, 1]}
        />
      </Environment>

      <pointLight position={[0, 3.2, -12]} intensity={3.2} color="#ffffff" distance={17} />
      <pointLight position={[0.8, 3.4, -23]} intensity={4} color="#f2c230" distance={15} />
      <pointLight position={[1.8, 3.4, -31]} intensity={2.7} color="#ffffff" distance={14} />

      {stripZ.map((z) => (
        <group key={z}>
          <mesh position={[0, 4.08, z]}>
            <boxGeometry args={[5.4, 0.08, 0.5]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={1.6}
              roughness={0.15}
              metalness={0.25}
            />
          </mesh>
          <pointLight
            position={[0, 3.95, z]}
            color="#dfe8ff"
            intensity={1.4}
            distance={9}
            decay={2}
          />
        </group>
      ))}
    </group>
  )
}
