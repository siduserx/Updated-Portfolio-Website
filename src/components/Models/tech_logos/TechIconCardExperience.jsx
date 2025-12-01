import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function RotatingModel({ model }) {
  const scene = useGLTF(model.modelPath);
  const ref = useRef();

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.01;
  });

  return (
    <group ref={ref} scale={model.scale} rotation={model.rotation}>
      <primitive object={scene.scene} />
    </group>
  );
}

const TechIconCardExperience = ({ model }) => {
  return (
    <div style={{ width: "100%", height: "120px" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 30 }} style={{ pointerEvents: "none" }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 5]} intensity={0.8} />
        
        <Suspense fallback={null}>
          <RotatingModel model={model} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TechIconCardExperience;
  