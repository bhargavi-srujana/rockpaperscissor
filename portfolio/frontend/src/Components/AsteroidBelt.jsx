import { useRef, useEffect } from "react"
import * as THREE from "three"

export default function AsteroidBelt({ count = 500, inner = 25, outer = 35 }) {
  const mesh = useRef()
  const dummy = new THREE.Object3D()

  useEffect(() => {
  if (mesh.current) {
    mesh.current.rotation.x = Math.PI / 40
  }
}, [])
  useEffect(() => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = inner + Math.random() * (outer - inner)

      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const y = (Math.random() - 0.5) * 2

      const scale = Math.random() * 0.5 + 0.2

      dummy.position.set(x, y, z)
      dummy.scale.set(scale, scale, scale)

      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    }

    mesh.current.instanceMatrix.needsUpdate = true
  }, [count, inner, outer])

//   const scale = Math.random() * 0.8 + 0.2
  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.5, 6, 6]} />
      <meshStandardMaterial color="#aaaaaa" emissive="#222222" />
     
    </instancedMesh>
  )
}