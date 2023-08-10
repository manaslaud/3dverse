"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls,Scroll } from '@react-three/drei'
import RoomCamera1 from '../RoomCamera1'
import { Overlay } from './components/Overlay'
import RoomCamera2 from '../RoomCamera2'
import RoomCamera3 from '../RoomCamera3'
export default function Home() {
  const isMobile= window.innerWidth>=320 && window.innerWidth<728
  const isTab= window.innerWidth>=728 && window.innerWidth<1024
  const isLaptop= window.innerWidth>=1024
  let sw=isMobile ? 1 : (isTab ? 2 : 3)
  
  
  return (
    <div className='w-screen h-screen'>
    <Canvas camera={{fov:58}} >
    <ScrollControls pages={isMobile ? 3.5 : 3.1} >
         <Scroll>
          <RoomCamera1 props={sw}/>
          <RoomCamera2 props={sw}/>
          <RoomCamera3 props={sw}/>
        </Scroll>
        <Overlay/>
        </ScrollControls>
      <ambientLight/>
      <rectAreaLight position={[0,0,5]} color="red" width={10} height={10}/>
      </Canvas>
    </div>
  )
}
