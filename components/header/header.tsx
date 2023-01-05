import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
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
      <Show above="md">
        <Flex m={{ md: 4, lg: 5 }} justifyContent="space-between" width="100%">
          <Flex>{desktopLogoInput}</Flex>
          <Flex gap={{ md: 3, lg: 4 }} alignItems="end">
            <Link as={NextLink} href="/about" variant="nav">
              About us
            </Link>
            <Link as={NextLink} href="/products" variant="nav">
              Products
            </Link>

            <Menu
              /*Will be dropdown with
                Blog
                Courses
                Customes Stories
                Events
                Webinars
                */
            >
              <MenuButton as={Link} fontSize='md' m="0rem" p="0rem" border='none'>
              Resources
              </MenuButton>
              <MenuList>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Courses</MenuItem>
                <MenuItem>Customer Stories</MenuItem>
                <MenuItem>Events</MenuItem>
                <MenuItem>Webinars</MenuItem>
              </MenuList>
            </Menu>
            <Link as={NextLink} href="/consultancy" variant="nav">
              Consultancy
            </Link>
            <Link as={NextLink} href="/vision" variant="nav">
              Philosophy
            </Link>
          </Flex>
        </Flex>
      </Show>
      <Show below="md">
        <Flex
          m={3}
          justifyContent="space-between"
          flexDirection="row"
          width="100%"
        >
          <Link as={NextLink} href={'/'}>
            {logoInput}
          </Link>

          <IconButton
            variant="link"
            aria-label="Hamburger"
            onClick={onOpen}
            size="lg"
          >
            {burgerInput}
          </IconButton>
        </Flex>
        <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent backgroundColor="background">
            <DrawerCloseButton color="green00" size="lg" p={4} />
            <DrawerBody>
              <Flex
                sx={{
                  width: '100%',
                  height: '38rem',
                  zIndex: 2,
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Flex
                  sx={{
                    flexDirection: 'column',
                    gap: 3,
                    width: '100%',
                    alignItems: 'center',
                  }}
                >
                  <Link as={NextLink} href="/about" variant="hamburger">
                    About us
                  </Link>
                  <Link as={NextLink} href="/products" variant="hamburger">
                    Products
                  </Link>

                  <Link
                    /*Will be dropdown with
                Blog
                Courses
                Customes Stories
                Events
                Webinars
                */
                    href="/resources"
                    variant="hamburger"
                  >
                    Resources
                  </Link>
                  <Link as={NextLink} href="/consultancy" variant="hamburger">
                    Consultancy
                  </Link>
                  <Link as={NextLink} href="/vision" variant="hamburger">
                    Philosophy
                  </Link>
                </Flex>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
    </Flex>
  );
};
