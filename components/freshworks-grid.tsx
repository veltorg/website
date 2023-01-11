import { Box, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export interface Input {
    type: string;
    img: string;
    name: string;
    description: string;
    href: string;
};

export interface FreshGridProps {
    inputs: Input[]
}

export const FreshGrid: React.FC<FreshGridProps> = ({inputs}) => {
    return(
        <Flex flexDirection="column" alignItems="center">
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={3}>
          {inputs.map(input=> (<Flex
            flexDirection="column"
            gap={2}
            maxWidth={{base: "25rem"}}
            alignItems="center"
            key={input.type}
          >
            <Box
              width="fit-content"
              p={'min'}
              bgColor="green00"
              borderRadius="md"
            >
              
              <Text color="green10" textAlign="center">
                {input.type}
              </Text>
              
            </Box>
            <Image
              src="/freshdesk-logo.svg"
              alt="Freshdesk Logo"
              width="30%%"
            />
            <Text color="green00" fontWeight="extrabold" fontSize="2xl">
              {input.name}
            </Text>
            <Text textAlign="center">
              {input.description}
            </Text>
            <Link as={NextLink} href={input.href}>
              <Text textDecoration="underline">Les mer</Text>
            </Link>
          </Flex>
          ))}
        </Grid>
      </Flex>
    );
};