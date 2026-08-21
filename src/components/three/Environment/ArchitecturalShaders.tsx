import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

import { gymLayout } from '../../../config/gymLayout'

const windowZ = [-25.6, -15.8, -6.0, 3.8] as const

const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const floorFragmentShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;

  float line(float value, float width) {
    return 1.0 - smoothstep(0.0, width, abs(fract(value) - 0.5));
  }

  void main() {
    vec2 uv = vUv;
    float longLines = line(uv.x * 16.0, 0.03) * 0.08;
    float crossLines = line(uv.y * 34.0, 0.018) * 0.045;
    float scan = sin((uv.y * 42.0) + uTime * 0.35) * 0.5 + 0.5;
    float edgeFade = smoothstep(0.0, 0.18, uv.x) * smoothstep(1.0, 0.82, uv.x);
    float depthFade = smoothstep(0.0, 0.16, uv.y) * smoothstep(1.0, 0.82, uv.y);
    float alpha = (longLines + crossLines + scan * 0.018) * edgeFade * depthFade;

    vec3 color = mix(vec3(0.04, 0.04, 0.04), vec3(0.48, 0.54, 0.62), longLines * 1.6);
    gl_FragColor = vec4(color, alpha);
  }
`

const windowFragmentShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    float verticalBand = smoothstep(0.02, 0.14, uv.y) * smoothstep(0.98, 0.68, uv.y);
    float sideFade = smoothstep(0.0, 0.2, uv.x) * smoothstep(1.0, 0.8, uv.x);
    float sweep = sin((uv.x * 6.0) + uTime * 0.22) * 0.5 + 0.5;
    float bars = step(0.93, fract(uv.x * 5.0)) * 0.22;
    float alpha = (0.58 + sweep * 0.18 + bars) * verticalBand * sideFade;

    vec3 coldLight = vec3(0.72, 0.84, 1.0);
    vec3 warmEdge = vec3(1.0, 0.78, 0.18);
    vec3 color = mix(coldLight, warmEdge, bars * 0.35);
    gl_FragColor = vec4(color, alpha);
  }
`

function ShaderFloorOverlay() {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    [],
  )
  const { shell } = gymLayout

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta
    }
  })

  return (
    <mesh position={[shell.center[0], 0.012, shell.center[2]]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[shell.width * 0.96, shell.length * 0.96, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={floorFragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

function WindowGlass({ z }: { z: number }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    [],
  )

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta
    }
  })

  return (
    <group position={[-10.78, 3.46, z]} rotation={[0, Math.PI / 2, 0]}>
      <mesh>
        <planeGeometry args={[7.3, 1.08, 1, 1]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={windowFragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh position={[0, 0, -0.018]}>
        <planeGeometry args={[7.45, 1.2, 1, 1]} />
        <meshStandardMaterial
          color="#9fc5ff"
          emissive="#6f98d8"
          emissiveIntensity={0.24}
          transparent
          opacity={0.22}
          roughness={0.2}
          metalness={0.18}
          side={THREE.DoubleSide}
        />
      </mesh>

      {[-0.64, 0.64].map((y) => (
        <mesh key={y} position={[0, y, 0.032]}>
          <boxGeometry args={[7.65, 0.07, 0.08]} />
          <meshStandardMaterial color="#202020" roughness={0.38} metalness={0.64} emissive="#080808" />
        </mesh>
      ))}
      {[-3.85, 3.85].map((x) => (
        <mesh key={x} position={[x, 0, 0.032]}>
          <boxGeometry args={[0.07, 1.36, 0.08]} />
          <meshStandardMaterial color="#1c1c1c" roughness={0.4} metalness={0.72} />
        </mesh>
      ))}
      {[-1.92, 0, 1.92].map((x) => (
        <mesh key={x} position={[x, 0, 0.038]}>
          <boxGeometry args={[0.045, 1.16, 0.055]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.38} metalness={0.68} />
        </mesh>
      ))}

      <mesh position={[0, -1.18, 0.02]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[7.0, 3.8, 1, 1]} />
        <meshBasicMaterial color="#8fb7ff" transparent opacity={0.055} blending={THREE.AdditiveBlending} side={THREE.DoubleSide} />
      </mesh>

      <mesh position={[0, 0.68, 0.02]}>
        <boxGeometry args={[7.6, 0.055, 0.05]} />
        <meshStandardMaterial color="#202020" roughness={0.38} metalness={0.64} emissive="#080808" />
      </mesh>
    </group>
  )
}

export function ArchitecturalShaders() {
  return (
    <group>
      <ShaderFloorOverlay />

      {windowZ.map((z) => (
        <WindowGlass key={z} z={z} />
      ))}
    </group>
  )
}
