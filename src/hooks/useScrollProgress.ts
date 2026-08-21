import { useSyncExternalStore } from 'react'

const subscribers = new Set<() => void>()
let progress = 0

function clampProgress(value: number): number {
  return Math.min(1, Math.max(0, value))
}

function subscribe(callback: () => void): () => void {
  subscribers.add(callback)
  return () => subscribers.delete(callback)
}

function snapshot(): number {
  return progress
}

export function setScrollProgress(value: number): void {
  const nextProgress = clampProgress(value)
  if (nextProgress === progress) {
    return
  }

  progress = nextProgress
  subscribers.forEach((callback) => callback())
}

export function getScrollProgress(): number {
  return progress
}

export function useScrollProgress(): number {
  return useSyncExternalStore(subscribe, snapshot, snapshot)
}
