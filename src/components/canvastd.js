import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
import { AmongUs, SpinningMesh } from "./three/threeassets";
import { EffectComposer, Vignette } from "react-postprocessing";
import { isMobile } from "react-device-detect";
export default function CanvasTd({ enableMove }) {
  return (
    <Canvas className="canvas" camera={{ position: [0, 1, 6], fov: 60 }}>
      {!isMobile ? (
        <EffectComposer>
          <Vignette eskil={false} offset={0.4} darkness={1.1} />
        </EffectComposer>
      ) : null}
      <Suspense fallback={null}>
        <group>
          <SpinningMesh />
          <AmongUs />
        </group>
      </Suspense>
      <OrbitControls enabled={enableMove} />
    </Canvas>
  );
}
