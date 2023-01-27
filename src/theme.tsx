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
  fonts: {
    heading: 'Inter',
    body: 'Inter',
    mono: 'Inter',
  },
  components: {
    Container,
  },
});
