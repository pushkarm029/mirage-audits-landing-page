'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function RotatingM() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4; // Slow rotation
      groupRef.current.rotation.x += delta * 0.005; // Slow rotation
    }
  });

  // Create M shape using geometric approach
  const MShape = () => {
    const shape = new THREE.Shape();
    
    // Create M shape path
    shape.moveTo(-1, -1.5);
    shape.lineTo(-1, 1.5);
    shape.lineTo(-0.6, 1.5);
    shape.lineTo(-0.6, 0.5);
    shape.lineTo(0, 1.2);
    shape.lineTo(0.6, 0.5);
    shape.lineTo(0.6, 1.5);
    shape.lineTo(1, 1.5);
    shape.lineTo(1, -1.5);
    shape.lineTo(0.6, -1.5);
    shape.lineTo(0.6, 0.2);
    shape.lineTo(0, -0.5);
    shape.lineTo(-0.6, 0.2);
    shape.lineTo(-0.6, -1.5);
    shape.lineTo(-1, -1.5);
    
    return shape;
  };

  const extrudeSettings = {
    depth: 0.3,
    bevelEnabled: true,
    bevelSegments: 8,
    steps: 1,
    bevelSize: 0.05,
    bevelThickness: 0.05
  };

  return (
    <group ref={groupRef}>
      <mesh>
        <extrudeGeometry args={[MShape(), extrudeSettings]} />
        <meshPhysicalMaterial
          color="#3B82F6"
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0}
          reflectivity={1}
          transmission={0}
          envMapIntensity={2}
        />
      </mesh>
    </group>
  );
}

function LoadingFallback() {
  return (
    <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-full flex items-center justify-center">
      <div className="w-32 h-32 bg-blue-600/30 rounded-full flex items-center justify-center">
        <span className="text-blue-400 text-6xl font-bold">M</span>
      </div>
    </div>
  );
}

export default function MirageM3D() {
  return (
    <div className="h-fit relative ml-auto md:w-2/5 flex items-center justify-center md:my-[93px]">
      <div className="w-64 h-64">
        <Suspense fallback={<LoadingFallback />}>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            style={{ width: '100%', height: '100%' }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight 
              position={[10, 10, 5]} 
              intensity={2}
              color="#60A5FA"
            />
            <pointLight 
              position={[-10, -10, -5]} 
              intensity={1}
              color="#3B82F6"
            />
            <RotatingM />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
}