import { gymLayout } from '../../../config/gymLayout'

export function TurfZone() {
  const { position, size } = gymLayout.turf

  return (
    <group>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color="#183f2b" roughness={0.98} metalness={0.02} />
      </mesh>

      {[-0.48, 0, 0.48].map((x) => (
        <mesh key={x} position={[position[0] + x, 0.08, position[2]]}>
          <boxGeometry args={[0.035, 0.018, size[2] * 0.94]} />
          <meshStandardMaterial color="#2f6b46" roughness={0.95} metalness={0.02} />
        </mesh>
      ))}

      <mesh position={[position[0] - size[0] / 2, 0.085, position[2]]}>
        <boxGeometry args={[0.045, 0.025, size[2]]} />
        <meshStandardMaterial color="#d7d7d7" roughness={0.85} metalness={0.04} />
      </mesh>
      <mesh position={[position[0] + size[0] / 2, 0.085, position[2]]}>
        <boxGeometry args={[0.045, 0.025, size[2]]} />
        <meshStandardMaterial color="#d7d7d7" roughness={0.85} metalness={0.04} />
      </mesh>
    </group>
  )
}
