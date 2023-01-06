import {
  FormControl,
  FormLabel,
  Switch,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle(props => ({
  // define the part you're going to style
  container: {
    // ...
  },
  thumb: {
    borderRadius: 'md',
    bg: 'green00noswap',

    // let's also provide dark mode alternatives
    _dark: {
      bg: 'green10noswap',
    },
  },
  track: baseStyleTrack(props),
}));

export const switchTheme = defineMultiStyleConfig({ baseStyle });

const baseStyleTrack = defineStyle(props => {
  return {
    bg: `green10noswap`,
    borderRadius: 'md',
    //color: 'green10',
    _checked: {
      //color: 'green10',
      bg: 'green00noswap',
      borderRadius: 'md',
    },
    _dark: {
      //color: 'green10',
      bg: `green10noswap`,
      borderRadius: 'md',
      _checked: {
        //color: 'green10',
        bg: `green00noswap`,
        borderRadius: 'md',
      },
    },
  };
});

export const Switches: React.FC = ({}) => {
  const { colorMode, setColorMode } = useColorMode();
  const colorSwap = colorMode === 'dark' ? 'light' : 'dark';
  const checkBox = colorMode === 'dark' ? true : false;
  return (
    <FormControl
      display={'flex'}
      gap={2}
      flexDirection={'row'}
      justifyContent="center"
      sx={{ color: 'greentowhite' }}
      label="Mørk Modus"
      fontFamily={'Inter'}
    >
      <Switch
        id="dark-mode"
        size="lg"
        sx={{ color: 'green00' }}
        isChecked={checkBox}
        onChange={() => setColorMode(colorSwap)}
      />
      <FormLabel htmlFor="dark-mode">Mørk Modus</FormLabel>
    </FormControl>
  );
};
