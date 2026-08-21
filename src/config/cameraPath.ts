export interface CameraPoint {
  progress: number
  position: [number, number, number]
  target: [number, number, number]
  fov: number
}

export const cameraPath: CameraPoint[] = [
  {
    progress: 0,
    position: [4.15, 1.66, 11.4],
    target: [4.0, 1.58, 4.8],
    fov: 43,
  },
  {
    progress: 0.1,
    position: [4.18, 1.66, 8.0],
    target: [4.02, 1.58, 1.6],
    fov: 44,
  },
  {
    progress: 0.2,
    position: [4.22, 1.66, 4.0],
    target: [4.05, 1.55, -2.7],
    fov: 46,
  },
  {
    progress: 0.35,
    position: [4.28, 1.66, -2.6],
    target: [4.08, 1.52, -9.4],
    fov: 47,
  },
  {
    progress: 0.5,
    position: [4.34, 1.66, -9.3],
    target: [4.1, 1.5, -16.1],
    fov: 47,
  },
  {
    progress: 0.65,
    position: [4.42, 1.68, -14.0],
    target: [4.15, 1.52, -20.6],
    fov: 47,
  },
  {
    progress: 0.8,
    position: [4.5, 1.7, -20.8],
    target: [4.22, 1.54, -27.4],
    fov: 48,
  },
  {
    progress: 1,
    position: [4.58, 1.72, -28.0],
    target: [4.32, 1.56, -34.0],
    fov: 49,
  },
]
