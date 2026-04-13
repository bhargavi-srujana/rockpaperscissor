import { useFrame } from '@react-three/fiber'

export default function CameraMotion({ enabled }) {
  useFrame(({ clock, camera }) => {
    if (!enabled) return

    const t = clock.getElapsedTime()

    camera.position.x = Math.sin(t * 0.03) * 6
    camera.position.z = Math.cos(t * 0.03) * 6
    camera.position.y = 3

    camera.lookAt(0, 0, 0)
  })

  return null
}