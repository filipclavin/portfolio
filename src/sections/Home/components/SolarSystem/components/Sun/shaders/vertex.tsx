import { simplexNoise3D } from "@/utils/shaderHelpers/simplexNoise";

const vertexShader = `
  ${simplexNoise3D}

  uniform float time;

  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec2 vUv;

  vec3 distort() {
    float n = simplexNoise3D(vPosition);
    float n2 = simplexNoise3D(vPosition * 2.0);
    float n3 = simplexNoise3D(vPosition * 3.0);

    n += sin(time * n);
    n2 += sin(time * n2);
    n3 += sin(time * n3);

    return vec3(n);
  }

  void main() {
    vPosition = position;
    vNormal = normal;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export default vertexShader;
