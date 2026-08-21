import { Line } from '@react-three/drei'
import { useMemo } from 'react'
import { Vector3 } from 'three'
import { cameraPath } from '../../../config/cameraPath'
import { gymLayout } from '../../../config/gymLayout'

const DEBUG = import.meta.env.DEV && import.meta.env.VITE_SHOW_3D_DEBUG === 'true'

export function DebugOverlay() {
  const pathGeometry = useMemo(() => {
    return cameraPath.map((point) => new Vector3(...point.position))
  }, [])

  if (!DEBUG) {
    return null
  }

  return (
    <group>
      <Line points={pathGeometry} color="#8f8f8f" lineWidth={1} transparent opacity={0.6} />

      <mesh position={gymLayout.restrictedRoom.position}>
        <boxGeometry args={gymLayout.restrictedRoom.size} />
        <meshBasicMaterial color="#ff3b3b" wireframe transparent opacity={0.32} />
      </mesh>

      <mesh position={gymLayout.turf.position}>
        <boxGeometry args={gymLayout.turf.size} />
        <meshBasicMaterial color="#2f6b46" wireframe transparent opacity={0.5} />
      </mesh>
    </group>
  )
}
