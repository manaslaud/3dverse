import React, { useEffect, useRef,MutableRefObject } from 'react';
import { useThree } from '@react-three/fiber';
import { Scroll, ScrollControls } from '@react-three/drei';
import { gsap } from 'gsap';
import { PerspectiveCamera } from 'three';
import { useFrame } from '@react-three/fiber'
import ScrollTrigger from 'gsap/ScrollTrigger';
import Room1 from '../../RoomCamera1';
import Room2 from '../../RoomCamera2';
import Room3 from '../../RoomCamera3';
import { Overlay } from './Overlay';
function Rooms() {
  const { camera } = useThree();
  const cameraRef: MutableRefObject<PerspectiveCamera | undefined> = useRef();
  const {viewport}= useThree()
  console.log(viewport.width)
  const resRatio= viewport.width/12
  console.log(resRatio)

  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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
        <Room1 props={resRatio} />
        <Room2 props={resRatio}/>
        <Room3 props={resRatio}/>
    </Scroll>
    <Overlay/>
   </ScrollControls>
        </>
  );
}

export default Rooms;
