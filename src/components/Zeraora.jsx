import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

// export const FLOOR_HEIGHT = 2.3;
// export const NB_FLOORS = 3;

export function Zeraora(props) { 
    const { nodes, materials } = useGLTF("./models/zeraora.glb");
    const ref = useRef();
    const tl = useRef();

    const zeraoraRef = useRef()
    const scroll = useScroll();
  
    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration());
      });

    useLayoutEffect(() => {
        tl.current = gsap.timeline();
    })


  return (
    <group
      {...props}
      dispose={null}
      ref={ref}
    >
      <group scale={0.012}>
        <group ref={zeraoraRef}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh geometry={nodes.Object_6.geometry} material={materials['pm0888_00_Eye1_tga_png-material']} skeleton={nodes.Object_6.skeleton} />
        <skinnedMesh geometry={nodes.Object_8.geometry} material={materials['pm0888_00_BodyA1_tga_png-material']} skeleton={nodes.Object_8.skeleton} />
        <skinnedMesh geometry={nodes.Object_10.geometry} material={materials['pm0888_00_BodyB1_tga_png-material']} skeleton={nodes.Object_10.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/zeraora.glb')
