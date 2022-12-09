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
          <Logo/>
        </Link>
<Spacer/>
        <IconButton aria-label="Hamburger" onClick={onOpen}>
          <Hamburger />
        </IconButton>
      </Flex>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton/>
        <DrawerBody>
        <Flex
          sx={{
            position: "fixed",
            left: 0,
            top: 0,
            backgroundColor: "blue04",
            width: "100%",
            height: "460px",
            zIndex: 2,
            display: "flex",
            p: 4,
            flexDirection: "column",
            alignItems: "center",
            overflow: "scroll",
          }}
        >

          <Flex
            sx={{
              flexDirection: "column",
              fontFamily: "DM Sans",
              mr: "auto",

              mt: "20px",
              gap: 4,
              width: "100%",
              height: "70%",
            }}
          >
            <Link
              href="/about"
              sx={{ color: "black", textDecoration: "none", ml: "20px" }}
            >
              Om oss
            </Link>
            <Link
              href="/principles"
              sx={{ color: "black", textDecoration: "none", ml: "20px" }}
            >
              Våre prinsipper
            </Link>
            <Link
              href="/people"
              sx={{ color: "black", textDecoration: "none", ml: "20px" }}
            >
              Folkene bak
            </Link>
            <Link
              href="/customer-service"
              sx={{
                color: "black",
                textDecoration: "none",
                mb: "20px",
                ml: "20px",
              }}
            >
              Kundestøtte
            </Link>
            <Flex
              sx={{
                py: "15px",
                height: "55px",
                border: "3px solid #D9EBFF",
                borderRadius: "8px",
                justifyContent: "center",
              }}
            >
              <Link
                href="/become-customer"
                sx={{ color: "black", textDecoration: "none" }}
              >
                <Box sx={{}}>Bli kunde →</Box>
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
