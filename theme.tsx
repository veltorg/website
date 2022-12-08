
import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {

}


const theme = extendTheme({ 
    config: {
    initialColorMode: "system",
    useSystemColorMode: true,
    },
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
      fontSizes: [14, 24],
      text: {
        normal: {
          fontWeight: "400",
          fontSize: 0,
        },
        header: {
          fontWeight: "800",
          fontSize: 1,
        },
      },
}
);

export default theme