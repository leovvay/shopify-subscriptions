export const breakpoints = [768, 1024, 1280];

export const getNewTheme = () => {
  return {
    breakpoints: breakpoints.map(bp => `${bp}px`),
    transitions: { fast: '0.15s ease-out', subtle: '0.9s ease-out' },
    borderRadius: {
      small: '2px',
      regular: '4px',
      semiLarge: '6px',
      large: '8px',
    },
  };
};

export type Theme = ReturnType<typeof getNewTheme>;
