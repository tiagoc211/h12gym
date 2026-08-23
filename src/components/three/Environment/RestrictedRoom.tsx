import { MeshPhysicalMaterial } from 'three'
import { gymLayout } from '../../../config/gymLayout'

const roomGlassMaterial = new MeshPhysicalMaterial({
  color: '#8b9298',
  emissive: '#25292d',
  emissiveIntensity: 0.16,
  transparent: true,
  opacity: 0.38,
  transmission: 0.58,
  thickness: 0.08,
  ior: 1.45,
  roughness: 0.16,
  metalness: 0.04,
  depthWrite: false,
})

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

      <mesh position={[size[0] / 2 + 0.035, -0.5, 0]} material={roomGlassMaterial}>
        <boxGeometry args={[0.04, 1.9, size[2] * 0.72]} />
      </mesh>
    </group>
  )
}
