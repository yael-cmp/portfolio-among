import React, { useRef } from "react";
import { Stars, useGLTFLoader } from "drei";
import { useFrame } from "react-three-fiber";
import model from "../assets/models/among2.gltf";
const SpinningMesh = ({ position = [0, 0, 0] }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.002));
  return (
    <mesh position={position} ref={mesh}>
      <Stars factor={4} count={2000}/>
    </mesh>
  );
};

function AmongUs() {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.z = mesh.current.rotation.x += 0.02));
  let gltf = useGLTFLoader(model, true);
  // wrap gltf in primitive.
  return (
    <mesh castShadow rotation={[0,.7,0]} scale={[.8,.8,.8]} ref={mesh}>
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
}

export { SpinningMesh, AmongUs };
