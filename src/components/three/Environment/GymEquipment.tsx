type Block = {
  position: [number, number, number]
  scale: [number, number, number]
}

const racks: Block[] = [
  { position: [-4.4, 1.3, -15], scale: [1.8, 2.6, 1.4] },
  { position: [4.3, 1.3, -16.5], scale: [1.8, 2.6, 1.4] },
  { position: [-3.8, 1.3, -21.8], scale: [1.8, 2.6, 1.4] },
  { position: [4.6, 1.3, -23], scale: [1.8, 2.6, 1.4] },
  { position: [-4.2, 1.3, -29.2], scale: [1.8, 2.6, 1.4] },
  { position: [3.9, 1.3, -31], scale: [1.8, 2.6, 1.4] },
]

const benches: Block[] = [
  { position: [-1.4, 0.4, -13.2], scale: [2.1, 0.35, 0.8] },
  { position: [1.8, 0.4, -18.6], scale: [2, 0.35, 0.8] },
  { position: [0.2, 0.4, -24.4], scale: [2.3, 0.35, 0.8] },
  { position: [-1.1, 0.4, -31.2], scale: [2.1, 0.35, 0.8] },
]

const machines: Block[] = [
  { position: [-0.8, 0.95, -10.8], scale: [1.2, 1.9, 1.1] },
  { position: [2.3, 1.02, -14.2], scale: [1.3, 2.05, 1.2] },
  { position: [-2.2, 1.06, -20], scale: [1.35, 2.1, 1.3] },
  { position: [1.5, 1.01, -27], scale: [1.2, 2, 1.15] },
  { position: [-2.3, 1.04, -34.4], scale: [1.35, 2.1, 1.35] },
]

function Rack({ position, scale }: Block) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={scale} />
        <meshStandardMaterial color="#1d1d1d" roughness={0.56} metalness={0.56} />
      </mesh>
      <mesh position={[0, scale[1] / 2 + 0.28, 0]}>
        <boxGeometry args={[scale[0] * 0.94, 0.12, scale[2] * 0.94]} />
        <meshStandardMaterial color="#f2c230" roughness={0.3} metalness={0.52} />
      </mesh>
    </group>
  )
}

export function GymEquipment() {
  return (
    <group>
      {racks.map((rack) => (
        <Rack key={rack.position.join('-')} {...rack} />
      ))}

      {benches.map((bench) => (
        <mesh key={bench.position.join('-')} position={bench.position}>
          <boxGeometry args={bench.scale} />
          <meshStandardMaterial color="#282828" roughness={0.94} metalness={0.07} />
        </mesh>
      ))}

      {machines.map((machine) => (
        <mesh key={machine.position.join('-')} position={machine.position}>
          <boxGeometry args={machine.scale} />
          <meshStandardMaterial color="#343434" roughness={0.48} metalness={0.44} />
        </mesh>
      ))}
    </group>
  )
}
