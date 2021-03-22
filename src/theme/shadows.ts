const createShadowStyle = (shadows: [number, number, number, number][]) =>
  shadows
    .map(
      /* offset-x (ommited), offset-y, blur-radius, spread-radius, color */
      shadow =>
        `0 ${shadow[0]}px ${shadow[1]}px ${shadow[2]}px rgba(0,0,0,${shadow[3]})`,
    )
    .join(', ');

export const shadows = {
  shadowElevation0: 'none',
  shadowElevation1: createShadowStyle([
    [1, 2, 0, 0.16],
    [1, 4, 0, 0.12],
  ]),
  shadowElevation2: createShadowStyle([
    [1, 4, 0, 0.16],
    [4, 8, 0, 0.12],
  ]),
  shadowElevation3: createShadowStyle([
    [5, 8, 0, 0.22],
    [8, 24, 0, 0.14],
  ]),
  shadowElevation4: createShadowStyle([
    [12, 18, 0, 0.18],
    [16, 40, 0, 0.26],
  ]),
  shadowElevation16: createShadowStyle([
    [3, 6, 0, 0.08],
    [8, 16, 0, 0.14],
  ]),
};

export type Shadows = typeof shadows;
