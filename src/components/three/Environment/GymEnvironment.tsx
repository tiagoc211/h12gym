import { Architecture } from './Architecture'
import { GymEquipment } from './GymEquipment'
import { GymLights } from './GymLights'

export function GymEnvironment() {
  return (
    <group>
      <Architecture />
      <GymEquipment />
      <GymLights />
    </group>
  )
}
