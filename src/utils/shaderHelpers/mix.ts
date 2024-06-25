export const mix3 = `
  vec3 mix3(vec3 v1, vec3 v2, vec3 v3, float alpha) {
    vec3 tmp = mix(v1, v2, clamp(alpha, 0.0, 1.0));
    return mix(tmp, v3, clamp(alpha - 1.0, 0.0, 1.0));
  }
`;
