import { gymLayout } from '../../../config/gymLayout'

const beamZ = [10, 4, -2, -8, -14, -20, -26, -32] as const

export function Ceiling() {
  const { shell } = gymLayout

  return (
    <group>
      <mesh position={[shell.center[0], shell.ceilingY, shell.center[2]]}>
        <boxGeometry args={[shell.width, 0.26, shell.length]} />
        <meshStandardMaterial color="#0d0d0d" roughness={0.88} metalness={0.12} />
      </mesh>

      {beamZ.map((z) => (
        <mesh key={z} position={[0, shell.ceilingY - 0.26, z]}>
          <boxGeometry args={[shell.width * 0.92, 0.16, 0.22]} />
          <meshStandardMaterial color="#1b1b1b" roughness={0.7} metalness={0.42} />
        </mesh>
      ))}

      {[-6.2, 0, 6.2].map((x) => (
        <mesh key={x} position={[x, shell.ceilingY - 0.3, shell.center[2]]}>
          <boxGeometry args={[0.16, 0.14, shell.length * 0.92]} />
          <meshStandardMaterial color="#151515" roughness={0.72} metalness={0.38} />
        </mesh>
      ))}
    </group>
  )
}
