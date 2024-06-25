import { ShapeProps, Sphere } from "@react-three/drei";
import { Mesh, ShaderMaterial, SphereGeometry } from "three";
import vertexShader from "./shaders/vertex";
import fragmentShader from "./shaders/fragment";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import { BLOOM_LAYER } from "@/constants";

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

  const ref = useRef<Mesh>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.layers.enable(BLOOM_LAYER);
    }
  }, []);

  return (
    <Sphere
      ref={ref}
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
  );
};

export default Sun;
