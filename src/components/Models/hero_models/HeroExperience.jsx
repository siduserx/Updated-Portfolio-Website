import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { useState, Suspense } from "react";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  // 🔥 NEW STATE → enables OrbitControls only when user taps the button
  const [controlsEnabled, setControlsEnabled] = useState(false);

  return (
    <div className="relative w-full h-full">

      {/* 🚀 MOBILE BUTTONS */}
      {isMobile && (
        <div className="absolute z-50 top-4 right-4">
          {!controlsEnabled ? (
            <button
              onClick={() => setControlsEnabled(true)}
              className="px-4 py-2 rounded-lg bg-white/20 text-white text-sm backdrop-blur-md"
            >
              Enable 3D Control
            </button>
          ) : (
            <button
              onClick={() => setControlsEnabled(false)}
              className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm"
            >
              Disable 3D Control
            </button>
          )}
        </div>
      )}

      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        style={{ touchAction: "pan-y" }} // allow scrolling
      >
        <ambientLight intensity={0.2} color="#1a1a40" />

        {/* 🎮 ORBIT CONTROLS → only active if enabled */}
        <OrbitControls
          enabled={!isMobile || controlsEnabled} // 🔥 KEY LOGIC
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        <Suspense fallback={null}>
          <HeroLights />
          <Particles count={100} />

          <group
            scale={isMobile ? 0.7 : 1}
            position={[0, -3.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <Room />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroExperience;
