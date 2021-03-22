import {
  css,
  Interpolation,
  ThemedStyledProps,
  SimpleInterpolation,
} from 'styled-components/macro';
import { breakpoints, Theme } from './theme';

const mediaQueries = {
  mobile: breakpoints[0] - 1,
  tablet: breakpoints[1] - 1,
  desktop: breakpoints[2] - 1,
};

type MQKeys = keyof typeof mediaQueries;
type FunctionProps<P = Record<string, unknown>> = ThemedStyledProps<P, Theme>;
type MediaQuery = {
  [key in MQKeys]: <P>(
    strings: TemplateStringsArray,
    ...args: Interpolation<FunctionProps<P>>[]
  ) => SimpleInterpolation;
};

export const media = Object.keys(mediaQueries).reduce<MediaQuery>(
  (acc, label) => {
    // eslint-disable-next-line no-param-reassign
    acc[label as MQKeys] = (
      strings: TemplateStringsArray,
      ...args: any[]
    ) => css`
      @media (max-width: ${mediaQueries[label as MQKeys]}px) {
        ${css(strings, ...args)};
      }
    `;

    return acc;
  },
  {} as any,
);
