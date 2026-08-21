import { Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'

export function PostProcessing() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.48}
        luminanceThreshold={0.72}
        luminanceSmoothing={0.34}
        mipmapBlur
      />
      <Vignette eskil={false} offset={0.28} darkness={0.58} />
      <Noise premultiply opacity={0.015} />
    </EffectComposer>
  )
}
