import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Scroll, ScrollControls } from '@react-three/drei';
import { gsap } from 'gsap';
import { useFrame } from '@react-three/fiber'
import ScrollTrigger from 'gsap/ScrollTrigger';
import Room1 from '../../RoomCamera1';
import Room2 from '../../RoomCamera2';
import Room3 from '../../RoomCamera3';
import * as THREE from 'three'
import { Overlay } from './Overlay';
function Rooms() {
//     useFrame(({ mouse, camera }) => {
//     camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03)
//     camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.8, 0.01)
   
//     camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.025, 0.001)
//   })
   
  const { camera } = useThree();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

//     gsap.to(camera.position, {
//       scrollTrigger: {
//         trigger: 'Canvas', // Use the entire body as the trigger element
//         start: 'top top', // Animation starts when the top of the body is at the top of the viewport
//         end: 'bottom top', // Animation ends when the top of the body is at the bottom of the viewport
//         scrub: true,
//       },
//       x: 0, // Adjust the desired x position
//       y: 5, // Adjust the desired y position
//       z: 10, // Adjust the desired z position
//     });
  }, [camera.position]);

  return (
   <>
   <ScrollControls pages={2.95}>
    <Scroll>
        <Room1 />
        
        <Room2 />
        <Room3 />
    </Scroll>
    <Overlay/>
   </ScrollControls>
       
        </>
      
     
  );
}

export default Rooms;
