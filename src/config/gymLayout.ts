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
    position: [5.25, 2.05, -15.8] as Vec3,
    size: [5.8, 4.1, 7.6] as Vec3,
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
    racks: [
      { id: 'entry-rack', position: [-7.1, 1.18, 3.2], rotation: [0, 0.16, 0] },
      { id: 'legs-rack-1', position: [-5.9, 1.18, -13.8], rotation: [0, -0.12, 0] },
      { id: 'legs-rack-2', position: [-2.3, 1.18, -21.4], rotation: [0, 0.18, 0] },
      { id: 'far-rack', position: [1.8, 1.18, -27.6], rotation: [0, -0.25, 0] },
    ] satisfies EquipmentBlock[],
    benches: [
      { id: 'bench-entry', position: [-2.3, 0.42, 2.2], rotation: [0, -0.42, 0] },
      { id: 'bench-turf-left', position: [-5.6, 0.42, -7.6], rotation: [0, 0.25, 0] },
      { id: 'bench-legs', position: [-5.8, 0.42, -18.1], rotation: [0, -0.18, 0] },
      { id: 'bench-far', position: [1.2, 0.42, -23.4], rotation: [0, 0.34, 0] },
    ] satisfies EquipmentBlock[],
    machines: [
      { id: 'upper-cable', position: [2.5, 1.15, 2.4], rotation: [0, -0.12, 0] },
      { id: 'upper-machine-1', position: [6.9, 1.05, 0.6], rotation: [0, 0.2, 0] },
      { id: 'upper-machine-2', position: [7.2, 1.05, -3.2], rotation: [0, -0.16, 0] },
      { id: 'legs-machine-1', position: [-7.2, 1.02, -23.8], rotation: [0, 0.1, 0] },
      { id: 'legs-machine-2', position: [-3.7, 1.05, -28.8], rotation: [0, -0.22, 0] },
      { id: 'back-machine', position: [7.2, 1.08, -25.6], rotation: [0, -0.2, 0] },
    ] satisfies EquipmentBlock[],
  },
} as const
