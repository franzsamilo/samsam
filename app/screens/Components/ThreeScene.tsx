"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";

function ThreeScene() {
  const meshRef = useRef<Mesh>(null);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}

export default ThreeScene;
