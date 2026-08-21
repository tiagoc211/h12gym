import { gymLayout } from '../../../config/gymLayout'

export function RestrictedRoom() {
  const { position, size } = gymLayout.restrictedRoom

  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={size} />
        <meshStandardMaterial color="#101010" roughness={0.9} metalness={0.12} />
      </mesh>

      <mesh position={[0, size[1] / 2 + 0.012, 0]}>
        <boxGeometry args={[size[0] + 0.12, 0.035, size[2] + 0.12]} />
        <meshStandardMaterial color="#070707" roughness={0.94} metalness={0.05} />
      </mesh>

      <mesh position={[-size[0] / 2 - 0.035, 0.15, 0]}>
        <boxGeometry args={[0.07, 0.3, size[2] + 0.16]} />
        <meshStandardMaterial color="#181818" roughness={0.58} metalness={0.32} />
      </mesh>
    </group>
  )
}
