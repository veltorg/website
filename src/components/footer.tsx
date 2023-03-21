import { Box, Container, Heading, Text } from '@chakra-ui/react';

export const Footer: React.FC = () => {
  return (
    <Box backgroundColor="black" py="l" px="xl" color="white">
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 's',
        }}
      >
        <Heading fontSize="xl">Velt AS</Heading>
        <Text>Organisasjonsnummer: 919 429 739</Text>
        <Text>
          Kontakt oss på 210 80 000 eller salg@velt.no.
          <br />
          Du finner oss i Myntgata 2, 0151 Oslo
        </Text>
      </Container>
    </Box>
  );
};
