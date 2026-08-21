export interface CameraPoint {
  progress: number
  position: [number, number, number]
  target: [number, number, number]
  fov: number
}

export const cameraPath: CameraPoint[] = [
  {
    progress: 0,
    position: [0.12, 1.86, 10.8],
    target: [0, 1.7, 4],
    fov: 47,
  },
  {
    progress: 0.08,
    position: [0.12, 1.83, 8.9],
    target: [0, 1.65, 2],
    fov: 49,
  },
  {
    progress: 0.2,
    position: [0.22, 1.8, 5],
    target: [0.1, 1.62, -1.4],
    fov: 53,
  },
  {
    progress: 0.34,
    position: [0.18, 1.74, 0.8],
    target: [0.1, 1.56, -6.8],
    fov: 56,
  },
  {
    progress: 0.48,
    position: [-0.45, 1.7, -6],
    target: [0.45, 1.54, -13.2],
    fov: 60,
  },
  {
    progress: 0.62,
    position: [1.65, 1.82, -16.8],
    target: [0.62, 1.6, -24.5],
    fov: 50,
  },
  {
    progress: 0.8,
    position: [2.42, 1.88, -28.8],
    target: [1.35, 1.64, -36.2],
    fov: 48,
  },
  {
    progress: 1,
    position: [-0.2, 1.85, -41.8],
    target: [-1.1, 1.58, -49.5],
    fov: 50,
  },
]
