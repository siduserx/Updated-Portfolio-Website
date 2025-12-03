// HeroExperience.jsx (insert / replace relevant parts)
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense, useRef } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  // ref for OrbitControls so we can enable/disable it
  const controlsRef = useRef(null);

  // gesture state ref (won't retrigger renders)
  const gesture = useRef({
    startX: 0,
    startY: 0,
    active: false,
    decided: false, // whether we already decided (horizontal vs vertical)
  });

  // onCreated callback to set canvas touch-action and attach listeners
  const handleCreated = (state) => {
    const canvas = state.gl.domElement;

    // allow vertical scrolling by default
    canvas.style.touchAction = "pan-y";

    // Helper listeners: pointerdown / pointermove / pointerup
    const onPointerDown = (e) => {
      // Use clientX/clientY for pointer events
      gesture.current.startX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      gesture.current.startY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
      gesture.current.active = true;
      gesture.current.decided = false;

      // On mobile default: disable controls until we decide
      if (controlsRef.current) controlsRef.current.enabled = false;
    };

    const onPointerMove = (e) => {
      if (!gesture.current.active || gesture.current.decided) return;

      const currentX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      const currentY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
      const dx = currentX - gesture.current.startX;
      const dy = currentY - gesture.current.startY;

      // small deadzone to avoid noisy triggers
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;

      // Decide direction: horizontal -> enable controls, vertical -> keep disabled
      if (Math.abs(dx) > Math.abs(dy)) {
        // mostly horizontal -> enable rotating (but keep zoom disabled)
        if (controlsRef.current) {
          controlsRef.current.enabled = true;
          // ensure zoom is disabled on mobile
          controlsRef.current.enableZoom = !isMobile && !isTablet;
        }
      } else {
        // mostly vertical -> ensure controls disabled so page scrolls
        if (controlsRef.current) controlsRef.current.enabled = false;
      }

      gesture.current.decided = true;
    };

    const onPointerUp = () => {
      gesture.current.active = false;
      gesture.current.decided = false;
      // disable controls after interaction to avoid blocking scroll long-term
      if (controlsRef.current) controlsRef.current.enabled = false;
    };

    // Use passive listeners where appropriate so we don't block main thread
    canvas.addEventListener("pointerdown", onPointerDown, { passive: true });
    canvas.addEventListener("pointermove", onPointerMove, { passive: true });
    canvas.addEventListener("pointerup", onPointerUp, { passive: true });
    canvas.addEventListener("pointercancel", onPointerUp, { passive: true });
    // for older mobile fallback (touch events)
    canvas.addEventListener("touchstart", onPointerDown, { passive: true });
    canvas.addEventListener("touchmove", onPointerMove, { passive: true });
    canvas.addEventListener("touchend", onPointerUp, { passive: true });

    // cleanup function (React Three onCreated does not accept return cleanup,
    // so put clean up on window unload as safe fallback - but you can
    // alternatively use useEffect/refs if you mount Canvas inside this component)
    const cleanup = () => {
      try {
        canvas.removeEventListener("pointerdown", onPointerDown);
        canvas.removeEventListener("pointermove", onPointerMove);
        canvas.removeEventListener("pointerup", onPointerUp);
        canvas.removeEventListener("pointercancel", onPointerUp);
        canvas.removeEventListener("touchstart", onPointerDown);
        canvas.removeEventListener("touchmove", onPointerMove);
        canvas.removeEventListener("touchend", onPointerUp);
      } catch (err) {}
    };

    // attach cleanup to state.gl.domElement for manual call if needed
    // optional: store on state for later cleanup if you unmount Canvas
    canvas.__r3fCleanup = cleanup;
  };

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      onCreated={handleCreated}
      style={{ touchAction: "pan-y" }} // extra inline guarantee
    >
      <ambientLight intensity={0.2} color="#1a1a40" />

      {/* OrbitControls: start disabled on mobile, we toggle enabled in gesture handler */}
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={!isTablet && !isMobile} // disable zoom on smaller devices
        enableRotate={true}
        rotateSpeed={0.8}
        // optional: limit rotation vertically
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
  );
};

export default HeroExperience;
