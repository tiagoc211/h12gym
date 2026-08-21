import type { EquipmentBlock } from '../../../config/gymLayout'
import { gymLayout } from '../../../config/gymLayout'

function Rack({ position, rotation = [0, 0, 0] }: EquipmentBlock) {
  return (
    <group position={position} rotation={rotation}>
      {[
        [-0.82, 0, -0.58],
        [0.82, 0, -0.58],
        [-0.82, 0, 0.58],
        [0.82, 0, 0.58],
      ].map(([x, y, z]) => (
        <mesh key={`${x}-${z}`} position={[x, y, z]}>
          <boxGeometry args={[0.12, 2.35, 0.12]} />
          <meshStandardMaterial color="#1d1d1d" roughness={0.5} metalness={0.62} />
        </mesh>
      ))}

      <mesh position={[0, 1.12, -0.58]}>
        <boxGeometry args={[1.78, 0.12, 0.12]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.44} metalness={0.64} />
      </mesh>
      <mesh position={[0, 1.12, 0.58]}>
        <boxGeometry args={[1.78, 0.12, 0.12]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.44} metalness={0.64} />
      </mesh>
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[2.1, 0.1, 1.55]} />
        <meshStandardMaterial color="#111111" roughness={0.9} metalness={0.12} />
      </mesh>
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[1.95, 0.08, 0.08]} />
        <meshStandardMaterial color="#f2c230" roughness={0.3} metalness={0.52} />
      </mesh>
    </group>
  )
}

function Bench({ position, rotation = [0, 0, 0] }: EquipmentBlock) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[1.9, 0.12, 0.42]} />
        <meshStandardMaterial color="#262626" roughness={0.94} metalness={0.06} />
      </mesh>
      <mesh position={[0.45, 0.32, 0]}>
        <boxGeometry args={[1.05, 0.18, 0.48]} />
        <meshStandardMaterial color="#303030" roughness={0.88} metalness={0.08} />
      </mesh>
      <mesh position={[-0.58, 0.55, 0]} rotation={[0, 0, -0.52]}>
        <boxGeometry args={[1.1, 0.18, 0.48]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.9} metalness={0.08} />
      </mesh>
      <mesh position={[0, -0.08, 0]}>
        <boxGeometry args={[1.42, 0.08, 0.1]} />
        <meshStandardMaterial color="#171717" roughness={0.55} metalness={0.55} />
      </mesh>
    </group>
  )
}

function MachineBlock({ position, rotation = [0, 0, 0] }: EquipmentBlock) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[1.45, 0.16, 1.2]} />
        <meshStandardMaterial color="#161616" roughness={0.86} metalness={0.12} />
      </mesh>
      <mesh position={[0, 0.94, -0.44]}>
        <boxGeometry args={[1.28, 1.75, 0.18]} />
        <meshStandardMaterial color="#303030" roughness={0.48} metalness={0.46} />
      </mesh>
      <mesh position={[0, 0.52, 0.12]}>
        <boxGeometry args={[0.76, 0.24, 0.7]} />
        <meshStandardMaterial color="#242424" roughness={0.88} metalness={0.08} />
      </mesh>
      <mesh position={[0, 1.72, -0.44]}>
        <boxGeometry args={[1.44, 0.12, 0.22]} />
        <meshStandardMaterial color="#f2c230" roughness={0.34} metalness={0.48} />
      </mesh>
    </group>
  )
}

function DumbbellRun() {
  return (
    <group position={[8.7, 0.46, 4.2]} rotation={[0, -0.04, 0]}>
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.32, 0.28, 6.8]} />
        <meshStandardMaterial color="#191919" roughness={0.58} metalness={0.5} />
      </mesh>
      {[-3, -2.15, -1.3, -0.45, 0.4, 1.25, 2.1, 2.95].map((z) => (
        <group key={z} position={[0, 0.34, z]}>
          <mesh position={[-0.2, 0, 0]}>
            <boxGeometry args={[0.22, 0.22, 0.42]} />
            <meshStandardMaterial color="#2b2b2b" roughness={0.44} metalness={0.58} />
          </mesh>
          <mesh position={[0.2, 0, 0]}>
            <boxGeometry args={[0.22, 0.22, 0.42]} />
            <meshStandardMaterial color="#2b2b2b" roughness={0.44} metalness={0.58} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

export function GymEquipment() {
  const { equipment } = gymLayout

  return (
    <group>
      {equipment.racks.map((rack) => (
        <Rack key={rack.id} {...rack} />
      ))}

      {equipment.benches.map((bench) => (
        <Bench key={bench.id} {...bench} />
      ))}

      {equipment.machines.map((machine) => (
        <MachineBlock key={machine.id} {...machine} />
      ))}

      <DumbbellRun />
    </group>
  )
}
