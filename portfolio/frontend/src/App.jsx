import React, { use, useRef, useEffect,useState,Suspense } from 'react'
//to encapsulate the 3D scene
import {Canvas, useFrame, useLoader, useThree} from '@react-three/fiber'
import {OrbitControls,FirstPersonControls,GizmoHelper, GizmoViewcube, useHelper} from '@react-three/drei'
import {useControls} from 'leva'
import { SpotLightHelper } from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import SS1 from './SS1'
import SS2 from './SS2'

// function Model(){
//   const result=useLoader(GLTFLoader,'/solar_system_animation/scene.gltf')
//   // const result=useLoader(GLTFLoader,'/psx_solar_system/scene.gltf')
//   return <primitive object={result.scene} scale={0.052} position={[0,0,0]} />
// }

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

  // const {color} = useControls({
  //   color: '#00bfff'
  // })
  return (
    <div id='canvas-container' >
      <Canvas shadows style={{backgroundColor:'black'}}>

        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewcube/>
        </GizmoHelper>

{/* <gridHelper args={[10]} /> */}
        <axesHelper args={[10]} />
        <mesh position={[-2,2,-1]} rotation={[0,0,Math.PI]} scale={[2,0.5,2]} castShadow >
          {/* <sphereGeometry args={[3,80,80]}/> */}
          {/* <meshBasicMaterial wireframe color="pink"/> */}
          {/* <torusKnotGeometry args={[1.7,0.3,256,256]} receiveShadow /> */}
         
          {/* <meshToonMaterial color={color} /> */}
          {/* <meshPhongMaterial color='black'/> */}
        </mesh>
        <OrbitControls />
        {/* <FirstPersonControls  autoForward/> */}
          <pointLight position={[0,0,0]} intensity={47}  castShadow/>

          {/* <LightWithHelper /> */}

          {/* <mesh rotation={[-Math.PI/2,0,0]} position={[0,0,0]} receiveShadow>
            <planeGeometry args={[100,100]} />
            <meshStandardMaterial color='white' />
            
          </mesh> */}

          <Model />
      </Canvas>
    </div>
  )
}

export default App