"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import CustomOrbitControls from './components/OrbitControls'
import RoomsContext from './components/Rooms'
import { useEffect, useRef } from 'react'
import { Overlay } from './components/Overlay'
import { ScrollControls,Scroll } from '@react-three/drei'
export default function Home() {
  return (
    <div className='w-screen h-screen'>
    <Canvas camera={{fov:58}} className='w-6/12 h-6/12'>
    
      <ambientLight/>
      <rectAreaLight position={[0,0,5]} color="red" width={10} height={10}/>
      <RoomsContext/>
      <CustomOrbitControls/>
      <directionalLight color="white" intensity={1} position={[0,0,5]}/> 
    </Canvas>
    </div>
  )
}
