import { simplexNoise3D } from "@/utils/shaderHelpers/simplexNoise";

const fragmentShader = `
  ${simplexNoise3D}

  #define M_PI 3.1415926535897932384626433832795

  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec2 vUv;
  varying vec4 vClipPosition;

  uniform float time;
  uniform vec2 resolution;
  uniform vec2 mousePosition;

  vec3 star() {
    float n = simplexNoise3D(vPosition);

    vec3 ndc = vClipPosition.xyz / vClipPosition.w; // Normalized Device Coordinates
    vec2 screenPosition = (ndc.xy * 0.5 + 0.5) * resolution;
    vec2 mousePosition = mousePosition;
    mousePosition.y = resolution.y - mousePosition.y;
    float dist = distance(screenPosition, mousePosition);
    float radius = 200.0;

    float starFrag = step(0.8 + smoothstep(0.0, radius, dist) * 0.1, n);
    
    vec3 color = vec3(0.0);
    if (starFrag == 1.0) {
      float t = ((2.0/M_PI) * asin(sin(time * 0.02)) + 2.0) * 100.0;

      starFrag /= 2.0;
      starFrag += sin(t * simplexNoise3D(vNormal));
      
      color = vec3(starFrag);
      
      color.r += n * 0.125;
      color.g += simplexNoise3D(vPosition + 1.0) * 0.125;
      color.b += simplexNoise3D(vPosition + 2.0) * 0.125;

    }

    return color;
  }
    
  void main() {
    vec3 starColor = star();

    gl_FragColor = vec4(starColor, 1.0);
  }
`;

export default fragmentShader;
