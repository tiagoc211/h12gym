import { Architecture } from './Architecture'
import { BrandDetails } from './BrandDetails'
import { DebugOverlay } from './DebugOverlay'
import { GymEquipment } from './GymEquipment'
import { GymLights } from './GymLights'

export function GymEnvironment() {
  return (
    <group>
      <Architecture />
      <BrandDetails />
      <GymEquipment />
      <GymLights />
      <DebugOverlay />
    </group>
  )
}
