"use client"
import ScrollControls from "@react-three/drei"
import { Canvas } from '@react-three/fiber'
import {useFrame} from '@react-three/fiber'
import {useRef, useLayoutEffect} from "react"
import CustomOrbitControls from './components/OrbitControls'
import Room1 from '../RoomCamera1'
import Room2 from "../RoomCamera2"
import Room3 from "../RoomCamera3"
import { useThree } from '@react-three/fiber'
import RoomsContext from './components/Rooms'

export default function Home() {

  

  return (
    <div className='w-screen h-screen'>
    <Canvas>
      <ambientLight/>
      <rectAreaLight position={[0,0,5]} color="red" width={10} height={10}/>
      {/* <Room1/>
      <Room2/>
      <Room3/>      */}
      
      <RoomsContext/>
      
      {/* <ambientLight color="white"/> */}
      <CustomOrbitControls/>
      {/* <AnimatedCube/> */}
      {/* <ambientLight intensity={0.1}/> */}
      <directionalLight color="white" intensity={1} position={[0,0,5]}/> 
    </Canvas>
    </div>
  )
}
