export interface CameraPoint {
  progress: number
  position: [number, number, number]
  target: [number, number, number]
}

export const cameraPath: CameraPoint[] = [
  {
    progress: 0,
    position: [0.2, 1.75, 8.8],
    target: [0, 1.5, 2],
  },
  {
    progress: 0.15,
    position: [0.4, 1.65, 3.8],
    target: [-0.2, 1.45, -3],
  },
  {
    progress: 0.3,
    position: [-1.4, 1.7, -3.2],
    target: [0.5, 1.5, -10],
  },
  {
    progress: 0.5,
    position: [1.8, 1.9, -13.5],
    target: [0.2, 1.6, -20],
  },
  {
    progress: 0.7,
    position: [4.2, 1.8, -24],
    target: [1.2, 1.5, -31],
  },
  {
    progress: 0.85,
    position: [1.1, 1.7, -35],
    target: [-1.4, 1.5, -42],
  },
  {
    progress: 1,
    position: [-1.8, 1.85, -47],
    target: [0, 1.6, -55],
  },
]
