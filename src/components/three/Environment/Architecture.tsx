import { SignPanel } from './SignPanel'
import { gymLayout } from '../../../config/gymLayout'
import { ArchitecturalShaders } from './ArchitecturalShaders'
import { Ceiling } from './Ceiling'
import { RestrictedRoom } from './RestrictedRoom'
import { TurfZone } from './TurfZone'

const pillarZ = [5, -2, -9, -16, -23, -30] as const
const foregroundBars = [
  [-8.25, 1.65, 5.25],
  [-6.7, 1.5, 1.8],
  [-4.85, 1.4, -6.2],
] as const

export function Architecture() {
  const { shell } = gymLayout

  return (
    <group>
      <mesh position={[shell.center[0], -0.035, shell.center[2]]}>
        <boxGeometry args={[shell.width, 0.07, shell.length]} />
        <meshStandardMaterial color="#080808" roughness={0.95} metalness={0.04} />
      </mesh>

      <TurfZone />

      <mesh position={[0, 2.3, 13]}>
        <boxGeometry args={[shell.width, shell.wallHeight, 0.34]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.88} metalness={0.12} />
      </mesh>

      <mesh position={[0, 2.3, -35]}>
        <boxGeometry args={[shell.width, shell.wallHeight, 0.34]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.88} metalness={0.12} />
      </mesh>

      <mesh position={[11, 2.3, -11]}>
        <boxGeometry args={[0.34, shell.wallHeight, shell.length]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.88} metalness={0.12} />
      </mesh>

      <mesh position={[-11, 2.3, -14.75]}>
        <boxGeometry args={[0.34, shell.wallHeight, 40.5]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.88} metalness={0.12} />
      </mesh>

      <mesh position={[-11, 2.3, 11.75]}>
        <boxGeometry args={[0.34, shell.wallHeight, 2.5]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.88} metalness={0.12} />
      </mesh>

      <group position={[-11.2, 2.25, 8]}>
        <mesh position={[0, 0, -2.55]}>
          <boxGeometry args={[0.42, 4.5, 0.22]} />
          <meshStandardMaterial color="#202020" roughness={0.52} metalness={0.42} />
        </mesh>
        <mesh position={[0, 0, 2.55]}>
          <boxGeometry args={[0.42, 4.5, 0.22]} />
          <meshStandardMaterial color="#202020" roughness={0.52} metalness={0.42} />
        </mesh>
        <mesh position={[0, 2.25, 0]}>
          <boxGeometry args={[0.42, 0.22, 5.25]} />
          <meshStandardMaterial color="#202020" roughness={0.52} metalness={0.42} />
        </mesh>
      </group>

      <mesh position={[-13.8, -0.04, 8]}>
        <boxGeometry args={[5.4, 0.06, 7.2]} />
        <meshStandardMaterial color="#060606" roughness={0.96} metalness={0.02} />
      </mesh>

      <RestrictedRoom />
      <Ceiling />
      <ArchitecturalShaders />

      {pillarZ.map((z) => (
        <group key={z}>
          <mesh position={[-8.8, 2.25, z]}>
            <boxGeometry args={[0.42, 4.5, 0.42]} />
            <meshStandardMaterial color="#1b1b1b" roughness={0.72} metalness={0.4} />
          </mesh>
          <mesh position={[8.8, 2.25, z]}>
            <boxGeometry args={[0.42, 4.5, 0.42]} />
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

      <mesh position={[10.78, 2.1, -2.2]}>
        <boxGeometry args={[0.04, 1.9, 5.8]} />
        <meshStandardMaterial color="#151515" roughness={0.38} metalness={0.78} />
      </mesh>

      <mesh position={[10.78, 2.1, -24.2]}>
        <boxGeometry args={[0.04, 1.9, 6.8]} />
        <meshStandardMaterial color="#151515" roughness={0.38} metalness={0.78} />
      </mesh>

      <group position={[-10.72, 2.55, 8]} rotation={[0, Math.PI / 2, 0]}>
        <SignPanel primary="H12" secondary="MESSINES" width={4.2} />
      </group>

      <group position={[10.72, 2.55, -7.4]} rotation={[0, -Math.PI / 2, 0]}>
        <SignPanel primary="H12" secondary="MOVE WITH PURPOSE." width={5.1} />
      </group>
    </group>
  )
}
