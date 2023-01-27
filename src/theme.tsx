import { type ThemeConfig, extendTheme } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const Container = {
  baseStyle: {
    maxW: '80ch',
  },
};

export const theme = extendTheme({
  config,
  space: {
    min: '0.2rem',
    0: '0.5rem',
    1: '0.625rem',
    2: '1rem',
    3: '2rem',
    4: '3rem',
    5: '4rem',
    6: '5rem',
    7: '7rem',
    8: '9rem',
  },
  radii: {
    sm: '0.4rem',
    md: '1rem',
    lg: '2rem',
  },
  colors: {
    pink00: '#E1CCFF',
    blue00: '#454BFF',
    black10: '#101326',
  },
  // SemanticTokens is used when you want different colors for 'light' and 'dark' mode.
  semanticTokens: {
    colors: {
      background: {
        default: '#FFFFFF',
        _dark: '#101326',
      },
      green00: {
        default: '#00837D',
        _dark: '#C8FAFF',
      },
      green10: {
        default: '#C8FAFF',
        _dark: '#00837D',
      },
    },
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
    mono: 'Inter',
  },
  textStyles: {
    normal: {
      font: 'Inter',
      fontWeight: 'normal',
      fontSize: 'sm',
      lineHeight: 'shorter',
    },
    link: {
      fontSize: 'sm',
      lineHeight: 'shorter',
      textDecoration: 'underline',
    },
    header: {
      fontWeight: 'extrabold',
      fontSize: '2xl',
      lineHeight: 'shorter',
    },
  },
  components: {
    Container,
  },
});
