import { Environment, Lightformer } from '@react-three/drei'

const stripZ = [7.5, 1.4, -4.7, -10.8, -16.9, -23, -29.1] as const

export function GymLights() {
  return (
    <group>
      <hemisphereLight intensity={0.28} color="#dbe6ff" groundColor="#050505" />

      <Environment resolution={64}>
        <Lightformer
          form="rect"
          intensity={1.8}
          color="#ffffff"
          position={[0, 5.1, -7]}
          scale={[16, 0.8, 1]}
        />
        <Lightformer
          form="rect"
          intensity={1.65}
          color="#d9e8ff"
          position={[-10.7, 3.55, -12]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[32, 1.2, 1]}
        />
        <Lightformer
          form="rect"
          intensity={0.9}
          color="#ffffff"
          position={[10.5, 2.7, -18]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[12, 0.85, 1]}
        />
      </Environment>

      <pointLight position={[-7.8, 3.2, 6.8]} intensity={2.75} color="#f2c230" distance={10} />
      <pointLight position={[0, 3.6, -5]} intensity={2.7} color="#ffffff" distance={17} />
      <pointLight position={[-4.8, 3.45, -22]} intensity={2.65} color="#ffffff" distance={16} />
      <pointLight position={[-9.6, 3.55, -2.5]} intensity={1.45} color="#d9e8ff" distance={8.5} />
      <pointLight position={[-9.6, 3.55, -13.5]} intensity={1.65} color="#d9e8ff" distance={9.5} />
      <pointLight position={[-9.6, 3.55, -24.5]} intensity={1.45} color="#d9e8ff" distance={8.5} />

      {stripZ.map((z) => (
        <group key={z}>
          <mesh position={[-4.2, 4.18, z]}>
            <boxGeometry args={[5.6, 0.08, 0.38]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={1.38}
              roughness={0.15}
              metalness={0.25}
            />
          </mesh>
          <mesh position={[4.2, 4.18, z]}>
            <boxGeometry args={[5.6, 0.08, 0.38]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={1.28}
              roughness={0.15}
              metalness={0.25}
            />
          </mesh>
          <pointLight
            position={[-4.2, 3.9, z]}
            color="#dfe8ff"
            intensity={1.05}
            distance={8}
            decay={2}
          />
          <pointLight
            position={[4.2, 3.9, z]}
            color="#dfe8ff"
            intensity={0.95}
            distance={8}
            decay={2}
          />
        </group>
      ))}
    </group>
  )
}
