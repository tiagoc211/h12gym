export type Vec3 = [number, number, number]

export type EquipmentBlock = {
  id: string
  position: Vec3
  rotation?: Vec3
}

export const gymLayout = {
  shell: {
    width: 22,
    length: 48,
    center: [0, 0, -11] as Vec3,
    wallHeight: 4.6,
    ceilingY: 4.55,
  },
  entrance: {
    x: -11,
    z: 8,
    openingWidth: 4.8,
  },
  turf: {
    position: [-0.8, 0.035, -4.8] as Vec3,
    size: [16.2, 0.07, 2.35] as Vec3,
  },
  restrictedRoom: {
    position: [-4.95, 2.05, -16.8] as Vec3,
    size: [11.8, 4.1, 8.8] as Vec3,
  },
  zones: {
    lower: {
      label: 'LOWER / LEGS',
      bounds: [-5.8, 0.04, -19.2] as Vec3,
      size: [8.8, 0.04, 15] as Vec3,
    },
    upper: {
      label: 'UPPER / MACHINES',
      bounds: [-3, 0.04, 1.9] as Vec3,
      size: [12.5, 0.04, 9] as Vec3,
    },
  },
  equipment: {
    benches: [
      { id: 'bench-entry', position: [-6.0, 0.42, 1.2], rotation: [0, -0.42, 0] },
      { id: 'bench-turf-left', position: [-5.6, 0.42, -7.6], rotation: [0, 0.25, 0] },
      { id: 'bench-legs', position: [-8.4, 0.42, -24.8], rotation: [0, 0.18, 0] },
      { id: 'bench-far', position: [-4.5, 0.42, -29.2], rotation: [0, 0.34, 0] },
    ] satisfies EquipmentBlock[],
    lowerBackBenches: [
      { id: 'lower-back-corridor-right', position: [6.55, 0.46, -5.8], rotation: [0, -0.22, 0] },
      { id: 'lower-back-rear-left', position: [2.35, 0.46, -23.6], rotation: [0, 0.18, 0] },
    ] satisfies EquipmentBlock[],
    treadmills: [
      { id: 'low-poly-treadmill-corridor-right', position: [6.9, 0.18, 2.8], rotation: [0, -0.08, 0] },
      { id: 'low-poly-treadmill-rear-right', position: [6.85, 0.18, -2.0], rotation: [0, -0.04, 0] },
    ] satisfies EquipmentBlock[],
    pulldownMachines: [
      { id: 'arm-pulldown-corridor-left', position: [2.25, 1.12, -7.9], rotation: [0, 0.08, 0] },
      { id: 'arm-pulldown-corridor-right', position: [6.75, 1.12, -12.3], rotation: [0, -0.14, 0] },
    ] satisfies EquipmentBlock[],
    exerciseBikes: [
      { id: 'reebok-bike-corridor-right', position: [6.8, 0.62, -16.2], rotation: [0, -0.1, 0] },
      { id: 'reebok-bike-front-left', position: [2.35, 0.62, 3.8], rotation: [0, 0.12, 0] },
    ] satisfies EquipmentBlock[],
    dumbbellRacks: [
      { id: 'upper-dumbbell-rack', position: [-8.5, 0.55, 6.8], rotation: [0, 0.06, 0] },
      { id: 'right-dumbbell-rack-1', position: [8.3, 0.55, -20.6], rotation: [0, -0.1, 0] },
      { id: 'right-dumbbell-rack-2', position: [8.35, 0.55, -25.0], rotation: [0, -0.11, 0] },
      { id: 'lower-dumbbell-rack', position: [8.4, 0.55, -29.4], rotation: [0, -0.12, 0] },
    ] satisfies EquipmentBlock[],
    freeDumbbells: [
      { id: 'compact-dumbbell-entry', position: [-3.6, 0.24, 1.35], rotation: [0, 0.45, 0] },
      { id: 'compact-dumbbell-turf', position: [-6.4, 0.24, -6.25], rotation: [0, -0.32, 0] },
      { id: 'compact-dumbbell-far', position: [0.15, 0.24, -22.0], rotation: [0, 0.78, 0] },
    ] satisfies EquipmentBlock[],
  },
} as const
