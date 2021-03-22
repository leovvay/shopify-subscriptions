declare module 'lottie-web' {
  export interface Animation {
    playSegments: (...arg: any[]) => void;
  }
  function loadAnimation(...arg: any[]): Animation;

  export = {
    loadAnimation,
  };
}
