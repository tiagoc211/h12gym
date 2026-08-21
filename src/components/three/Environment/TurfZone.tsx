import { gymLayout } from '../../../config/gymLayout'

export function TurfZone() {
  return (
    <group>
      <mesh position={gymLayout.turf.position}>
        <boxGeometry args={gymLayout.turf.size} />
        <meshStandardMaterial color="#183f2b" roughness={0.98} metalness={0.02} />
      </mesh>

      {[-6, -3, 0, 3, 6].map((x) => (
        <mesh key={x} position={[x - 0.8, 0.08, gymLayout.turf.position[2]]}>
          <boxGeometry args={[0.045, 0.018, gymLayout.turf.size[2] * 0.92]} />
          <meshStandardMaterial color="#2f6b46" roughness={0.95} metalness={0.02} />
        </mesh>
      ))}

      <mesh position={[gymLayout.turf.position[0], 0.085, gymLayout.turf.position[2] - 1.23]}>
        <boxGeometry args={[gymLayout.turf.size[0], 0.025, 0.045]} />
        <meshStandardMaterial color="#d7d7d7" roughness={0.85} metalness={0.04} />
      </mesh>
      <mesh position={[gymLayout.turf.position[0], 0.085, gymLayout.turf.position[2] + 1.23]}>
        <boxGeometry args={[gymLayout.turf.size[0], 0.025, 0.045]} />
        <meshStandardMaterial color="#d7d7d7" roughness={0.85} metalness={0.04} />
      </mesh>
    </group>
  )
}
