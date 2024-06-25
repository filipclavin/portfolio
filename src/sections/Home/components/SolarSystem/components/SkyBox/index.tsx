import { ShapeProps, Sphere } from "@react-three/drei";
import { BackSide, Mesh, ShaderMaterial, SphereGeometry } from "three";
import fragmentShader from "./shaders/fragment";
import vertexShader from "./shaders/vertex";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const initMousePosition = {
  x: window.innerWidth + 1000,
  y: window.innerHeight + 1000,
};

const material = new ShaderMaterial({
  uniforms: {
    time: { value: 0 },
    resolution: { value: { x: 1.0, y: 1.0 } },
    mousePosition: {
      value: initMousePosition,
    },
  },
  vertexShader,
  fragmentShader,
  side: BackSide,
});

const handleResize = () => {
  material.uniforms.resolution.value = {
    x: window.innerWidth,
    y: window.innerHeight,
  };
};

const SkyBox = (props: ShapeProps<typeof SphereGeometry>) => {
  useEffect(() => {
    material.uniforms.resolution.value = {
      x: window.innerWidth,
      y: window.innerHeight,
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useFrame(({ clock }) => {
    material.uniforms.time.value = clock.getElapsedTime();
  });

  const meshRef = useRef<Mesh>(null);

  let grabbing = false;

  return (
    <Sphere
      ref={meshRef}
      args={[100, 32, 64]}
      position={[0, 0, 0]}
      material={material}
      onPointerMove={(e) => {
        material.uniforms.mousePosition.value = {
          x: e.x,
          y: e.y,
        };

        if (e.intersections[0].object.uuid === meshRef.current?.uuid) {
          document.body.style.cursor = grabbing ? "grabbing" : "grab";
        }
      }}
      onPointerLeave={() => {
        material.uniforms.mousePosition.value = initMousePosition;
      }}
      onPointerDown={(e) => {
        if (e.intersections[0].object.uuid === meshRef.current?.uuid) {
          e.stopPropagation();
          document.body.style.cursor = "grabbing";
        }
        grabbing = true;
      }}
      onPointerUp={(e) => {
        if (e.intersections[0].object.uuid === meshRef.current?.uuid) {
          e.stopPropagation();
          document.body.style.cursor = "grab";
        }
        grabbing = false;
      }}
      name="skybox"
      {...props}
    />
  );
};

export default SkyBox;
