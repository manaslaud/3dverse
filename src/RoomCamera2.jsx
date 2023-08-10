"use client"

import React, { useEffect } from 'react';
import { useGLTF, OrthographicCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Raycaster } from 'three/src/Three';
import { Vector2 } from 'three/src/Three';
import gsap from 'gsap';

export default function Model(props) {
  const phoneScaleFactor=0.45
  let scaleFactor=1;
  console.log(props.props)
  if(props.props==1){
    scaleFactor=phoneScaleFactor * window.innerWidth/320
  }
  if(props.props==2){
    scaleFactor=0.9
  }
  if(props.props==3){
    scaleFactor=1
  }

  const { scene,camera } = useThree();
  const { nodes,materials ,cameras } = useGLTF('/rooms/roomCamera2.glb');
  cameras[0].position.set(0, 0, 3);
  const raycaster = new Raycaster();
  const mouse = new Vector2();
  const isMobile = window.innerWidth>=320 && window.innerWidth <425
  const isTab = window.innerWidth>=425 && window.innerWidth <768
  const isSLaptop=window.innerWidth>=1024 && window.innerWidth <=1440
  function scaleObject(object, scale) {
    gsap.to(object.scale, {
      x: scale,
      y: scale,
      z: scale,
      duration: 0.5,
      ease: 'power2.out',
    });
  }

  function resetScale(objects) {
    gsap.to(objects.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 0.5,
      ease: 'power2.out',
    });
  }

  function onHoverEvent(e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
      const hoveredObject = intersects[0].object;
      scaleObject(hoveredObject, 1.1);

      // Scale other objects back to their original scale
      const otherObjects = scene.children.filter(obj => obj !== hoveredObject);
      gsap.to(intersects[0].object.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.5,
        delay: 0.5, // Delay the scaling back animation
        ease: 'power2.inOut',
      }); 
    } 
  }

  useEffect(() => {
    window.addEventListener('mousemove', onHoverEvent);
    return () => {
      window.removeEventListener('mousemove', onHoverEvent);
    };
  });

  return (
    <group {...props} dispose={null}>
      <group position={[props.props>=2?-3*window.innerWidth/1100:-0.7 , props.props>=2?-6:-5, 0]} rotation={[Math.PI, Math.PI+2, Math.PI]} scale={0.01*scaleFactor}>
        <group position={[-105.441, -155.628, -73.173]}>
          <mesh geometry={nodes.Dumbell1_Colors_0.geometry} material={materials['Colors.003']} position={[-125.537, 80, 60]} rotation={[0, 0, 1.309]} />
          <mesh geometry={nodes.Dumbell10_Colors_0.geometry} material={materials['Colors.003']} position={[-125.537, 45, 10]} rotation={[0, 0, 1.309]} />
          <mesh geometry={nodes.Dumbell11_Colors_0.geometry} material={materials['Colors.003']} position={[-125.537, 45, -10]} rotation={[0, 0, 1.309]} />
          <mesh geometry={nodes.Dumbell12_Colors_0.geometry} material={materials['Colors.003']} position={[-125.537, 45, -30]} rotation={[0, 0, 1.309]} />
          <mesh geometry={nodes.Dumbell2_Colors_0.geometry} material={materials['Colors.003']} position={[-125.537, 80, 80]} rotation={[0, 0, 1.309]} />
          <mesh geometry={nodes.Dumbell3_Colors_0.geometry} material={materials['Colors.003']} position={[-125.537, 80, 40]} rotation={[0, 0, 1.309]} />
          <mesh geometry={nodes.Dumbell4_Colors_0.geometry} material={materials['Colors.003']} position={[-125.537, 80, 20]} rotation={[0, 0, 1.309]} />
          <mesh geometry={nodes.Dumbell5_Colors_0.geometry} material={materials['Colors.003']} position={[-125.537, 80, 0]} rotation={[0, 0, 1.309]} />
          <mesh geometry={nodes.Dumbell6_Colors_0.geometry} material={materials['Colors.003']} position={[-125.537, 80, -20]} rotation={[0, 0, 1.309]} />
          <mesh geometry={nodes.Dumbell7_Colors_0.geometry} material={materials['Colors.003']} position={[-125.537, 45, 70]} rotation={[0, 0, 1.309]} />
          <mesh geometry={nodes.Dumbell8_Colors_0.geometry} material={materials['Colors.003']} position={[-125.537, 45, 50]} rotation={[0, 0, 1.309]} />
          <mesh geometry={nodes.Dumbell9_Colors_0.geometry} material={materials['Colors.003']} position={[-125.537, 45, 30]} rotation={[0, 0, 1.309]} />
          <mesh geometry={nodes.Shelf_Bottom_Colors_0.geometry} material={materials['Colors.003']} position={[-127.5, 35, 25]} rotation={[0, 0, -0.262]} />
          <mesh geometry={nodes.Shelf_Top_Colors_0.geometry} material={materials['Colors.003']} position={[-127.5, 70, 25]} rotation={[0, 0, -0.262]} />
          <mesh geometry={nodes.Side_Left_Colors_0.geometry} material={materials['Colors.003']} position={[-125, 50, 100]} />
          <mesh geometry={nodes.Side_Right_Colors_0.geometry} material={materials['Colors.003']} position={[-125, 50, -50]} />
        </group>
        <group position={[-34.426, 1, -79.69]} rotation={[0, 1.571, 0]} scale={[1.35, 0.025, 0.9]}>
          <mesh geometry={nodes.pCube8_Colors_0.geometry} material={materials['Colors.003']} position={[102.919, -6225.127, -84.721]} />
        </group>
        <group position={[30, 0, 20]} scale={0.8}>
          <mesh geometry={nodes.Treadmill_base_Colors_0.geometry} material={materials['Colors.003']} position={[-20.311, -184.535, -118.676]} />
          <mesh geometry={nodes.Treadmill_Panel_Colors_0.geometry} material={materials['Colors.003']} position={[-20.311, -69.535, -38.676]} rotation={[-Math.PI / 6, 0, 0]} scale={[1, 1, 0.2]} />
        </group>
        <group position={[-150, 5, -150]}>
          <mesh geometry={nodes.Leg_Colors_0.geometry} material={materials['Colors.003']} position={[-76.249, -155.628, -138.941]} />
        </group>
        <group position={[-150, 5, -10]}>
          <mesh geometry={nodes.Leg5_Colors_0.geometry} material={materials['Colors.003']} position={[-76.249, -155.628, -138.941]} />
        </group>
        <group position={[-150, 21.054, -20.228]} rotation={[-Math.PI / 6, 0, 0]} scale={[0.178, 3.585, 0.67]}>
          <mesh geometry={nodes.Leg6_Colors_0.geometry} material={materials['Colors.003']} position={[-428.759, -18.217, -295.776]} />
        </group>
        <mesh geometry={nodes.Leg7_Colors_0.geometry} material={materials['Colors.003']} position={[-226.249, -134.574, -278.398]} rotation={[Math.PI / 6, 0, 0]} scale={[0.178, 3.585, 0.67]} />
        <mesh geometry={nodes.Seat_Colors_0.geometry} material={materials['Colors.003']} position={[-226.249, -115.628, -218.941]} />
        <mesh geometry={nodes.Cork_Board_Colors_0.geometry} material={materials['Colors.003']} position={[-251.249, -5.628, -218.941]} scale={[1, 2, 2]} />
        <mesh geometry={nodes.Note1_Colors_0.geometry} material={materials['Colors.003']} position={[-247.758, -9.887, -196.32]} rotation={[0.087, 0, 0]} />
        <mesh geometry={nodes.Note2_Colors_0.geometry} material={materials['Colors.003']} position={[-247.758, 17.416, -241.076]} rotation={[-0.052, 0, 0]} />
        <mesh geometry={nodes.Note3_Colors_0.geometry} material={materials['Colors.003']} position={[-247.758, 16.483, -202.834]} />
        <mesh geometry={nodes.Note4_Colors_0.geometry} material={materials['Colors.003']} position={[-247.758, -29.196, -242.161]} />
        <mesh geometry={nodes.Note5_Colors_0.geometry} material={materials['Colors.003']} position={[-247.758, 13.401, -216.969]} />
        <mesh geometry={nodes.Note6_Colors_0.geometry} material={materials['Colors.003']} position={[-247.758, -22.959, -203.273]} />
        <mesh geometry={nodes.TV1_Colors_0.geometry} material={materials['Colors.003']} position={[-206.36, -44.706, -89.344]} rotation={[Math.PI / 2, 1.309, -Math.PI / 2]} scale={0.548} />
        <mesh geometry={nodes.Walls1_Colors_0.geometry} material={materials['Colors.003']} position={[-76.249, -155.628, -138.941]} />
        <mesh geometry={nodes.YogaBall_Colors_0.geometry} material={materials['Colors.003']} position={[-160.356, -130.628, -1.788]} rotation={[-0.475, 0.103, -0.501]} />
        <mesh geometry={nodes.YogaBall1_Colors_0.geometry} material={materials['Colors.003']} position={[-105.283, -130.628, -15.813]} rotation={[-0.758, 0.1, 0.479]} />
      </group>
      <OrthographicCamera makeDefault={false} far={1000} near={0.1} position={[1.143, 5.208, 6.997]} rotation={[-1.399, -1.047, -1.425]} scale={78.035} />
    </group>
  );
}
