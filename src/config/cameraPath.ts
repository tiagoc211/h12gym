export interface CameraPoint {
  progress: number
  position: [number, number, number]
  target: [number, number, number]
  fov: number
}

export const cameraPath: CameraPoint[] = [
  {
    progress: 0,
    position: [-14.6, 1.64, 8.2],
    target: [-10.4, 1.5, 7.4],
    fov: 44,
  },
  {
    progress: 0.1,
    position: [-11.4, 1.65, 7.6],
    target: [-7.2, 1.5, 6.2],
    fov: 45,
  },
  {
    progress: 0.2,
    position: [-8.2, 1.66, 5.6],
    target: [-3.6, 1.5, 2.8],
    fov: 47,
  },
  {
    progress: 0.35,
    position: [-6.3, 1.66, 1.0],
    target: [-1.4, 1.5, -2.0],
    fov: 49,
  },
  {
    progress: 0.5,
    position: [-5.7, 1.66, -5.4],
    target: [-0.9, 1.48, -7.0],
    fov: 49,
  },
  {
    progress: 0.65,
    position: [-4.2, 1.68, -10.8],
    target: [0.4, 1.5, -12.8],
    fov: 48,
  },
  {
    progress: 0.8,
    position: [-3.0, 1.7, -18.6],
    target: [0.6, 1.52, -22.6],
    fov: 48,
  },
  {
    progress: 1,
    position: [-2.2, 1.72, -25.8],
    target: [1.2, 1.55, -31.0],
    fov: 50,
  },
]
