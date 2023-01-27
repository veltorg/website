import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  chakra,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import veltHero from '../assets/velt-hero.jpg';
import { AutomationFigure } from '../components/figures/automation-figure';
import { CustomerExperienceFigure } from '../components/figures/customer-experience-figure';
import { EmployeeExperienceFigure } from '../components/figures/employee-experience-figure';
import { FreshworkLogo } from '../components/freshworks-logo';
import { Layout } from '../components/layout';
import { ShowCase } from '../components/show-case';

export const Hero = chakra(Image, {
  baseStyle: {
    objectFit: 'cover',
    objectPosition: '50% 35%',
    width: '100%',
    maxWidth: 'container.m',
    height: 'heroHeight',
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
        px: 'm',
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
    <Container
      maxWidth="container.m"
      sx={{ display: 'flex', gap: 'xl', flexDirection: 'column' }}
    >
      <ShowCase figure={<CustomerExperienceFigure />}>
        <Box>
          <Text>Produkter og tjenester</Text>
          <Heading>Kundeopplevelse – CX</Heading>
        </Box>
        <Text>
          Kundeopplevelse (CX) er en av måtene vi kan gjøre verden til et bedre
          sted. Vi har over 20 års erfaring med utvikling av fantastiske
          kundeopplevelser.
        </Text>
      </ShowCase>
      <ShowCase figure={<EmployeeExperienceFigure />} direction="right">
        <Box>
          <Text>Produkter og tjenester</Text>
          <Heading>Ansattopplevelse – EX</Heading>
        </Box>
        <Text>
          Ansattopplevelse (EX) refererer til hva en medarbeider føler om jobben
          sin og bedriften de jobber for - fra første til siste dag av
          ansettelsesforholdet. Vi tror at det er enklere å sørge for god
          kundeopplevelse, dersom ansattopplevelsen er god.
        </Text>
        <Text>
          La oss ta en prat om hvorfor vi tror det og hvordan vi løser det.
        </Text>
      </ShowCase>
      <ShowCase figure={<AutomationFigure />}>
        <Box>
          <Text>Produkter og tjenester</Text>
          <Heading>Marketing Automation – MA</Heading>
        </Box>
        <Text>
          Marketing Automation er bruk av teknologi for å automatisere og
          forbedre markedsføringen med mål om å spare tid og øke effektiviteten
          - uten at det går ut over kvaliteten på arbeidet.
        </Text>
        <Text>
          Med vår bakgrunn fra salg, markedsføring og journalistikk kan vi rådgi
          våre kunder, slik at de kan utnytte det uforløste potensialet som
          ligger der.
        </Text>
      </ShowCase>
    </Container>
    <Flex
      color="white"
      backgroundColor="base"
      sx={{
        display: 'flex',
        gap: 's',
        p: 'xl',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Box width="150px">
        <FreshworkLogo />
      </Box>
      <Heading>Freshworks-partner</Heading>
      <Text maxWidth="60ch">
        Freshworks lager verktøy som gjør det enklere å markedsføre, selge, gi
        god kundestøtte og håndtere intern og ekstern IT.
      </Text>
      <Text maxWidth="60ch">
        Velt er leverandør i Norge og tilbyr bistand til oppsett, støtte og
        utvikling av produktene, i tillegg til å forhandle lisenser.
      </Text>
    </Flex>
  </Layout>
);

export default Home;
