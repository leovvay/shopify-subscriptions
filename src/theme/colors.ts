export const colors = {
  // Brand, can be used for both text and surface
  brandLowContrast: '#FFD4BE',
  brand: '#ED633F',
  brandHighContrast: '#A23C00',

  // Text
  textLowContrast: 'rgba(0,0,0,0.54)',
  textStandard: 'rgba(0, 0, 0, 0.75)',
  text: 'rgba(0,0,0,0.84)',
  textHighContrast: 'rgba(0,0,0,1)',
  textBrightTertiary: '#637282',
  textNeutral: 'rgba(0, 0, 0, 0.54)',
  textNeutralLight: 'rgba(255, 255, 255, 0.54)',

  // - States
  textDisabled: 'rgba(0,0,0,0.34)',
  textError: '#970C0C',
  textAlert: '#AC5505',
  textSuccess: '#047344',

  // Border
  borderError: '#F63D4E',

  // Surface
  surface: '#FFFFFF', // ui background
  surfaceFaded: '#F8F2F0',
  surfaceTagError: 'rgba(255, 32, 52, 0.22)',
  surfaceDark: '#1B1731',
  surfaceDarkSaturated: '#000230',
  surfaceVeryDark: '#0A061F',
  // - Elements
  cardDivider: 'rgba(0,0,0,0.08)',
  surfaceBorder: 'rgba(0,0,0,0.12)',
  surfaceLightBorder: 'rgba(255,255,255,0.12)',
  surfaceDivider: 'rgba(0,0,0,0.18)',
  surfaceDividerLight: '#ebebeb',
  surfaceInput: '#F5F5F5',
  overlayNeutral: 'rgba(0, 0, 0, 0.05)',
  progressGreen: '#019f79',

  // - Buttons
  skipButton: '#0000008a',
  brandClicked: '#BF3E1D',
  neutralDisabled: 'rgba(0,0,0,0.03)',

  // - States
  surfaceDisabled: 'rgba(0,0,0,0.15)',
  surfaceError: '#F6E3E3',
  surfaceAlert: '#FFEDD6',
  surfaceSuccess: '#D7F5E3',
  surfaceBorderHover: 'rgba(0,0,0,0.24)',

  // latest color nameing from design system
  //  use these colors for new designs
  // General
  transparent: 'transparent',
  // Brand
  brand100: '#FDE8E2',
  brand400: '#ED633F',
  brand500: '#DB5430',
  brand600: '#D14825',
  brand700: '#C93712',
  // Neutral
  neutral75: '#FAFAFA',
  neutral50: '#FFFFFF',
  neutral100: '#F5F5F5',
  neutral200: '#EAEAEA',
  neutral300: '#E1E1E1',
  neutral400: '#CACACA',
  neutral500: '#B3B3B3',
  neutral600: '#8E8E8E',
  neutral700: '#6E6E6E',
  neutral800: '#4B4B4B',
  neutral900: '#232323',
  neutralWhite: '#FFFFFF',
  // Blue
  blue100: '#CFE3FC',
  blue400: '#2680EB',
  blue500: '#1473E6',
  blue600: '#0D66D0',
  blue700: '#095ABA',
  // Green
  green100: '#CCECE4',
  green400: '#2D9D78',
  green500: '#268E6C',
  green600: '#12805C',
  green700: '#107154',
  // Yellow
  yellow100: '#FFE8D0',
  yellow400: '#EB8617',
  yellow500: '#DA7B11',
  yellow600: '#CB6F10',
  yellow700: '#BD640D',
  // Red
  red100: '#FCE3E5',
  red400: '#EC424F',
  red500: '#D7373F',
  red600: '#C9252D',
  red700: '#BB121A',
  // Purple
  purple100: '#EEE5FE',
  purple400: '#7E45ED',
  purple500: '#6F37D7',
  purple600: '#682BC8',
  purple700: '#6120BA',
  // Alias
  aliasHovered: 'rgba(0,0,0,0.04)',
  aliasPressed: 'rgba(0,0,0,0.08)',
};

export type Colors = typeof colors;
