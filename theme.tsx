import {
  extendTheme,
  StyleFunctionProps,
  type ThemeConfig,
} from '@chakra-ui/react';

import { switchTheme } from './components/footer/elements/switch';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  breakpoints: {
    sm: '30rem',
    md: '50.001rem',
    /* 
    Maybe a bit hacky, but avoids
    the problem of double versions
    on the breakpoint value.
    */
    lg: '75rem',
    xl: '100rem',
    '2xl': '150rem'
  },
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
    green00noswap: '#00837D',
    green10noswap: '#C8FAFF',
    black10: '#101326',
  },
  // SemanticTokens is used when you want different colors for 'light' and 'dark' mode.
  semanticTokens: {
    borders: {
      drawer: {
        default: '0.125rem solid #00837D',
        _dark: '0.125rem solid #C8FAFF',
      },
    },
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
      blacktogreen: {
        default: '#000000',
        _dark: '#C8FAFF',
      },
      greentowhite: {
        default: '#00837D',
        _dark: '#FFFFFF',
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
  styles: (props: StyleFunctionProps) => ({
    global: {
      body: {
        bg: props.colorMode === 'light' ? '#FFFFFF' : '#101326',
      },
    },
  }),
  components: {
    Switch: switchTheme,
    Link: {
      variants: {
        hamburger: {
          fontSize: '2xl',
          color: 'green00',
          textDecoration: 'none',
        },
        hamburgermenu: {
          fontSize: 'xl',
          color: 'green00',
          width: '100%',
        },
        nav: {
          fontSize: 'md',
        },
        navmenu: {
          fontSize: 'md',
          width: '100%',
          py: 'min',
          pl: 1,
        },
      },
    },
  },
});

export default theme;
