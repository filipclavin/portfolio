import { simplexNoise3D } from "@/utils/shaderHelpers/simplexNoise";
import { mix3 } from "@/utils/shaderHelpers/mix";

const fragmentShader = `
  ${simplexNoise3D}
  ${mix3}

  #define M_PI 3.1415926535897932384626433832795

  uniform float time;

  varying vec3 vPosition;
  varying vec3 vNormal;

  vec3 color() {
    float t = (sin(time) + 3.0) * 6.0;
    float n = simplexNoise3D(time * 0.1 + vNormal * 15.0);
    n += sin(t * n);
    return mix3(vec3(1.0, 0.35, 0.0), vec3(1.0, 0.7, 0.0), vec3(1.0, 1.0, 0.5), n + 0.5);
  }

  void main() {
    vec3 surfaceColor = color();

    gl_FragColor = vec4(surfaceColor, 1.0);
  }
`;

export default fragmentShader;
