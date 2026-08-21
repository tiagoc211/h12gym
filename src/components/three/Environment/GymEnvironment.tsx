import { Architecture } from './Architecture'
import { DebugOverlay } from './DebugOverlay'
import { GymEquipment } from './GymEquipment'
import { GymLights } from './GymLights'

export function GymEnvironment() {
  return (
    <group>
      <Architecture />
      <GymEquipment />
      <GymLights />
      <DebugOverlay />
    </group>
  )
}
