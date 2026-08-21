type Block = {
  position: [number, number, number]
  scale: [number, number, number]
  color: string
}

const machines: Block[] = [
  { position: [-3.6, 1.1, 0], scale: [1.3, 2.2, 1.6], color: '#2a2a2a' },
  { position: [3.2, 1.2, -3.8], scale: [1.6, 2.4, 1.8], color: '#323232' },
  { position: [-2.3, 0.9, -8.2], scale: [2.2, 1.8, 1.4], color: '#3a3a3a' },
  { position: [2.8, 1.1, -13], scale: [1.4, 2, 1.4], color: '#303030' },
  { position: [-4, 1.1, -18], scale: [1.2, 2.2, 1.5], color: '#343434' },
  { position: [3.6, 0.95, -23], scale: [2.4, 1.9, 1.5], color: '#2f2f2f' },
  { position: [-1.2, 1, -28], scale: [1.7, 2, 1.7], color: '#383838' },
  { position: [2.5, 1.15, -34], scale: [1.3, 2.3, 1.4], color: '#2f2f2f' },
  { position: [-3.4, 0.85, -40], scale: [2.6, 1.7, 1.5], color: '#363636' },
  { position: [1.8, 1.1, -47], scale: [1.6, 2.2, 1.6], color: '#2d2d2d' },
  { position: [0.3, 0.4, -54], scale: [4.6, 0.8, 1.4], color: '#5f4f1a' },
]

const rackRows: [number, number, number][] = [
  [-5.8, 1.7, -6],
  [5.8, 1.7, -6],
  [-5.8, 1.7, -16],
  [5.8, 1.7, -16],
  [-5.8, 1.7, -26],
  [5.8, 1.7, -26],
  [-5.8, 1.7, -36],
  [5.8, 1.7, -36],
  [-5.8, 1.7, -46],
  [5.8, 1.7, -46],
]

export function PlaceholderGym() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -24]}>
        <planeGeometry args={[22, 130]} />
        <meshStandardMaterial color="#0f0f0f" />
      </mesh>

      <mesh position={[0, 3.8, -24]}>
        <boxGeometry args={[22, 0.3, 130]} />
        <meshStandardMaterial color="#121212" />
      </mesh>

      <mesh position={[-11, 2, -24]}>
        <boxGeometry args={[0.5, 4, 130]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      <mesh position={[11, 2, -24]}>
        <boxGeometry args={[0.5, 4, 130]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {rackRows.map((position) => (
        <mesh key={position.join('-')} position={position}>
          <boxGeometry args={[0.25, 3.4, 0.25]} />
          <meshStandardMaterial color="#707070" />
        </mesh>
      ))}

      {machines.map((machine) => (
        <mesh key={machine.position.join('-')} position={machine.position}>
          <boxGeometry args={machine.scale} />
          <meshStandardMaterial color={machine.color} />
        </mesh>
      ))}
    </group>
  )
}