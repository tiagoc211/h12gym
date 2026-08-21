function clamp(value: number): number {
  return Math.min(1, Math.max(0, value))
}

export function range(progress: number, start: number, end: number): number {
  if (end <= start) {
    return 0
  }

  return clamp((progress - start) / (end - start))
}

export function smooth(value: number): number {
  return value * value * (3 - 2 * value)
}
