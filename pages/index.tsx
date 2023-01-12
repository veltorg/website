import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Highlight,
  Image,
  Link,
  Show,
  Text,
} from '@chakra-ui/react';
import { Layout } from '../components/layout';
import NextLink from 'next/link';
import React from 'react';
import { FreshGrid } from '../components/freshworks-grid';
import { freshgridInput } from '../components/freshgrid-input';
import { Freshworks } from '../components/footer/elements/freshworks';

const Home = () => (
  <Layout>
    <Flex width="100%" flexDirection="column">
      <Show below="md">
        <Flex
          m={3}
          sx={{
            backgroundColor: 'pink00',
            flexDirection: 'column',
            borderRadius: 'md',
          }}
        >
          <Image
            src={'../create.jpg'}
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
          borderRadius="md"
          p={3}
          bgImg="./create.jpg"
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          minH="30rem"
          justifyContent="end"
          m={{ md: 4, lg: 5 }}
        >
          <Box
            bgColor="pink00"
            justifySelf="center"
            borderRadius="md"
            w="50%"
            p="1.5rem"
          >
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
        flexDirection="column"
        alignItems="center"
        m={{ base: 3, md: 4, lg: 5 }}
      >
        <Show above="md">
          <Text color="blacktogreen">
            Vi anerkjenner innvirkningen mennesker har på et selskap. Det man
            møter i kontakt med et selskap er avgjørende for å lykkes, og derfor
            bruker vi våre liv for å forbedre det.
          </Text>
          <Text color="blacktogreen">
            <Highlight
              query={['programvare', 'konsulenthus', 'dedikerte', 'Freshworks']}
              styles={{ fontWeight: 'bold', color: 'blacktogreen' }}
            >
              Velt er et programvare- og konsulenthus bestående av 5 dedikerte
              mennesker med lang erfaring inne kundesenter, chat, IT, salg og
              CRM-løsninger. Vi er også Norges første autoriserte
              Freshworks-partner.
            </Highlight>
          </Text>
          <Text color="blacktogreen">Vårt fokus er ↓</Text>
          <Grid gridTemplateColumns="1fr 1fr" gap={2}>
            <Box
              width="fit-content"
              px={0}
              py="min"
              bgColor="blue80"
              borderRadius="md"
            >
              <Text color="green10noswap" textAlign="center">
                Kundesenterløsninger
              </Text>
            </Box>
            <Box
              width="fit-content"
              px={0}
              py="min"
              bgColor="blue80"
              borderRadius="md"
            >
              <Text color="green10noswap" textAlign="center">
                Chat- og meldingsløsninger
              </Text>
            </Box>
            <Box
              width="fit-content"
              px={0}
              py="min"
              bgColor="blue80"
              borderRadius="md"
            >
              <Text color="green10noswap" textAlign="center">
                IT-supportløsninger
              </Text>
            </Box>
            <Box
              width="fit-content"
              px={0}
              py="min"
              bgColor="blue80"
              borderRadius="md"
            >
              <Text color="green10noswap" textAlign="center">
                Salgs- og CRM-løsninger
              </Text>
            </Box>
          </Grid>
        </Show>
        <Show below="md">
          <Flex width={{ md: '50%' }} justifyContent="center">
            <Image src="../squares.svg" alt={''} />
          </Flex>

          <Flex
            gap={2}
            flexDirection="column"
            alignItems="center"
            width={{ md: '50%' }}
            p={2}
          >
            <Text
              textStyle="header"
              color="green00"
              align={{ base: 'center', md: 'left' }}
            >
              Utvid, tilpass og skreddersy iterativt
            </Text>
            <Text
              textStyle="normal"
              color="blacktogreen"
              align={{ base: 'center', md: 'left' }}
            >
              Vi elsker å skape fantastiske opplevelser, og vi innser at alle
              har forskjellige behov. Med oss på laget kan du utvide, tilpasse
              og skreddersky mens du går.
            </Text>
          </Flex>
        </Show>
      </Flex>
      <Show below="md">
        <Flex
          sx={{
            flexDirection: 'column',
            m: { base: 3, md: 4, lg: 5 },
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
            Velt er leverandør her i Norge, og tilbyr bistand til oppsett,
            støtte og utvikling i produktene.
          </Text>
        </Flex>
        <Freshworks />
      </Show>
      <Show above="md">
        <Flex
          flexDirection="column"
          gap={2}
          justifyContent="center"
          alignItems="center"
          p={{ md: 5, lg: 6 }}
          bgColor="blue80"
          my={{ md: 4, lg: 5 }}
        >
          <Freshworks color="white" />
          <Flex flexDirection="column" width="65%" alignItems="center" gap={2}>
            <Text textStyle="header" color="green10noswap" fontSize="4xl">
              Norges Freshworks-leverandør
            </Text>
            <Flex flexDirection="column" width="60%" gap={2}>
              <Text textStyle="normal" color="green10noswap" textAlign="center">
                Freshworks lager verktøy som gjør det fantastiske verktøy for å
                markedsføre, selge, kundestøtte og IT-løsninger.
              </Text>
              <Text textStyle="normal" color="green10noswap" textAlign="center">
                Velt er leverandør her i Norge, og tilbyr bistand til oppsett,
                støtte og utvikling i produktene.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Show>
      <FreshGrid inputs={freshgridInput} />
    </Flex>
  </Layout>
);

export default Home;
