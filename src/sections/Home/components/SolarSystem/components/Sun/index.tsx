import { ShapeProps, Sphere } from "@react-three/drei";
import {
  Layers,
  Mesh,
  PointLight,
  ShaderMaterial,
  SphereGeometry,
} from "three";
import vertexShader from "./shaders/vertex";
import fragmentShader from "./shaders/fragment";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const material = new ShaderMaterial({
  uniforms: {
    time: { value: 0.0 },
  },
  vertexShader,
  fragmentShader,
});

const Sun = (props: ShapeProps<typeof SphereGeometry>) => {
  useFrame(({ clock }) => {
    material.uniforms.time.value = clock.getElapsedTime();
  });

  const sunMeshRef = useRef<Mesh>(null);
  const pointLightRef = useRef<PointLight>(null);

  return (
    <>
      <Sphere
        ref={sunMeshRef}
        args={[1, 128, 256]}
        position={[0, 0, 0]}
        material={material}
        onPointerDown={() => {
          console.log("clicked");
        }}
        onPointerEnter={() => {
          document.body.style.cursor = "pointer";
        }}
        {...props}
      />
      <pointLight
        ref={pointLightRef}
        position={[0, 0, 0]}
        intensity={100}
        layers={new Layers()}
        color={"#fff"}
      />
    </>
  );
};

export default Sun;
