import { Flex, chakra } from '@chakra-ui/react';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import veltBoss from '../assets/velt-boss.jpg';
import { Layout } from '../components/layout';

export const Hero = chakra(Image, {
  baseStyle: {
    objectFit: 'cover',
    width: '100%',
    maxWidth: 'container.m',
    objectPosition: '50% 90%',
    height: 'heroHeight',
    borderRadius: '2xl'
  },
  shouldForwardProp: prop =>
    ['width', 'height', 'src', 'alt', 'fill', 'quality'].includes(prop),
});

const Blog: NextPage = () => (
  <Layout>
    <Flex p='l'>
      <Hero
        src={veltBoss}
        alt="Picture of the boss in Velt"
        quality={100}
        placeholder="blur"
        />
    </Flex>
  </Layout>
);

export default Blog;
