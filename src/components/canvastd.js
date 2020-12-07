import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
import { AmongUs, SpinningMesh } from "./three/threeassets";
import { EffectComposer, Vignette } from "react-postprocessing";

export default function CanvasTd({ enableMove }) {
  return (
    <Canvas className="canvas" camera={{ position: [0, 1, 6], fov: 60 }}>
      <EffectComposer>
        <Vignette eskil={false} offset={0.4} darkness={1.1} />
        <SpinningMesh />
        <Suspense fallback={null}>
          <group>
            <AmongUs />
          </group>
        </Suspense>
      </EffectComposer>
      <OrbitControls enabled={enableMove} />
    </Canvas>
  );
}
