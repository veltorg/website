import { Switch, useColorMode } from "@chakra-ui/react";
import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyleTrack = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    bg: `${c}.200`,
    _checked: {
      bg: `${c}.200`,
    },
    _dark: {
      bg: `${c}.900`,
      _checked: {
        bg: `${c}.900`,
      },
    },
  };
});
const baseStyle = definePartsStyle((props) => ({
  // define the part you're going to style
  container: {
    // ...
  },
  thumb: {
    bg: "green.10",
    // let's also provide dark mode alternatives
    _dark: {
      bg: "gray.900",
    },
  },
  track: baseStyleTrack(props),
}));

export const switchTheme = defineMultiStyleConfig({ baseStyle });

export const Switches: React.FC = ({}) => {
  const { colorMode, setColorMode } = useColorMode();
  const colorswap = colorMode === "dark" ? "light" : "dark";
  return (
    <Switch
      borderRadius="sm"
      aria-label={"Mørk-modus"}
      size="lg"
      onChange={() => setColorMode(colorswap)}
    />
  );
};
