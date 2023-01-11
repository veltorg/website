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
import { FreshGrid } from '../components/freshworks-grid';
import { freshgridInput } from '../components/freshgrid-input';

const Home = () => (
  <Layout>
    <Flex width="100%" px={3} py={3} flexDirection="column">
      <Show below="md">
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
          </Flex>
        </Flex>
      </Show>
      <Show above="md">
        <Flex
          flexDirection="column"
          bgImage="../tablemeet.png"
          borderRadius="md"
          minH="35rem"
          p={3}
          justifyContent="end"
          bgSize="cover"
        >
          <Box bgColor="pink00" borderRadius="md" w="50%" p="1.5rem">
            <Text textStyle="header" color="blue00" mb={2}>
              Vi styrker mennesker til å oppnå mer
            </Text>
            <Text textStyle="normal" color="blue00">
              Vi gir deg verktøyene du trenger for å jobbe smart og effektivt i
              en ny digital hverdag.
            </Text>
          </Box>
        </Flex>
        </Show>
        <Flex
          gap={2}
          flexDirection={{base: 'column', md: 'row'}}
          alignItems="center"
          p= {3}
        >
          <Flex width={{md:"50%"}} justifyContent="center">
            <Image src="../squares.svg" alt={''}/>
          </Flex>
          <Flex 
            gap= {2}
            flexDirection= 'column'
            alignItems= 'center'
            width={{md:"50%"}}
            p={2}
          >
          <Text textStyle="header" color="green00" align={{base: "center", md: "left"}}>
            Utvid, tilpass og skreddersy iterativt
          </Text>
          <Text
            textStyle="normal"
            color="blacktogreen"
            align={{ base: 'center', md: 'left' }}
          >
            Vi elsker å skape fantastiske opplevelser, og vi innser at alle har
            forskjellige behov. Med oss på laget kan du utvide, tilpasse og
            skreddersky mens du går.
          </Text>
        </Flex>
        </Flex>
      <Flex
        sx={{
          flexDirection: 'column',
          p: { base: 3, md: 4 },
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
          Velt er leverandør her i Norge, og tilbyr bistand til oppsett, støtte
          og utvikling i produktene.
        </Text>
      </Flex>
      <FreshworksLogo />
        <FreshGrid inputs={freshgridInput} />
    </Flex>
  </Layout>
);

export default Home;
