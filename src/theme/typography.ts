export type TypographyVariant =
  | 'title'
  | 'title4'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'paragraph'
  | 'paragraphCondensed'
  | 'body1'
  | 'body1Condensed'
  | 'body2'
  | 'caption'
  | 'button';

type TypographyVariants = { [key in TypographyVariant]: string | number };

export const fonts = {
  sansSerif:
    'SohneStudio, system-ui, -apple-system, Roboto, Arial, Lucida Grande, sans-serif',
  publicoHeadline: 'Publico Headline, Times, serif',
};

type FontSizes = {
  desktop: TypographyVariants;
  mobile: TypographyVariants;
};
export const fontSizes: FontSizes = {
  desktop: {
    title: '5rem',
    title4: '1.1rem',
    heading1: '3.4rem',
    heading2: '2.5rem',
    heading3: '2rem',
    heading4: '1.2rem',
    paragraph: '1.8rem',
    paragraphCondensed: '1.8rem',
    body1: '1.6rem',
    body1Condensed: '1.6rem',
    body2: '1.4rem',
    caption: '1.3rem',
    button: '1.4rem',
  },
  mobile: {
    title: '3.2rem',
    title4: '1.1rem',
    heading1: '2.5rem',
    heading2: '2rem',
    heading3: '1.8rem',
    heading4: '1.2rem',
    paragraph: '1.6rem',
    paragraphCondensed: '1.6rem',
    body1: '1.6rem',
    body1Condensed: '1.6rem',
    body2: '1.4rem',
    caption: '1.3rem',
    button: '1.4rem',
  },
};

type LineHeights = {
  desktop: TypographyVariants;
  mobile: TypographyVariants;
};
export const lineHeights: LineHeights = {
  desktop: {
    title: '5.6rem',
    title4: '1.6rem',
    heading1: '4rem',
    heading2: '3.2rem',
    heading3: '2.8rem',
    heading4: '1.6rem',
    paragraph: '2.8rem',
    paragraphCondensed: '2.4rem',
    body1: '2.4rem',
    body1Condensed: '2.0rem',
    body2: '2rem',
    caption: '1.6rem',
    button: '2rem',
  },
  mobile: {
    title: '4rem',
    title4: '1.6rem',
    heading1: '3.2rem',
    heading2: '2.8rem',
    heading3: '2.4rem',
    heading4: '1.6rem',
    paragraph: '2.4rem',
    paragraphCondensed: '2.0rem',
    body1: '2.4rem',
    body1Condensed: '2.0rem',
    body2: '2rem',
    caption: '1.6rem',
    button: '2rem',
  },
};

type LetterSpacing = {
  desktop: TypographyVariants;
  mobile: TypographyVariants;
};
export const letterSpacings: LetterSpacing = {
  desktop: {
    title: '0',
    title4: '1px',
    heading1: '0',
    heading2: '0',
    heading3: '0',
    heading4: '1px',
    paragraph: '0',
    paragraphCondensed: '0',
    body1: '0',
    body1Condensed: '0',
    body2: '0.1px',
    caption: '0.25px',
    button: '0.2px',
  },
  mobile: {
    title: '-0.2px',
    title4: '1px',
    heading1: '0',
    heading2: '0',
    heading3: '0',
    heading4: '1px',
    paragraph: '0',
    paragraphCondensed: '0',
    body1: '0',
    body1Condensed: '0',
    body2: '0.1px',
    caption: '0.25px',
    button: '0.2px',
  },
};
