import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <Flex
    sx={{
      flexDirection: "column",
      //gap: 0,
      maxWidth: "26.75em",
    }}
  >
    <Header />
    <Flex
      sx={{
        alignItems: "stretch",
      }}
    >
      {children}
    </Flex>
    <Footer />
  </Flex>
);
