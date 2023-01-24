import { Container, Flex, Heading, Text } from '@chakra-ui/react';

export const Footer: React.FC = () => {
  return (
    <Flex backgroundColor="black" width="100%" p={4} color="white">
      <Container>
        <Flex flexDirection="column" gap={2}>
          <Heading as="h2">Velt AS</Heading>

          <Text>Organisasjonsnummer: 919 429 739</Text>

          <Text>
            Kontakt oss på 210 80 000 eller salg@velt.no. Du finner oss i
            Myntgata 2, 0151 Oslo
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
};
