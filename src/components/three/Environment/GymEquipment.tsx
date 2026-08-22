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

function LowerBackExtensionBench({ position, rotation = [0, 0, 0] }: EquipmentBlock) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, -0.33, 0]}>
        <boxGeometry args={[1.75, 0.08, 0.18]} />
        <meshStandardMaterial color="#111111" roughness={0.52} metalness={0.58} />
      </mesh>
      {[-0.62, 0.62].map((x) => (
        <mesh key={x} position={[x, -0.56, 0]}>
          <boxGeometry args={[0.56, 0.08, 0.16]} />
          <meshStandardMaterial color="#111111" roughness={0.56} metalness={0.54} />
        </mesh>
      ))}
      <mesh position={[-0.58, -0.02, 0]} rotation={[0, 0, -0.58]}>
        <boxGeometry args={[1.35, 0.1, 0.12]} />
        <meshStandardMaterial color="#181818" roughness={0.42} metalness={0.66} />
      </mesh>
      <mesh position={[0.35, 0.26, 0]} rotation={[0, 0, -0.42]}>
        <boxGeometry args={[1.18, 0.18, 0.54]} />
        <meshStandardMaterial color="#252525" roughness={0.9} metalness={0.08} />
      </mesh>
      <mesh position={[-0.72, 0.38, 0.24]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.42, 18]} />
        <meshStandardMaterial color="#242424" roughness={0.82} metalness={0.12} />
      </mesh>
      <mesh position={[-0.72, 0.38, -0.24]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.42, 18]} />
        <meshStandardMaterial color="#242424" roughness={0.82} metalness={0.12} />
      </mesh>
      <mesh position={[0.95, 0.02, 0]}>
        <boxGeometry args={[0.12, 0.64, 0.12]} />
        <meshStandardMaterial color="#181818" roughness={0.42} metalness={0.66} />
      </mesh>
    </group>
  )
}

function LowPolyTreadmill({ position, rotation = [0, 0, 0] }: EquipmentBlock) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, -0.1, 0.18]}>
        <boxGeometry args={[1.18, 0.16, 2.55]} />
        <meshStandardMaterial color="#111111" roughness={0.76} metalness={0.18} />
      </mesh>
      <mesh position={[0, 0.0, 0.2]}>
        <boxGeometry args={[0.9, 0.06, 2.05]} />
        <meshStandardMaterial color="#050505" roughness={0.92} metalness={0.05} />
      </mesh>
      {[-0.54, 0.54].map((x) => (
        <mesh key={x} position={[x, 0.06, -0.58]}>
          <boxGeometry args={[0.08, 0.62, 0.08]} />
          <meshStandardMaterial color="#1c1c1c" roughness={0.42} metalness={0.7} />
        </mesh>
      ))}
      <mesh position={[0, 0.28, -0.86]}>
        <boxGeometry args={[1.02, 0.24, 0.24]} />
        <meshStandardMaterial color="#181818" roughness={0.5} metalness={0.58} />
      </mesh>
      <mesh position={[0, 0.3, -0.99]}>
        <boxGeometry args={[0.54, 0.12, 0.04]} />
        <meshStandardMaterial color="#2d2d2d" roughness={0.42} metalness={0.42} emissive="#080808" />
      </mesh>
      <mesh position={[0, -0.02, 1.44]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 1.04, 18]} />
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

function ArmPulldownMachine({ position, rotation = [0, 0, 0] }: EquipmentBlock) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, -1.02, 0]}>
        <boxGeometry args={[1.7, 0.14, 1.35]} />
        <meshStandardMaterial color="#101010" roughness={0.72} metalness={0.28} />
      </mesh>
      {[-0.66, 0.66].map((x) => (
        <mesh key={x} position={[x, 0, -0.48]}>
          <boxGeometry args={[0.1, 2.05, 0.1]} />
          <meshStandardMaterial color="#191919" roughness={0.42} metalness={0.72} />
        </mesh>
      ))}
      <mesh position={[0, 1.04, -0.48]}>
        <boxGeometry args={[1.46, 0.12, 0.12]} />
        <meshStandardMaterial color="#1f1f1f" roughness={0.42} metalness={0.72} />
      </mesh>
      <mesh position={[0, -0.26, 0.12]}>
        <boxGeometry args={[0.74, 0.2, 0.58]} />
        <meshStandardMaterial color="#242424" roughness={0.9} metalness={0.08} />
      </mesh>
      <mesh position={[0, 0.18, 0.38]} rotation={[0.38, 0, 0]}>
        <boxGeometry args={[0.74, 0.18, 0.74]} />
        <meshStandardMaterial color="#292929" roughness={0.88} metalness={0.08} />
      </mesh>
      <mesh position={[0.82, -0.15, -0.28]}>
        <boxGeometry args={[0.22, 1.42, 0.32]} />
        <meshStandardMaterial color="#171717" roughness={0.62} metalness={0.46} />
      </mesh>
      {[-0.38, 0.38].map((x) => (
        <mesh key={x} position={[x, 0.82, 0.12]} rotation={[0, 0, x < 0 ? -0.55 : 0.55]}>
          <boxGeometry args={[0.84, 0.08, 0.08]} />
          <meshStandardMaterial color="#202020" roughness={0.4} metalness={0.72} />
        </mesh>
      ))}
      <mesh position={[0, 0.64, 0.16]}>
        <boxGeometry args={[0.9, 0.06, 0.06]} />
        <meshStandardMaterial color="#2d2d2d" roughness={0.42} metalness={0.66} />
      </mesh>
    </group>
  )
}

function ExerciseBike({ position, rotation = [0, 0, 0] }: EquipmentBlock) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[1.75, 0.08, 0.18]} />
        <meshStandardMaterial color="#101010" roughness={0.5} metalness={0.62} />
      </mesh>
      <mesh position={[-0.55, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.34, 0.045, 8, 32]} />
        <meshStandardMaterial color="#141414" roughness={0.56} metalness={0.5} />
      </mesh>
      <mesh position={[0.58, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.24, 0.04, 8, 28]} />
        <meshStandardMaterial color="#141414" roughness={0.56} metalness={0.5} />
      </mesh>
      <mesh position={[0, -0.18, 0]} rotation={[0, 0, -0.5]}>
        <boxGeometry args={[1.15, 0.08, 0.08]} />
        <meshStandardMaterial color="#1d1d1d" roughness={0.42} metalness={0.72} />
      </mesh>
      <mesh position={[-0.18, 0.16, 0]}>
        <boxGeometry args={[0.08, 0.9, 0.08]} />
        <meshStandardMaterial color="#1d1d1d" roughness={0.42} metalness={0.72} />
      </mesh>
      <mesh position={[-0.28, 0.64, 0]}>
        <boxGeometry args={[0.62, 0.12, 0.34]} />
        <meshStandardMaterial color="#252525" roughness={0.88} metalness={0.08} />
      </mesh>
      <mesh position={[0.72, 0.28, 0]}>
        <boxGeometry args={[0.08, 0.86, 0.08]} />
        <meshStandardMaterial color="#1c1c1c" roughness={0.42} metalness={0.72} />
      </mesh>
      <mesh position={[0.72, 0.72, 0]}>
        <boxGeometry args={[0.82, 0.08, 0.08]} />
        <meshStandardMaterial color="#202020" roughness={0.38} metalness={0.72} />
      </mesh>
      <mesh position={[0.72, 0.56, -0.13]}>
        <boxGeometry args={[0.34, 0.18, 0.04]} />
        <meshStandardMaterial color="#2d2d2d" roughness={0.42} metalness={0.42} emissive="#080808" />
      </mesh>
    </group>
  )
}

function LegPressMachine({ position, rotation = [0, 0, 0] }: EquipmentBlock) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, -0.58, 0]}>
        <boxGeometry args={[1.75, 0.12, 1.75]} />
        <meshStandardMaterial color="#101010" roughness={0.72} metalness={0.22} />
      </mesh>

      {[-0.55, 0.55].map((x) => (
        <mesh key={x} position={[x, -0.28, -0.08]} rotation={[0.46, 0, 0]}>
          <boxGeometry args={[0.1, 0.1, 1.95]} />
          <meshStandardMaterial color="#1c1c1c" roughness={0.4} metalness={0.72} />
        </mesh>
      ))}

      <mesh position={[0, -0.18, 0.48]} rotation={[-0.42, 0, 0]}>
        <boxGeometry args={[0.88, 0.2, 0.72]} />
        <meshStandardMaterial color="#262626" roughness={0.9} metalness={0.08} />
      </mesh>
      <mesh position={[0, 0.28, 0.18]} rotation={[-0.68, 0, 0]}>
        <boxGeometry args={[0.92, 0.2, 0.86]} />
        <meshStandardMaterial color="#2d2d2d" roughness={0.88} metalness={0.08} />
      </mesh>

      <mesh position={[0, 0.58, -0.86]} rotation={[0.42, 0, 0]}>
        <boxGeometry args={[1.28, 0.18, 0.84]} />
        <meshStandardMaterial color="#202020" roughness={0.52} metalness={0.6} />
      </mesh>

      <mesh position={[0, 0.25, -1.12]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.055, 0.055, 1.42, 16]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.36} metalness={0.74} />
      </mesh>

      {[-0.82, 0.82].map((x) => (
        <group key={x} position={[x, 0.25, -1.12]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh>
            <cylinderGeometry args={[0.26, 0.26, 0.12, 22]} />
            <meshStandardMaterial color="#121212" roughness={0.66} metalness={0.34} />
          </mesh>
          <mesh position={[0, 0.12, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 0.08, 22]} />
            <meshStandardMaterial color="#222222" roughness={0.5} metalness={0.56} />
          </mesh>
        </group>
      ))}

      {[-0.72, 0.72].map((x) => (
        <mesh key={x} position={[x, -0.24, 0.62]}>
          <boxGeometry args={[0.1, 0.68, 0.1]} />
          <meshStandardMaterial color="#181818" roughness={0.42} metalness={0.68} />
        </mesh>
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

export function GymEquipment() {
  const { equipment } = gymLayout

  return (
    <group>
      {equipment.benches.map((bench) => (
        <Bench key={bench.id} {...bench} />
      ))}

      {equipment.lowerBackBenches.map((bench) => (
        <LowerBackExtensionBench key={bench.id} {...bench} />
      ))}

      {equipment.treadmills.map((treadmill) => (
        <LowPolyTreadmill key={treadmill.id} {...treadmill} />
      ))}

      {equipment.dumbbellRacks.map((rack) => (
        <DumbbellRack key={rack.id} {...rack} />
      ))}

      {equipment.pulldownMachines.map((machine) => (
        <ArmPulldownMachine key={machine.id} {...machine} />
      ))}

      {equipment.exerciseBikes.map((bike) => (
        <ExerciseBike key={bike.id} {...bike} />
      ))}

      {equipment.legPressMachines.map((machine) => (
        <LegPressMachine key={machine.id} {...machine} />
      ))}

      {equipment.freeDumbbells.map((dumbbell) => (
        <FreeDumbbellPair key={dumbbell.id} {...dumbbell} />
      ))}
    </group>
  )
}
