import {useFrame} from '@react-three/fiber'
import {useRef} from "react"
import * as THREE from "three"
export default function AnimatedCube(){
    const meshRef= useRef<THREE.Mesh>(null)
  useFrame(()=>{
    if(meshRef.current)
    meshRef.current.rotation.x+=0.01;
  })
  return(
    <mesh scale={[2,2,2]} ref={meshRef}>
          <boxGeometry/>
          <meshStandardMaterial/>
        </mesh>
    )
  }