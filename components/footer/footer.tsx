import { Flex, Image } from "@chakra-ui/react";

export const Footer: React.FC = () => (
    <Flex sx={{ flexDirection: "column", p: 3, gap: 4 }}>
      <Flex sx={{ alignItems: "center", justifyContent: "center", gap: 1 }}>
        <Image src="freshworks-logo.svg" />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      </Flex>
    </Flex>
  );
  