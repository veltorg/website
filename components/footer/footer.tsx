import { Container, Flex, Image, Show, useColorMode } from '@chakra-ui/react';
import { Freshworks } from './elements/freshworks';
import { FreshworksDark } from './elements/freshworks-dark';
import { Switches } from './elements/switch';
import { LogoDark } from '../header/elements/logo-dark';
import { Logo } from '../header/elements/logo';

export const Footer: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode();
  const freshLogo = colorMode === 'light' ? <Freshworks /> : <FreshworksDark />;
  const logoInput = colorMode === 'light' ? <Logo /> : <LogoDark/>
  return (
    <Flex width='100%' m="0rem" p="0rem" flexDirection='column'>
      <Show above="md">
        <Flex backgroundColor='green10' width='100%' height='30rem'>
          poaw
        </Flex>
      </Show>
    <Show below="md">
    <Flex sx={{ flexDirection: 'column', p: 3, gap: 4, mt: 2 }}>
      <Flex sx={{ alignItems: 'center', justifyContent: 'center', gap: 1 }}>
        {freshLogo}
      </Flex>
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Switches />
      </Flex>
    </Flex>
    </Show>
    </Flex>
  );
};
