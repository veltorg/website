import {
  Container,
  Flex,
  Grid,
  Image,
  Link,
  ListItem,
  Show,
  Text,
  UnorderedList,
  useColorMode,
} from '@chakra-ui/react';
import { Freshworks } from './elements/freshworks';
import { FreshworksDark } from './elements/freshworks-dark';
import { Switches } from './elements/switch';
import NextLink from 'next/link';
import { DesktopLogo } from '../header/elements/desktop-logo';
import { DesktopLogoDark } from '../header/elements/desktop-logo-dark';

export const Footer: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode();
  const freshLogo = colorMode === 'light' ? <Freshworks /> : <FreshworksDark />;
  const logoInput =
    colorMode === 'light' ? <DesktopLogo /> : <DesktopLogoDark />;
  return (
    <Flex width="100%" m="0rem" p="0rem" flexDirection="column">
        <Flex sx={{ flexDirection: 'column', p: 3, gap: 4, mt: 2 }}>
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
    </Flex>
  );
};
