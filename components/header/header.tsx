import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Show,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { Hamburger } from "./elements/hamburger";
import { Logo } from "./elements/logo";
import { LogoDark } from "./elements/logo-dark";
import { HamburgerDark } from "./elements/hamburger-dark";
import NextLink from 'next/link';

export const Header: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logoInput = colorMode === "light" ? <Logo /> : <LogoDark />;
  const burgerInput = colorMode === "light" ? <Hamburger /> : <HamburgerDark />;
  return (
    
    <Flex>
      <Show above="md">

      </Show>
    <Show below="md">
      <Flex
        m={3}
        justifyContent="space-between"
        flexDirection="row"
        width="100%"
      >
        <Link 
          as={NextLink}
          href={"/"}
        >
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
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay/>
        <DrawerContent backgroundColor="background">
          <DrawerCloseButton color="green00" size="lg" p={4}/>
          <DrawerBody>
            <Flex
              sx={{
                width: "100%",
                height: "38rem",
                zIndex: 2,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Flex
                sx={{
                  flexDirection: "column",
                  gap: 3,
                  width: "100%",
                  alignItems: "center"
                }}
              >
                <Link
                  as={NextLink}
                  href="/about"
                  variant="hamburger"
                >
                  About us
                </Link>
                <Link
                  as={NextLink}
                  href="/products"
                  variant="hamburger"
                >
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
                <Link
                  as={NextLink}
                  href="/consultancy"
                  variant="hamburger"
                >
                  Consultancy
                </Link>
                <Link
                  as={NextLink}
                  href="/vision"
                  variant="hamburger"
                >
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
