import { SignPanel } from './SignPanel'

const pillarZ = [-2, -8, -14, -20, -26, -32, -38] as const
const foregroundBars = [
  [-1.28, 1.7, 7.4],
  [1.36, 1.45, 6.6],
  [-0.95, 1.25, 5.8],
] as const

export function Architecture() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -20]}>
        <planeGeometry args={[20, 130]} />
        <meshStandardMaterial color="#090909" roughness={0.92} metalness={0.06} />
      </mesh>

      <mesh position={[0, 4.4, -20]}>
        <boxGeometry args={[20, 0.36, 130]} />
        <meshStandardMaterial color="#111111" roughness={0.86} metalness={0.14} />
      </mesh>

      <mesh position={[-10, 2.2, -20]}>
        <boxGeometry args={[0.42, 4.4, 130]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.88} metalness={0.12} />
      </mesh>

      <mesh position={[10, 2.2, -20]}>
        <boxGeometry args={[0.42, 4.4, 130]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.88} metalness={0.12} />
      </mesh>

      <mesh position={[0, 2.15, -5.6]}>
        <boxGeometry args={[8.2, 4.2, 0.5]} />
        <meshStandardMaterial color="#141414" roughness={0.82} metalness={0.2} />
      </mesh>

      <mesh position={[0, 2.15, -8.2]}>
        <boxGeometry args={[6.1, 4.2, 0.5]} />
        <meshStandardMaterial color="#171717" roughness={0.8} metalness={0.24} />
      </mesh>

      <mesh position={[-3.05, 2.15, -6.9]}>
        <boxGeometry args={[0.5, 4.2, 3.4]} />
        <meshStandardMaterial color="#171717" roughness={0.81} metalness={0.22} />
      </mesh>

      <mesh position={[3.05, 2.15, -6.9]}>
        <boxGeometry args={[0.5, 4.2, 3.4]} />
        <meshStandardMaterial color="#171717" roughness={0.81} metalness={0.22} />
      </mesh>

      {pillarZ.map((z) => (
        <group key={z}>
          <mesh position={[-7.2, 2.2, z]}>
            <boxGeometry args={[0.48, 4.4, 0.48]} />
            <meshStandardMaterial color="#1b1b1b" roughness={0.72} metalness={0.4} />
          </mesh>
          <mesh position={[7.2, 2.2, z]}>
            <boxGeometry args={[0.48, 4.4, 0.48]} />
            <meshStandardMaterial color="#1b1b1b" roughness={0.72} metalness={0.4} />
          </mesh>
        </group>
      ))}

      {foregroundBars.map((position) => (
        <mesh key={position.join('-')} position={position}>
          <cylinderGeometry args={[0.055, 0.055, 2.8, 18]} />
          <meshStandardMaterial color="#747474" roughness={0.32} metalness={0.88} />
        </mesh>
      ))}

      <group position={[-5.4, 2.75, -18.5]} rotation={[0, Math.PI / 2.8, 0]}>
        <SignPanel primary="H12" secondary="TRAIN BEYOND." width={4.4} />
      </group>

      <group position={[5.6, 2.45, -24.8]} rotation={[0, -Math.PI / 2.4, 0]}>
        <SignPanel primary="NO EXCUSES" secondary="STRENGTH AREA" width={4.9} />
      </group>
    </group>
  )
}
