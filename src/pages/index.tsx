import { AspectRatio, Box, Center, Container } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import veltHero from '../assets/velt-hero.jpg';
import { Layout } from '../components/layout';
import { Image } from '../utils';

const Home: NextPage = () => (
  <Layout>
    <Container sx={{ maxW: '1695px' }}>
        <Image
          src={veltHero}
          sx={{ objectFit: 'cover', maxW: '1695px', maxH: '612px' }}
          alt="people around table"
          placeholder="blur"
          quality={100}
        />
    </Container>
  </Layout>
);

export default Home;
