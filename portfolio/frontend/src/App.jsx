import React, { use, useRef, useEffect,useState,Suspense } from 'react'
//to encapsulate the 3D scene
import {Canvas, useFrame, useLoader, useThree} from '@react-three/fiber'
import {OrbitControls,FirstPersonControls,GizmoHelper, GizmoViewcube, useHelper} from '@react-three/drei'
import {useControls} from 'leva'
import { SpotLightHelper } from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import SS1 from './SS1'
import Navbar from './Components/Navbar'
// import { Stars } from '@react-three/drei'
import * as THREE from 'three'
import FixedStars from './Components/FixedStars'

import CameraMotion from './Components/CameraMotion'


function Model(){
  return(
    <>
      <Suspense fallback={null}>
        {/* <SS2 scale={0.052} position={[0,0,0]} /> */}
        <SS1 scale={0.052} position={[0,0,0]} />
      </Suspense>
    </>
  )
}


const App = () => {

  
  const [autoRotate, setAutoRotate] = useState(true)
const timeoutRef = useRef()

  return (
    <div id='canvas-container' style={{ position: 'relative', width: '100vw', height: '100vh' }} >

<div style={{
  position: 'absolute',
  top: 130,
  left: 150,
  color: '#00ffcc',
  fontFamily: 'monospace',
  fontSize: '14px',
  zIndex: 20
}}>
  SYSTEM: ONLINE 🚀 <br />
  TARGET: SRUJANA CORE ☀️
</div>
<Navbar />
   
      <Canvas shadows style={{backgroundColor:'black'}} camera={{ position:  [6, 3, 6], fov: 55 }}>

        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewcube/>
        </GizmoHelper>

       <OrbitControls 
  onStart={() => {
    setAutoRotate(false)
    clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      setAutoRotate(true)
    }, 3000)
    
  }
  }
  minDistance={4}
  maxDistance={20}
  minPolarAngle={Math.PI / 3}
  maxPolarAngle={Math.PI / 2}
/>
        
            <pointLight position={[0,0,0]} intensity={60} distance={200} color="#ffecc5"  castShadow/>

            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[60, 80, 64]} />
              <meshBasicMaterial 
                color="#8888ff"
                side={THREE.DoubleSide}
                transparent
                opacity={0.15}
              />
            </mesh>
          <Model />

          <FixedStars />
          <CameraMotion enabled={autoRotate} />

      </Canvas>
         <img 
  src="/frame1.png" 
  alt="frame"
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 10
  }}
/>
    </div>
  )
}

export default App