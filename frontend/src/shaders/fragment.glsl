uniform vec3 uColorA;
uniform vec3 uColorB;

varying float vWobble;

void main()
{
    float colorMix = smoothstep(-1.0, 1.0, vWobble);

    // 🎨 rainbow / accent color
    vec3 wobbleColor = mix(uColorA, uColorB, colorMix);

    // 🪞 silver base (keeps metal reflections)
    vec3 silverBase = vec3(0.85);

    // ✅ MODULATE instead of replace
    csm_DiffuseColor.rgb *= mix(
        silverBase,
        wobbleColor,
        0.35               // rainbow strength (tune 0.2–0.4)
    );

    // ✨ shinier where wobble is strong
    csm_Roughness = mix(
        0.15,              // polished silver
        0.6,               // rough
        1.0 - colorMix
    );
}
