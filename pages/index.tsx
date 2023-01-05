import {
  AspectRatio,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Show,
  Text,
} from '@chakra-ui/react';
import { Layout } from '../components/layout';
import NextLink from 'next/link';
import React from 'react';

const Home = () => (
  <Layout>
    <Show above="md">
      <Container
        width="100%"
        px={3}
        py={3}
        display={{ sm: 'none', md: 'block' }}
      >
        potato
      </Container>
    </Show>
    <Show below="md">
      <Container width="100%" px={3} py={3}>
        <GridItem>
          <Flex
            sx={{
              backgroundColor: 'pink00',
              flexDirection: 'column',
              borderRadius: 'md',
            }}
          >
            <Image
              src={'../tablemeet.png'}
              width={'100%'}
              alt={''}
              borderTopRadius="md"
            />
            <Flex
              sx={{
                p: 3,
                alignItems: 'center',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Image src="./snap.svg" alt="" width="20%" />
              <Flex
                sx={{ flexDirection: 'column', gap: 0, alignItems: 'center' }}
              >
                <Text textStyle="header" color="blue00">
                  Vi styrker mennesker til å oppnå mer
                </Text>
                <Text textStyle="normal" color="blue00">
                  Vi gir deg verktøyene du trenger for å jobbe smart og
                  effektivt i en ny digital hverdag.
                </Text>
              </Flex>
              <Link as={NextLink} href="/about">
                <Text textStyle="link" color="blue00">
                  Les mer om oss
                </Text>
              </Link>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            sx={{
              alignItems: 'center',
              p: 3,
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Image src="../squares.svg" sx={{}} width="20%" alt={''} />
            <Flex
              sx={{ gap: 2, flexDirection: 'column', alignItems: 'center' }}
            >
              <Text textStyle="header" color="green00" alignSelf="center">
                Utvid, tilpass og skreddersy iterativt
              </Text>
              <Text textStyle="normal" color="blacktogreen">
                Vi elsker å skape fantastiske opplevelser, og vi innser at alle
                har forskjellige behov. Med oss på laget kan du utvide, tilpasse
                og skreddersky mens du går.
              </Text>
              <Link as={NextLink} href="/about">
                <Text textStyle="link" color="blacktogreen">
                  Les mer om vår kompetanse
                </Text>
              </Link>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            sx={{
              flexDirection: 'column',
              p: 3,
              backgroundColor: 'green00noswap',
              borderRadius: 'md',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Text textStyle="header" color="green10noswap">
              Lorem ipsum sit amet
            </Text>
            <Text textStyle="normal" color="green10noswap">
              Aliquam pellentesque urna lacinia, finibus tellus non, aliquam
              urna. Phasellus varius aliquet massa, id tempus dui aliquet at.
            </Text>
            <Text textStyle="normal" color="green10noswap">
              Aenean aliquam sed ante nec aliquam. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              In sit amet metus efficitur, cursus sapien maximus, semper purus.
            </Text>
            <Link href="/about">
              <Text textStyle="link" color="green10noswap">
                Les mer om oss
              </Text>
            </Link>
          </Flex>
        </GridItem>
      </Container>
    </Show>
  </Layout>
);

export default Home;
