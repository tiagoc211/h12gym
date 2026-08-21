export interface CameraPoint {
  progress: number
  position: [number, number, number]
  target: [number, number, number]
  fov: number
}

export const cameraPath: CameraPoint[] = [
  {
    progress: 0,
    position: [-15.2, 1.62, 8.9],
    target: [-10.7, 1.48, 7.5],
    fov: 42,
  },
  {
    progress: 0.1,
    position: [-11.7, 1.64, 7.7],
    target: [-6.5, 1.5, 5.4],
    fov: 44,
  },
  {
    progress: 0.2,
    position: [-7.4, 1.68, 5.6],
    target: [1.6, 1.48, 0.4],
    fov: 54,
  },
  {
    progress: 0.35,
    position: [-4.2, 1.7, 0.8],
    target: [5.2, 1.5, -4.8],
    fov: 57,
  },
  {
    progress: 0.5,
    position: [-5.9, 1.66, -6.6],
    target: [1.2, 1.38, -5.1],
    fov: 55,
  },
  {
    progress: 0.65,
    position: [-1.8, 1.68, -9.2],
    target: [6.1, 1.46, -13.8],
    fov: 53,
  },
  {
    progress: 0.8,
    position: [0.8, 1.72, -20.6],
    target: [-6.3, 1.45, -26.4],
    fov: 51,
  },
  {
    progress: 1,
    position: [-3.2, 1.76, -29.6],
    target: [2.8, 1.55, -14.8],
    fov: 55,
  },
]
