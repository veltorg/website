import {
  defineStyleConfig,
  extendTheme,
  StyleFunctionProps,
  useColorMode,
  useColorModeValue,
  type ThemeConfig,
} from "@chakra-ui/react";
import defaultTheme from "@chakra-ui/theme";
import { switchTheme } from "./components/footer/switch";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  space: ["0.5em", "0.625em", "1em", "2em", "3em"],
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
        default: "2px solid #00837D",
        _dark: "2px solid #C8FAFF"
      }
    },
    colors: {
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
