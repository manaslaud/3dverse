import React, { useEffect } from 'react';
import { useGLTF, OrthographicCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Raycaster } from 'three/src/Three';
import { Vector2 } from 'three/src/Three';
import gsap from 'gsap';

export default function Model(props) {
  const phoneScaleFactor=0.5
  let scaleFactor=1;
  console.log(props.props)
  if(props.props==1){
    scaleFactor=phoneScaleFactor * window.innerWidth/345
  }
  if(props.props==2){
    scaleFactor=0.9
  }
  if(props.props==3){
    scaleFactor=1
  }
  const { scene,camera } = useThree();
  const { nodes,materials ,cameras } = useGLTF('/rooms/roomCamera3.glb');
  cameras[0].position.set(0, 0, 3);
  const raycaster = new Raycaster();
  const mouse = new Vector2();

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
  }, []);

  return (
    <group {...props} dispose={null}>
    <group position={[props.props>=2?1.45*window.innerWidth/1300:-0.1, props.props>=2?-13:-11.6, 0]} rotation={[Math.PI, 0, Math.PI]} scale={0.01*scaleFactor}>
      <group position={[65, 0, 40]} rotation={[-Math.PI, 0, -Math.PI]}>
        <group scale={[1, 1, 1.5]}>
          <group scale={[1, 1, 0.667]}>
            <mesh geometry={nodes.polySurface10_Colors_0.geometry} material={materials['Colors.009']} position={[0, 0, 22.5]} />
            <mesh geometry={nodes.polySurface11_Colors_0.geometry} material={materials['Colors.009']} position={[0, 0, -26.5]} />
          </group>
          <mesh geometry={nodes.polySurface4_Colors_0.geometry} material={materials['Colors.009']} />
          <mesh geometry={nodes.polySurface7_Colors_0.geometry} material={materials['Colors.009']} position={[9.604, 0, 0]} />
        </group>
        <mesh geometry={nodes.Matress_Colors_0.geometry} material={materials['Colors.009']} scale={[1, 1, 1.5]} />
        <mesh geometry={nodes.Pillow1_Colors_0.geometry} material={materials['Colors.009']} position={[7.222, -23.828, -42.5]} rotation={[0, 0, 0.122]} />
        <mesh geometry={nodes.Pillow2_Colors_0.geometry} material={materials['Colors.009']} position={[7.222, -23.828, 42.5]} rotation={[0, 0, 0.122]} />
      </group>
      <group position={[-59.877, 0, 43.687]}>
        <mesh geometry={nodes.polySurface1_Colors_0.geometry} material={materials['Colors.009']} />
        <mesh geometry={nodes.polySurface2_Colors_0.geometry} material={materials['Colors.009']} />
      </group>
      <mesh geometry={nodes.Book40_Colors_0.geometry} material={materials['Colors.009']} position={[-152.711, 75.007, -112.27]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Book41_Colors_0.geometry} material={materials['Colors.009']} position={[-152.082, 65.007, -111.683]} rotation={[Math.PI / 2, 0, -1.658]} />
      <mesh geometry={nodes.Carpet2_Colors_0.geometry} material={materials['Colors.009']} position={[80, 1.5, 50]} rotation={[0, 1.571, 0]} scale={[1.35, 0.025, 0.9]} />
      <mesh geometry={nodes.Airconditioner_Colors_0.geometry} material={materials['Colors.009']} position={[-160, 220, 60]} />
      <mesh geometry={nodes.Blind1_Colors_0001.geometry} material={materials['Colors.009']} position={[90, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind10_Colors_0.geometry} material={materials['Colors.009']} position={[0, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind11_Colors_0.geometry} material={materials['Colors.009']} position={[-10, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind12_Colors_0.geometry} material={materials['Colors.009']} position={[-20, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind13_Colors_0.geometry} material={materials['Colors.009']} position={[-30, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind14_Colors_0.geometry} material={materials['Colors.009']} position={[-40, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind15_Colors_0.geometry} material={materials['Colors.009']} position={[-50, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind16_Colors_0.geometry} material={materials['Colors.009']} position={[-60, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind17_Colors_0.geometry} material={materials['Colors.009']} position={[-70, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind18_Colors_0.geometry} material={materials['Colors.009']} position={[-80, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind2_Colors_0001.geometry} material={materials['Colors.009']} position={[80, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind3_Colors_0001.geometry} material={materials['Colors.009']} position={[70, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind4_Colors_0001.geometry} material={materials['Colors.009']} position={[60, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind5_Colors_0001.geometry} material={materials['Colors.009']} position={[50, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind6_Colors_0001.geometry} material={materials['Colors.009']} position={[40, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind7_Colors_0001.geometry} material={materials['Colors.009']} position={[30, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind8_Colors_0001.geometry} material={materials['Colors.009']} position={[20, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Blind9_Colors_0001.geometry} material={materials['Colors.009']} position={[10, 100, 165]} rotation={[0, Math.PI / 6, 0]} />
      <mesh geometry={nodes.Curtain_Holder_Colors_0.geometry} material={materials['Colors.009']} position={[0, 200, 165]} />
      <mesh geometry={nodes.pCube17_Colors_0.geometry} material={materials['Colors.009']} position={[-150, 30, -100]} />
      <mesh geometry={nodes.pCube18_Colors_0.geometry} material={materials['Colors.009']} position={[-127.305, 45.957, -100]} />
      <mesh geometry={nodes.pCube19_Colors_0.geometry} material={materials['Colors.009']} position={[-127.305, 19.16, -100]} />
      <mesh geometry={nodes.pCube20_Colors_0.geometry} material={materials['Colors.009']} position={[-120.931, 49.327, -100]} />
      <mesh geometry={nodes.pCube21_Colors_0.geometry} material={materials['Colors.009']} position={[-120.931, 23.043, -100]} />
      <mesh geometry={nodes.Picture1_Colors_0001.geometry} material={materials['Colors.009']} position={[-172.464, 140, 100]} scale={[1, 2, 2]} />
      <mesh geometry={nodes.Picture2_Colors_0001.geometry} material={materials['Colors.009']} position={[-172.464, 140, 0]} scale={[1, 2, 2]} />
      <mesh geometry={nodes.Picture3_Colors_0001.geometry} material={materials['Colors.009']} position={[-172.464, 140, -100]} scale={[1, 2, 2]} />
      <mesh geometry={nodes.Walls_Colors_0002.geometry} material={materials['Colors.009']} />
    </group>
    <OrthographicCamera makeDefault={false} far={1000} near={0.1} position={[0.743, 5.088, 5.667]} rotation={[-1.399, -1.047, -1.425]} scale={78.035} />
  </group>
  );
}
