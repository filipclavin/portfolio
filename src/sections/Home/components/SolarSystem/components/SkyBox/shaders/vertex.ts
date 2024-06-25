const vertexShader = `
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec2 vUv;
  varying vec4 vClipPosition;

  void main() {
    vPosition = position;
    vNormal = normal;
    vUv = uv;
    vClipPosition = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = vClipPosition;
  }
`;

export default vertexShader;
