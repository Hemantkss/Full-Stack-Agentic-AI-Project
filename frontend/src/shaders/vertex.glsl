uniform float uTime;
uniform float uPositionFrequency;
uniform float uTimeFrequency;
uniform float uStrength;

uniform float uWarpPositionFrequency;
uniform float uWarpTimeFrequency;
uniform float uWarpStrength;

attribute vec4 tangent;

varying float vWobble;

#include ./simplexNoise4d.glsl

// Function
float getWobble(vec3 position)
{
    vec3 warpePosition = position;

    warpePosition += simplexNoise4d(vec4(
        position * uWarpPositionFrequency,
        uTime * uWarpTimeFrequency
    )) * uWarpStrength;

    return simplexNoise4d(vec4(
        warpePosition * uPositionFrequency,   // xyz
        uTime * uTimeFrequency            // w
    )) * uStrength;
}

void main()
{
    vec3 biTangent = cross(normal, tangent.xyz);

    // Neighbours Position
    float shift = 0.01;
    vec3 positionA = csm_Position + tangent.xyz * shift;
    vec3 positionB = csm_Position + biTangent * shift;

    // Wobble
    float wobble = getWobble(csm_Position);
    csm_Position += wobble * normal;
    positionA    += getWobble(positionA) * normal;
    positionB    += getWobble(positionB) * normal;

    // Compute Normal
    vec3 toA = normalize(positionA - csm_Position);
    vec3 toB = normalize(positionB - csm_Position);
    csm_Normal = cross(toA, toB);

    // Varying
    vWobble = wobble / uStrength;
    
    // Set clip space position for this vertex:
    gl_Position = projectionMatrix * modelViewMatrix * vec4(csm_Position, 1.0);
}