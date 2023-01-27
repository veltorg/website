import { Box, chakra, Container, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import veltHero from '../assets/velt-hero.jpg';
import { Layout } from '../components/layout';

export const Hero = chakra(Image, {
  baseStyle: {
    objectFit: 'cover',
    objectPosition: '50% 35%',
    width: '100%',
    maxW: 'hero',
    height: 'clamp(50px, 40vw, 38rem)',
    borderRadius: '2xl',
  },
  shouldForwardProp: prop =>
    ['width', 'height', 'src', 'alt', 'fill', 'quality'].includes(prop),
});

const Home: NextPage = () => (
  <Layout>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 'm',
      }}
    >
      <Hero
        src={veltHero}
        alt="people around table"
        placeholder="blur"
        quality={100}
      />
    </Box>
    <Container
      sx={{
        display: 'flex',
        gap: 'l',
        flexDirection: 'column',
      }}
    >
      <Heading>
        Vi skaper gode kunde- og ansattopplevelser for å gjøre hverdagen bedre
        for folk
      </Heading>
      <Divider />
      <Flex
        sx={{
          gap: 's',
          flexDirection: 'column',
        }}
      >
        <Text>
          Vi brenner for å skape gode opplevelser, og vi erfarer at det starter
          hos de ansatte. Det man møter i kontakt med en bedrift er helt
          avgjørende for et videre samarbeid.
        </Text>
        <Text>
          Velt er et <strong>konsulenthus</strong> bestående av{' '}
          <strong>dedikerte</strong> mennesker med lang erfaring innenfor
          kundeservice, salg, markedføring og ledelse.
        </Text>
      </Flex>
    </Container>
  </Layout>
);

export default Home;
