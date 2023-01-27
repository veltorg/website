import { type ThemeConfig, extendTheme } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  cssVarPrefix: 'velt',
};

const Container = {
  baseStyle: {
    maxW: '80ch',
    px: 'l',
  },
};
const Divider = {
  baseStyle: {
    borderWidth: '10px',
    borderStyle: 'solid',
    borderColor: 'marker',
  },
};

const space = {
  '3xs': 'clamp(0.31rem, calc(0.31rem + 0vw), 0.31rem)',
  '2xs': 'clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem)',
  xs: 'clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem)',
  s: 'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)',
  m: 'clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem)',
  l: 'clamp(2.25rem, calc(2.16rem + 0.43vw), 2.5rem)',
  xl: 'clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem)',
  '2xl': 'clamp(4.5rem, calc(4.33rem + 0.87vw), 5rem)',
  '3xl': 'clamp(6.75rem, calc(6.49rem + 1.3vw), 7.5rem)',

  heroHeight: 'clamp(20rem, 35vw, 28rem)',
  logoHeight: 'clamp(2rem, 8vw, 4rem)',
};

export const theme = extendTheme({
  config,
  fontsize: {
    // xs: '0.75rem',
    sm: 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
    md: 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
    lg: 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
    xl: 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
    '2xl': 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
    '3xl': 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
    '4xl': 'clamp(3.05rem, 3.54vw + 2.17rem, 5rem)',
    // '5xl': '3rem',
    // '6xl': '3.75rem',
    // '7xl': '4.5rem',
    // '8xl': '6rem',
    // '9xl': '8rem',
  },
  colors: {
    liberty: {
      50: 'rgba(229, 230, 255, 1)',
      100: 'rgba(204, 206, 255, 1)',
      200: 'rgba(102, 107, 255, 1)',
      300: 'rgba(102, 107, 255, 1)',
      400: 'rgba(51, 58, 255, 1)',
      500: 'rgba(69, 75, 255, 1)',
      600: 'rgba(0, 7, 204, 1)',
      700: 'rgba(0, 5, 153, 1)',
      800: 'rgba(0, 3, 102, 1)',
      900: 'rgba(0, 2, 51, 1)',
    },
    pale: {
      50: 'rgba(240, 229, 255, 1)',
      100: 'rgba(225, 204, 255, 1)',
      200: 'rgba(195, 153, 255, 1)',
      300: 'rgba(166, 102, 255, 1)',
      400: 'rgba(136, 51, 255, 1)',
      600: 'rgba(85, 0, 204, 1)',
      700: 'rgba(64, 0, 153, 1)',
      800: 'rgba(42, 0, 102, 1)',
      900: 'rgba(21, 0, 51, 1)',
    },
  },
  semanticTokens: {
    colors: {
      base: 'liberty.800',
      text: 'base',
      marker: 'pale.100',
      muted: 'liberty.200',

      'chakra-body-text': { _light: 'text' },
      'chakra-placeholder-color': { _light: 'text' },
    },
  },
  fonts: {
    heading: "'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
  },
  space,
  sizes: {
    ...space,
    max: 'max-content',
    min: 'min-content',

    container: {
      m: '60rem',
    },
  },
  components: {
    Container,
    Divider,
  },
  styles: {
    global: {
      '*': {
        fontSmoothing: 'antialiased',
      },
    },
  },
});
