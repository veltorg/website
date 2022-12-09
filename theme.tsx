import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  space: ["0.5em", "0.625em", "1em", "2em", "3em"],
  radii: ["1em"],
  colors: {
    background: "#FFFFFF",
    pink00: "#E1CCFF",
    blue00: "#454BFF",
    green00: "#00837D",
    green00noswap: "#00837D",
    green10: "#C8FAFF",
    green10noswap: "#C8FAFF",
    black10: "#101326",
    modes: {
      dark: {
        background: "#101326",
        green00: "#C8FAFF",
        green10: "#00837D",
        black10: "#101326",
      },
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  textStyles: {
    normal: {
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
  styles: {
    global: {
      body: {},
    },
  },
});

export default theme;
