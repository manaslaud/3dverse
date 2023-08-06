
import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { Raycaster, Vector2 } from 'three';

export default function Model(props) {
  const { scene } = useThree();
  console.log(scene)
  const { camera } = useThree();
  console.log(camera)

  const raycaster= new Raycaster();
  const mouse=new Vector2();
  const mouseMove= (e) => {
    // Update the mouse coordinates based on the current viewport
    mouse.x = ( e.clientY/ window.innerWidth) *2 -1 ; 
    mouse.y = ( e.clientX/ window.innerHeight)*2 - 1 ;
    // console.log(mouse.x)
    // console.log(mouse.y)
    // Update the raycaster's origin and direction
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);
    for(let i=0;i<intersects.length;i++){
      intersects[i].object.scale.set(2,2,2)
      console.log(intersects[i])
    }
  };

window.addEventListener("mousemove",mouseMove)


  const { nodes, materials } = useGLTF('/rooms/room1.glb')
  return (
    <group {...props} dispose={null}>
      <group  position={[0, -1, 0]} rotation={[Math.PI, -Math.PI/12, Math.PI]} scale={0.01}>
        <group position={[-21.788, 0, 16.031]} rotation={[0, -0.272, 0]}>
          <mesh o geometry={nodes.Leg14_Colors_0.geometry} material={materials.Colors} position={[350, -269.5, -65.172]} />
          <mesh geometry={nodes.Leg15_Colors_0.geometry} material={materials.Colors} position={[350, -269.5, -65.172]} />
          <mesh geometry={nodes.Top2_Colors_0.geometry} material={materials.Colors} position={[52.272, -17.5, -16.008]} scale={[0.6, 1, 0.35]} />
        </group>
        <group rotation={[0, 1.571, 0]}>
          <mesh geometry={nodes.Wood_Plank1_Colors_0.geometry} material={materials.Colors} position={[0, 2.5, 100]} />
          <mesh geometry={nodes.Wood_Plank2_Colors_0.geometry} material={materials.Colors} position={[0, 2.5, 50]} />
          <mesh geometry={nodes.Wood_Plank3_Colors_0.geometry} material={materials.Colors} position={[0, 2.5, 0]} />
          <mesh geometry={nodes.Wood_Plank4_Colors_0.geometry} material={materials.Colors} position={[0, 2.5, -50]} />
          <mesh geometry={nodes.Wood_Plank5_Colors_0.geometry} material={materials.Colors} position={[0, 2.5, -100]} />
          <mesh geometry={nodes.Wood_Plank6_Colors_0.geometry} material={materials.Colors} position={[0, 2.5, -150]} />
          <mesh geometry={nodes.Wood_Plank7_Colors_0.geometry} material={materials.Colors} position={[0, 2.5, 150]} />
        </group>
        <mesh geometry={nodes.Bed_Colors_0.geometry} material={materials.Colors} position={[65, 5, 99.73]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh  geometry={nodes.Book_Colors_0.geometry} material={materials.Colors} position={[-152.259, 174, -21.217]} />
        <mesh geometry={nodes.Book1_Colors_0.geometry} material={materials.Colors} position={[-152.259, 174, -9.512]} />
        <mesh geometry={nodes.Book10_Colors_0.geometry} material={materials.Colors} position={[-154.5, 219, -59.972]} rotation={[-Math.PI / 10, 0, 0]} />
        <mesh geometry={nodes.Book11_Colors_0.geometry} material={materials.Colors} position={[-150.766, 218.99, -14.949]} rotation={[-1.57, -0.008, -0.089]} />
        <mesh geometry={nodes.Book12_Colors_0.geometry} material={materials.Colors} position={[-104.351, 76, -133.3]} rotation={[-Math.PI / 2, 0, -0.373]} />
        <mesh geometry={nodes.Book13_Colors_0.geometry} material={materials.Colors} position={[-104.351, 86, -133.3]} rotation={[-Math.PI / 2, 0, -0.025]} />
        <mesh geometry={nodes.Book2_Colors_0.geometry} material={materials.Colors} position={[-152.259, 174, 15.664]} />
        <mesh geometry={nodes.Book3_Colors_0.geometry} material={materials.Colors} position={[-152.259, 174, 118.487]} />
        <mesh geometry={nodes.Book4_Colors_0.geometry} material={materials.Colors} position={[-154.977, 164, 88.807]} rotation={[-Math.PI / 2, 0, 0.182]} />
        <mesh geometry={nodes.Book5_Colors_0.geometry} material={materials.Colors} position={[-154.5, 174.811, 30.12]} rotation={[-Math.PI / 10, 0, 0]} />
        <mesh geometry={nodes.Book6_Colors_0.geometry} material={materials.Colors} position={[-152.259, 219, -74.428]} />
        <mesh geometry={nodes.Book7_Colors_0.geometry} material={materials.Colors} position={[-152.259, 219, 28.395]} />
        <mesh geometry={nodes.Book8_Colors_0.geometry} material={materials.Colors} position={[-152.259, 219, 17.272]} />
        <mesh geometry={nodes.Book9_Colors_0.geometry} material={materials.Colors} position={[-150.766, 209.022, -14.949]} rotation={[-1.57, -0.008, 0.179]} />
        <mesh geometry={nodes.Blind1_Colors_0.geometry} material={materials.Colors} position={[50, 180, 157.5]} rotation={[-Math.PI / 3, 0, 0]} />
        <mesh geometry={nodes.Blind2_Colors_0.geometry} material={materials.Colors} position={[50, 170, 157.5]} rotation={[-Math.PI / 3, 0, 0]} />
        <mesh geometry={nodes.Blind3_Colors_0.geometry} material={materials.Colors} position={[50, 160, 157.5]} rotation={[-Math.PI / 3, 0, 0]} />
        <mesh geometry={nodes.Blind4_Colors_0.geometry} material={materials.Colors} position={[50, 150, 157.5]} rotation={[-Math.PI / 3, 0, 0]} />
        <mesh geometry={nodes.Blind5_Colors_0.geometry} material={materials.Colors} position={[50, 140, 157.5]} rotation={[-Math.PI / 3, 0, 0]} />
        <mesh geometry={nodes.Blind6_Colors_0.geometry} material={materials.Colors} position={[50, 130, 157.5]} rotation={[-Math.PI / 3, 0, 0]} />
        <mesh geometry={nodes.Blind7_Colors_0.geometry} material={materials.Colors} position={[50, 120, 157.5]} rotation={[-Math.PI / 3, 0, 0]} />
        <mesh geometry={nodes.Blind8_Colors_0.geometry} material={materials.Colors} position={[50, 110, 157.5]} rotation={[-Math.PI / 3, 0, 0]} />
        <mesh geometry={nodes.Blind9_Colors_0.geometry} material={materials.Colors} position={[50, 190, 157.5]} rotation={[-Math.PI / 3, 0, 0]} />
        <mesh geometry={nodes.String1_Colors_0.geometry} material={materials.Colors} position={[-20, 153.468, 157.5]} />
        <mesh geometry={nodes.String2_Colors_0.geometry} material={materials.Colors} position={[120, 153.468, 157.5]} />
        <mesh geometry={nodes.Top_Colors_0001.geometry} material={materials.Colors} position={[50, 210, 160]} />
        <mesh geometry={nodes.Computer_Colors_0.geometry} material={materials.Colors} position={[-93.596, 20.15, -38.58]} rotation={[-Math.PI, 1.484, -Math.PI]} scale={0.5} />
        <mesh geometry={nodes.CPU_Colors_0.geometry} material={materials.Colors} position={[-145.328, 91, -103.558]} scale={[0.5, 0.4, 0.2]} />
        <mesh geometry={nodes.Keyboard_Colors_0.geometry} material={materials.Colors} position={[-100.334, 91, -37.961]} rotation={[0, 1.571, 0]} scale={[0.5, 0.4, 0.2]} />
        <mesh geometry={nodes.Mouse_Colors_0.geometry} material={materials.Colors} position={[-96.751, 91, -82.792]} rotation={[0, 1.571, 0]} scale={[0.101, 0.4, 0.151]} />
        <mesh geometry={nodes.Drawer_Colors_0.geometry} material={materials.Colors} />
        <mesh geometry={nodes.Handle_Colors_0.geometry} material={materials.Colors} />
        <mesh geometry={nodes.Leg1_Colors_0.geometry} material={materials.Colors} />
        <mesh geometry={nodes.Leg2_Colors_0.geometry} material={materials.Colors} />
        <mesh geometry={nodes.Leg3_Colors_0.geometry} material={materials.Colors} />
        <mesh geometry={nodes.Top_Colors_0.geometry} material={materials.Colors} />
        <mesh  geometry={nodes.Telescope_Colors_0.geometry} material={materials.Colors} position={[-5.005, 5, 162.68]} />
        <mesh geometry={nodes.Shelf1_Colors_0.geometry} material={materials.Colors} position={[-155, 200, -44.126]} />
        <mesh geometry={nodes.Shelf2_Colors_0.geometry} material={materials.Colors} position={[-155, 155, 50]} />
        <mesh  geometry={nodes.Walls2_Colors_0.geometry} material={materials.Colors} />
      </group>
    </group>
  )
}

useGLTF.preload('/room1.glb')
