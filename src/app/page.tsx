"use client"
import { Canvas } from '@react-three/fiber'
import CustomOrbitControls from './components/OrbitControls'
import RoomsContext from './components/Rooms'

export default function Home() {

  

  return (
    <div className='w-screen h-screen'>
    <Canvas camera={{fov:56}}>
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
