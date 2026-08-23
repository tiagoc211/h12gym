import { Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'

type PostProcessingProps = {
  mobile?: boolean
}

export function PostProcessing({ mobile = false }: PostProcessingProps) {
  return (
    <EffectComposer multisampling={0}>
      {!mobile ? (
        <Bloom
          intensity={0.38}
          luminanceThreshold={0.76}
          luminanceSmoothing={0.3}
          mipmapBlur={false}
        />
      ) : null}
      <Vignette eskil={false} offset={0.28} darkness={0.58} />
      {!mobile ? <Noise premultiply opacity={0.01} /> : null}
    </EffectComposer>
  )
}
