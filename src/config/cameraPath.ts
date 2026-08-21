export interface CameraPoint {
  progress: number
  position: [number, number, number]
  target: [number, number, number]
  fov: number
}

export const cameraPath: CameraPoint[] = [
  {
    progress: 0,
    position: [-1.8, 1.66, 11.4],
    target: [-1.8, 1.58, 4.8],
    fov: 43,
  },
  {
    progress: 0.1,
    position: [-1.8, 1.66, 8.0],
    target: [-1.8, 1.58, 1.6],
    fov: 44,
  },
  {
    progress: 0.2,
    position: [-1.72, 1.66, 4.0],
    target: [-1.72, 1.55, -2.7],
    fov: 46,
  },
  {
    progress: 0.35,
    position: [-1.66, 1.66, -2.6],
    target: [-1.66, 1.52, -9.4],
    fov: 47,
  },
  {
    progress: 0.5,
    position: [-1.6, 1.66, -9.3],
    target: [-1.6, 1.5, -16.1],
    fov: 47,
  },
  {
    progress: 0.65,
    position: [-1.55, 1.68, -12.8],
    target: [-1.55, 1.52, -19.5],
    fov: 47,
  },
  {
    progress: 0.8,
    position: [-1.5, 1.7, -19.4],
    target: [-1.5, 1.54, -26.0],
    fov: 48,
  },
  {
    progress: 1,
    position: [-1.45, 1.72, -27.2],
    target: [-1.45, 1.56, -34.0],
    fov: 49,
  },
]
