import {
  Box,
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
import { FreshworksLogo } from '../components/freshworks-logo';

const Home = () => (
  <Layout>
    <Show above="md">
      <Flex width="100%" flexDirection="column" gap={6} mb={4}>
        <Flex
          width="100%"
          flexDirection="column"
          height="15rem"
          bgSize="cover"
          backgroundImage="/banner.jpg"
        >
          <Text
            h="full"
            p={3}
            fontSize="xl"
            color="blue00"
            mt={7}
            letterSpacing="wider"
          >
            Få en enkel og sømløs
            <br /> digital hverdag.
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Grid templateColumns="1fr 1fr" gap={5} p={4}>
            <GridItem>
              <Image src="./working.jpg" borderRadius="md" />
            </GridItem>
            <GridItem>
              <Flex
                flexDirection="row"
                gap={3}
                justifyContent="center"
                height="100%"
              >
                <Image
                  src="../squares.svg"
                  alignSelf="center"
                  width="70%"
                  alt={''}
                />

                <Flex
                  sx={{
                    gap: 2,
                    flexDirection: 'column',
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text textStyle="header" color="green00" textAlign="center">
                    Utvid, tilpass og skreddersy iterativt
                  </Text>
                  <Text textStyle="normal" color="blacktogreen">
                    Vi elsker å skape fantastiske opplevelser, og vi innser at
                    alle har forskjellige behov. Med oss på laget kan du utvide,
                    tilpasse og skreddersky mens du går.
                  </Text>
                  <Link as={NextLink} href="/about">
                    <Text textStyle="link" color="blacktogreen">
                      Les mer om vår kompetanse
                    </Text>
                  </Link>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
        <Flex flexDirection="column">
          <Grid templateColumns="1fr 1fr" gap={5} p={3}>
            <GridItem>
              <Flex
                flexDirection="row"
                gap={3}
                justifyContent="center"
                height="100%"
              >
                <Image
                  src="../squares.svg"
                  alignSelf="center"
                  width="70%"
                  alt={''}
                />

                <Flex
                  sx={{
                    gap: 2,
                    flexDirection: 'column',
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text textStyle="header" color="green00" textAlign="center">
                    Utvid, tilpass og skreddersy iterativt
                  </Text>
                  <Text textStyle="normal" color="blacktogreen">
                    Vi elsker å skape fantastiske opplevelser, og vi innser at
                    alle har forskjellige behov. Med oss på laget kan du utvide,
                    tilpasse og skreddersky mens du går.
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
              <Image src="./working.jpg" borderRadius="md" />
            </GridItem>
          </Grid>
        </Flex>
        <Flex flexDirection="column">
          <Grid templateColumns="1fr 1fr" gap={5} p={3}>
            <GridItem>
              <Image src="./working.jpg" borderRadius="md" />
            </GridItem>
            <GridItem>
              <Flex
                flexDirection="row"
                gap={3}
                justifyContent="center"
                height="100%"
              >
                <Image
                  src="../squares.svg"
                  alignSelf="center"
                  width="70%"
                  alt={''}
                />

                <Flex
                  sx={{
                    gap: 2,
                    flexDirection: 'column',
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text textStyle="header" color="green00" textAlign="center">
                    Utvid, tilpass og skreddersy iterativt
                  </Text>
                  <Text textStyle="normal" color="blacktogreen">
                    Vi elsker å skape fantastiske opplevelser, og vi innser at
                    alle har forskjellige behov. Med oss på laget kan du utvide,
                    tilpasse og skreddersky mens du går.
                  </Text>
                  <Link as={NextLink} href="/about">
                    <Text textStyle="link" color="blacktogreen">
                      Les mer om vår kompetanse
                    </Text>
                  </Link>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Show>
    <Show below="md">
      <Flex width="100%" px={3} py={3} flexDirection="column">
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
                Vi gir deg verktøyene du trenger for å jobbe smart og effektivt
                i en ny digital hverdag.
              </Text>
            </Flex>
            <Link as={NextLink} href="/about">
              <Text textStyle="link" color="blue00">
                Les mer om oss
              </Text>
            </Link>
          </Flex>
        </Flex>
        <Flex
          sx={{
            alignItems: 'center',
            p: 3,
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Image src="../squares.svg" sx={{}} width="20%" alt={''} />
          <Flex sx={{ gap: 2, flexDirection: 'column', alignItems: 'center' }}>
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
        <Flex
          sx={{
            flexDirection: 'column',
            p: 3,
            backgroundColor: 'green00noswap',
            borderRadius: 'md',
            gap: 2,
          }}
        >
          <Text textStyle="header" color="green10noswap">
            Norges leverandør for Freshworks
          </Text>
          <Text textStyle="normal" color="green10noswap">
            Freshworks lager verktøy som gjør det fantastiske verktøy for å
            markedsføre, selge, kundestøtte og IT-løsninger.
          </Text>
          <Text textStyle="normal" color="green10noswap">
            Velt er leverandør her i Norge, og tilbyr bistand til oppsett,
            støtte og utvikling i produktene.
          </Text>
          <Link href="/about">
            <Text textStyle="link" color="green10noswap">
              Les mer om oss
            </Text>
          </Link>
        </Flex>
        <FreshworksLogo />
        <Flex flexDirection="column" alignItems="center" gap={3}>
          <Box
            width="fit-content"
            p={'min'}
            bgColor="green00"
            borderRadius="md"
          >
            <Text color="green10" textAlign="center">
              Kundesenterløsning
            </Text>
          </Box>
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
            <Flex
              flexDirection="column"
              gap={2}
              maxWidth="25rem"
              alignItems="center"
            >
              <Image
                src="/freshdesk-logo.svg"
                alt="Freshdesk Logo"
                width="30%%"
              />
              <Text color="green00" fontWeight="extrabold" fontSize="2xl">
                Freshdesk
              </Text>
              <Text textAlign="center">
                Samle dine henvendelser fra alle kanaler og organiser de for en
                mer effektiv og produktiv kundeservice.
              </Text>
              <Link as={NextLink} href="https://velt.no/produkter/freshdesk/">
                <Text textDecoration="underline">Les mer</Text>
              </Link>
            </Flex>
          </Grid>
        </Flex>
      </Flex>
    </Show>
  </Layout>
);

export default Home;
