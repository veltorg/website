import { Flex, Image, useColorMode } from "@chakra-ui/react";
import { Freshworks } from "./freshworks";
import { FreshworksDark } from "./freshworks-dark";
import { Switches } from "./switch";

export const Footer: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode();
  const freshLogo = colorMode === "light" ? <Freshworks /> : <FreshworksDark />;
  //const switchInput = colorMode === "light" ? <Switches/> : <SwitchesDark>
  return (
    <Flex sx={{ flexDirection: "column", p: 3, gap: 4 }}>
      <Flex sx={{ alignItems: "center", justifyContent: "center", gap: 1 }}>
        {freshLogo}
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Switches />
      </Flex>
    </Flex>
  );
};
