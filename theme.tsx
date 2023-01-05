
import {
  extendTheme,
  StyleFunctionProps,
  type ThemeConfig,
} from "@chakra-ui/react";

import { switchTheme } from "./components/footer/switch";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  breakpoints: {
    sm: '30rem',
    md: '50rem',
    lg: '75rem',
    xl: '100rem'
  },
  space: {
    0: "0.5em",
    1: "0.625em",
    2: "1em",
    3: "2em",
    4: "3em"
  }, 
  radii: ["1em"],
  colors: {
    pink00: "#E1CCFF",
    blue00: "#454BFF",
    green00noswap: "#00837D",
    green10noswap: "#C8FAFF",
    black10: "#101326",
  },
  // SemanticTokens is used when you want different colors for 'light' and 'dark' mode.
  semanticTokens: {
    borders: {
      drawer: {
        default: "0.125em solid #00837D",
        _dark: "0.125em solid #C8FAFF"
      }
    },
    colors: {
    background: {
      default: "#FFFFFF",
      _dark: "#101326",
      },
    green00: {
      default: "#00837D",
      _dark: "#C8FAFF",
    },
    green10: {
      default: "#C8FAFF",
      _dark: "#00837D",
    },
    blacktogreen: {
      default: "#000000",
      _dark: "#C8FAFF",
    },
    greentowhite: {
      default: "#00837D",
      _dark: "#FFFFFF"
    }
  },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
    mono: "Inter",
  },
  textStyles: {
    normal: {
      font: "Inter",
      fontWeight: "normal",
      fontSize: "sm",
      lineHeight: "shorter",
    },
    link: {
      fontSize: "sm",
      lineHeight: "shorter",
      textDecoration: "underline",
    },
    header: {
      fontWeight: "extrabold",
      fontSize: "2xl",
      lineHeight: "shorter",
    },
  },
  styles: (props: StyleFunctionProps) => ({
    global: {
      body: {
        bg: props.colorMode === "light" ? "#FFFFFF" : "#101326",
      },
    },
  }),
  components: {
    Switch: switchTheme,
  },
});

export default theme;
