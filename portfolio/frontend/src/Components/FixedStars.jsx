import { Stars } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

export default function FixedStars() {
  const { camera } = useThree()
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.position.copy(camera.position)
    }
  })

  return (
    <Stars
      ref={ref}
      radius={60}
      depth={10}
      count={2000}
      factor={3}
      saturation={0}
      fade
      speed={0.1}
    />
  )
}