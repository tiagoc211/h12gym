import { useEffect, useMemo } from 'react'
import { CanvasTexture, SRGBColorSpace } from 'three'

type SignPanelProps = {
  primary: string
  secondary?: string
  width?: number
  height?: number
  accent?: string
}

function createSignTexture(
  primary: string,
  secondary: string | undefined,
  accent: string,
): CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 256
  const context = canvas.getContext('2d')

  if (!context) {
    throw new Error('Unable to create sign texture context.')
  }

  context.fillStyle = '#0b0b0b'
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.fillStyle = '#ffffff'
  context.font = '700 128px Inter, Arial, sans-serif'
  context.textBaseline = 'middle'
  context.fillText(primary.toUpperCase(), 72, 130)

  if (secondary) {
    context.fillStyle = accent
    context.font = '600 40px Inter, Arial, sans-serif'
    context.fillText(secondary.toUpperCase(), 76, 210)
  }

  const texture = new CanvasTexture(canvas)
  texture.colorSpace = SRGBColorSpace
  return texture
}

export function SignPanel({
  primary,
  secondary,
  width = 4.2,
  height = 1.1,
  accent = '#d6d6d6',
}: SignPanelProps) {
  const texture = useMemo(
    () => createSignTexture(primary, secondary, accent),
    [accent, primary, secondary],
  )

  useEffect(() => () => texture.dispose(), [texture])

  return (
    <mesh>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial
        map={texture}
        emissive="#181818"
        emissiveIntensity={0.75}
        roughness={0.42}
        metalness={0.18}
      />
    </mesh>
  )
}
