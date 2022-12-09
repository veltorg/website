import { useRouter } from "next/router";
import { useState } from "react";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Menu,
  Spacer,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { Hamburger } from "./hamburger";
import { Logo } from "./logo";
import { LogoDark } from "./logo-dark";
import { HamburgerDark } from "./hamburger-dark";

export const Header: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logoInput = colorMode === "light" ? <Logo /> : <LogoDark />;
  const burgerInput = colorMode === "light" ? <Hamburger /> : <HamburgerDark />;
  return (
    <Flex>
      <Flex
        my="2em"
        alignContent="space-between"
        flexDirection={"row"}
        width="100%"
      >
        <Link href={"/"}>{logoInput}</Link>

        <IconButton
          variant="link"
          aria-label="Hamburger"
          onClick={onOpen}
          size="lg"
          ml="auto"
          pr="2em"
        >
          {burgerInput}
        </IconButton>
      </Flex>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="black" />
          <DrawerBody>
            <Flex
              sx={{
                width: "100%",
                height: "28em",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                m: "2em",
              }}
            >
              <Flex
                sx={{
                  flexDirection: "column",
                  gap: 3,
                  width: "100%",
                }}
              >
                <Link
                  href="/about"
                  sx={{ color: "#00837D", textDecoration: "none" }}
                >
                  Om oss
                </Link>
                <Link
                  href="/principles"
                  sx={{ color: "#00837D", textDecoration: "none" }}
                >
                  Våre prinsipper
                </Link>
                <Link
                  href="/people"
                  sx={{ color: "#00837D", textDecoration: "none" }}
                >
                  Folkene bak
                </Link>
                <Link
                  href="/customer-service"
                  sx={{
                    color: "#00837D",
                    textDecoration: "none",
                  }}
                >
                  Kundestøtte
                </Link>
                <Flex
                  sx={{
                    height: "45px",
                    border: "2px solid #00837D",
                    borderRadius: "8px",
                    justifyContent: "center",
                    width: "40%",
                    ml: "-2em",
                    alignSelf: "center",
                  }}
                >
                  <Link
                    href="/become-customer"
                    sx={{
                      color: "#00837D",
                      textDecoration: "none",
                      alignSelf: "center",
                    }}
                  >
                    <Box sx={{}}>Bli kunde</Box>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
