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
      <Show above="stop">
        <Flex m={{ base:2, md: 4, lg: 5 }} justifyContent="space-between" width="100%">
          <Link as={NextLink} href='/'>{desktopLogoInput}</Link>
          </Flex>
      </Show>
      <Hide above="stop">
        <Flex m={{ md: 4, lg: 5 }} justifyContent="space-between" width="100%">
          <Link as={NextLink} href='/'>{desktopLogoInput}</Link>
          <Flex gap={{ md: 3, lg: 4 }} alignItems="end">
            <Link as={NextLink} href="/about" variant="nav">
              About us
            </Link>
            <Link as={NextLink} href="/consultancy" variant="nav">
              Consultancy
            </Link>
            <Link as={NextLink} href="/vision" variant="nav">
              Philosophy
            </Link>
            <Link as={NextLink} href="/products" variant="nav">
              Products
            </Link>

            <Menu isOpen={isOpen}>
              <MenuButton
                as={Link}
                aria-label="Resources"
                onMouseEnter={onOpen}
              >
                Resources
              </MenuButton>
              <MenuList onMouseLeave={onClose}>
                <MenuItem px={1}>
                  <Link as={NextLink} href="/blog" variant="navmenu">
                    Blog
                  </Link>
                </MenuItem>
                <MenuItem px={1}>
                  <Link as={NextLink} href="/courses" variant="navmenu">
                    Courses
                  </Link>
                </MenuItem>
                <MenuItem px={1}>
                  <Link
                    as={NextLink}
                    href="/customer-stories"
                    variant="navmenu"
                  >
                    Customers Stories
                  </Link>
                </MenuItem>
                <MenuItem px={1}>
                  <Link as={NextLink} href="/events" variant="navmenu">
                    Events
                  </Link>
                </MenuItem>
                <MenuItem px={1}>
                  <Link as={NextLink} href="/webinars" variant="navmenu">
                    Webinars
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Hide>
      <Hide above="stop">
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
                  height: '42rem',
                  zIndex: 2,
                  flexDirection: 'column',
                }}
              >
                <Flex
                  sx={{
                    flexDirection: 'column',
                    gap: 3,
                    width: '100%',
                    alignItems: 'center',
                    mt: 5,
                  }}
                >
                  <Link as={NextLink} href="/about" variant="hamburger">
                    About us
                  </Link>
                  <Link as={NextLink} href="/consultancy" variant="hamburger">
                    Consultancy
                  </Link>
                  <Link as={NextLink} href="/vision" variant="hamburger">
                    Philosophy
                  </Link>
                  <Link as={NextLink} href="/products" variant="hamburger">
                    Products
                  </Link>

                  <Menu defaultIsOpen={false} placement="bottom">
                    <MenuButton
                      as={Link}
                      aria-label="Resources"
                      variant="hamburger"
                      onClick={onOpen}
                    >
                      Resources
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <Link
                          as={NextLink}
                          href="/blog"
                          variant="hamburgermenu"
                        >
                          Blog
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          as={NextLink}
                          href="/courses"
                          variant="hamburgermenu"
                        >
                          Courses
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          as={NextLink}
                          href="/customer-stories"
                          variant="hamburgermenu"
                        >
                          Customers Stories
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          as={NextLink}
                          href="/events"
                          variant="hamburgermenu"
                        >
                          Events
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          as={NextLink}
                          href="/webinars"
                          variant="hamburgermenu"
                        >
                          Webinars
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Hide>
    </Flex>
  );
};
