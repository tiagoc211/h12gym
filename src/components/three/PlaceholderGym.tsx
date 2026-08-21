export function PlaceholderGym() {
  return (
    <group>
      {/* chão */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, -10]}
      >
        <planeGeometry args={[30, 50]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      {/* máquinas temporárias */}
      <mesh position={[-3, 1, -3]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      <mesh position={[3, 1, -8]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#444444" />
      </mesh>

      <mesh position={[-2, 1, -14]}>
        <boxGeometry args={[3, 2, 2]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      <mesh position={[2, 1, -20]}>
        <boxGeometry args={[2, 2, 3]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
    </group>
  )
}