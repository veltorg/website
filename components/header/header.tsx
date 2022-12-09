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
  useDisclosure,
} from "@chakra-ui/react";
import { Hamburger } from "./hamburger";
import { Logo } from "./logo";

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  const isHome = pathname === "/";
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex>
      <Flex my="2em">
        <Link href={"/"}>
          <Logo />
        </Link>
        <Spacer />
        <IconButton aria-label="Hamburger" onClick={onOpen}>
          <Hamburger />
        </IconButton>
      </Flex>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex
              sx={{
                width: "100%",
                height: "28em",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                m: "2em"
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
                  sx={{                     color: "#00837D",
                  textDecoration: "none" }}
                >
                  Om oss
                </Link>
                <Link
                  href="/principles"
                  sx={{                     color: "#00837D",
                  textDecoration: "none"}}
                >
                  Våre prinsipper
                </Link>
                <Link
                  href="/people"
                  sx={{                     color: "#00837D",
                  textDecoration: "none"}}
                >
                  Folkene bak
                </Link>
                <Link
                  href="/customer-service"
                  sx={{
                    color: "#00837D",
                    textDecoration: "none"
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
                    ml:"-2em",
                    alignSelf: "center"
                  }}
                >
                  <Link
                    href="/become-customer"
                    sx={{ color: "#00837D", textDecoration: "none", alignSelf: "center" }}
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
