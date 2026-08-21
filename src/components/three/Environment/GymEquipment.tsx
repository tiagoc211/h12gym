import type { EquipmentBlock, Vec3 } from '../../../config/gymLayout'
import { gymLayout } from '../../../config/gymLayout'

const plateOffsets = [-0.34, 0.34] as const
const rackDumbbellPositions = [-1.85, -1.32, -0.79, -0.26, 0.27, 0.8, 1.33, 1.86] as const

function CompactDumbbell({
  position,
  rotation = [0, 0, 0],
  scale = 1,
}: EquipmentBlock & { scale?: number }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.045, 0.045, 0.54, 16]} />
        <meshStandardMaterial color="#222222" roughness={0.42} metalness={0.72} />
      </mesh>

      {plateOffsets.map((x) => (
        <group key={x} position={[x, 0, 0]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.16, 0.16, 0.13, 20]} />
            <meshStandardMaterial color="#111111" roughness={0.72} metalness={0.35} />
          </mesh>
          <mesh position={[x > 0 ? 0.08 : -0.08, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.125, 0.125, 0.08, 20]} />
            <meshStandardMaterial color="#262626" roughness={0.54} metalness={0.58} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

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
        <boxGeometry args={[2.05, 0.1, 0.52]} />
        <meshStandardMaterial color="#131313" roughness={0.58} metalness={0.54} />
      </mesh>
      <mesh position={[0.48, 0.32, 0]}>
        <boxGeometry args={[1.05, 0.16, 0.44]} />
        <meshStandardMaterial color="#242424" roughness={0.88} metalness={0.08} />
      </mesh>
      <mesh position={[-0.58, 0.55, 0]} rotation={[0, 0, -0.52]}>
        <boxGeometry args={[1.16, 0.16, 0.44]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.9} metalness={0.08} />
      </mesh>
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[1.52, 0.07, 0.1]} />
        <meshStandardMaterial color="#171717" roughness={0.55} metalness={0.55} />
      </mesh>
      {[-0.62, 0.62].map((x) => (
        <mesh key={x} position={[x, -0.28, 0]}>
          <boxGeometry args={[0.1, 0.42, 0.1]} />
          <meshStandardMaterial color="#151515" roughness={0.45} metalness={0.66} />
        </mesh>
      ))}
      {[-0.88, 0.82].map((x) => (
        <mesh key={x} position={[x, -0.5, 0]}>
          <boxGeometry args={[0.62, 0.08, 0.16]} />
          <meshStandardMaterial color="#101010" roughness={0.5} metalness={0.62} />
        </mesh>
      ))}
      <mesh position={[-1.15, 0.45, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.56, 20]} />
        <meshStandardMaterial color="#1e1e1e" roughness={0.7} metalness={0.22} />
      </mesh>
    </group>
  )
}

function Treadmill({ position, rotation = [0, 0, 0] }: EquipmentBlock) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, -0.43, 0.18]}>
        <boxGeometry args={[1.22, 0.16, 2.65]} />
        <meshStandardMaterial color="#111111" roughness={0.78} metalness={0.16} />
      </mesh>
      <mesh position={[0, -0.32, 0.18]}>
        <boxGeometry args={[0.92, 0.07, 2.18]} />
        <meshStandardMaterial color="#050505" roughness={0.92} metalness={0.05} />
      </mesh>
      {[-0.62, 0.62].map((x) => (
        <mesh key={x} position={[x, -0.22, -0.08]}>
          <boxGeometry args={[0.08, 0.1, 2.35]} />
          <meshStandardMaterial color="#232323" roughness={0.4} metalness={0.68} />
        </mesh>
      ))}
      {[-0.42, 0.42].map((x) => (
        <mesh key={x} position={[x, 0.42, -1.02]} rotation={[0.18, 0, 0]}>
          <boxGeometry args={[0.08, 1.58, 0.08]} />
          <meshStandardMaterial color="#1c1c1c" roughness={0.4} metalness={0.74} />
        </mesh>
      ))}
      <mesh position={[0, 1.14, -1.2]} rotation={[-0.18, 0, 0]}>
        <boxGeometry args={[1.1, 0.38, 0.18]} />
        <meshStandardMaterial color="#181818" roughness={0.48} metalness={0.62} />
      </mesh>
      <mesh position={[0, 1.18, -1.3]} rotation={[-0.18, 0, 0]}>
        <boxGeometry args={[0.58, 0.2, 0.03]} />
        <meshStandardMaterial color="#f2c230" roughness={0.34} metalness={0.32} emissive="#2d2407" />
      </mesh>
      <mesh position={[0, -0.24, 1.48]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 1.08, 22]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.5} metalness={0.5} />
      </mesh>
    </group>
  )
}

function DumbbellRack({ position, rotation = [0, 0, 0] }: EquipmentBlock) {
  return (
    <group position={position} rotation={rotation}>
      {[0.1, 0.54].map((y) => (
        <group key={y} position={[0, y, 0]}>
          <mesh position={[-0.27, 0, 0]}>
            <boxGeometry args={[0.09, 0.1, 4.45]} />
            <meshStandardMaterial color="#181818" roughness={0.44} metalness={0.7} />
          </mesh>
          <mesh position={[0.27, 0, 0]}>
            <boxGeometry args={[0.09, 0.1, 4.45]} />
            <meshStandardMaterial color="#181818" roughness={0.44} metalness={0.7} />
          </mesh>
        </group>
      ))}

      {[-1.95, 1.95].map((z) => (
        <mesh key={z} position={[0, -0.08, z]}>
          <boxGeometry args={[0.78, 0.82, 0.08]} />
          <meshStandardMaterial color="#121212" roughness={0.46} metalness={0.68} />
        </mesh>
      ))}

      {rackDumbbellPositions.map((z, index) => (
        <CompactDumbbell
          key={z}
          position={[(index % 2 === 0 ? -0.23 : 0.23) as number, 0.33 + (index % 2) * 0.42, z] as Vec3}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.72 + index * 0.025}
          id={`rack-dumbbell-${z}`}
        />
      ))}
    </group>
  )
}

function FreeDumbbellPair({ position, rotation = [0, 0, 0] }: EquipmentBlock) {
  return (
    <group position={position} rotation={rotation}>
      <CompactDumbbell id="left-free-dumbbell" position={[-0.22, 0, 0] as Vec3} rotation={[0, 0.12, 0]} scale={0.78} />
      <CompactDumbbell id="right-free-dumbbell" position={[0.28, 0, 0.28] as Vec3} rotation={[0, -0.2, 0]} scale={0.78} />
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

      {equipment.treadmills.map((treadmill) => (
        <Treadmill key={treadmill.id} {...treadmill} />
      ))}

      {equipment.dumbbellRacks.map((rack) => (
        <DumbbellRack key={rack.id} {...rack} />
      ))}

      {equipment.freeDumbbells.map((dumbbell) => (
        <FreeDumbbellPair key={dumbbell.id} {...dumbbell} />
      ))}

      {equipment.machines.map((machine) => (
        <MachineBlock key={machine.id} {...machine} />
      ))}
    </group>
  )
}
