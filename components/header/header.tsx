import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Hide,
  Highlight,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  textDecoration,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { Hamburger } from './elements/hamburger';
import { Logo } from './elements/logo';
import { LogoDark } from './elements/logo-dark';
import { HamburgerDark } from './elements/hamburger-dark';
import NextLink from 'next/link';
import { DesktopLogo } from './elements/desktop-logo';
import { DesktopLogoDark } from './elements/desktop-logo-dark';

export const Header: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logoInput = colorMode === 'light' ? <Logo /> : <LogoDark />;
  const desktopLogoInput =
    colorMode === 'light' ? <DesktopLogo /> : <DesktopLogoDark />;
  const burgerInput = colorMode === 'light' ? <Hamburger /> : <HamburgerDark />;
  return (
    <Flex>
      <Flex
        p={{ base: 3, md: 4, lg: 5 }}
        justifyContent="space-between"
        width="100%"
      >
        <Show above="md">
          <Link as={NextLink} href="/">
            {desktopLogoInput}
          </Link>
        </Show>
        <Show below="md">
          <Link as={NextLink} href="/">
            {logoInput}
          </Link>
        </Show>
      </Flex>
    </Flex>
  );
};
