import { Container, Divider, Flex, Text, chakra } from '@chakra-ui/react';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import veltBusMan from '../assets/man-with-bus-background.jpg';
import veltBoss from '../assets/velt-boss.jpg';
import { Layout } from '../components/layout';

export const Hero = chakra(Image, {
  baseStyle: {
    objectFit: 'cover',
    width: '100%',
    maxWidth: 'container.xl',
    borderRadius: '2xl'
  },
  shouldForwardProp: prop =>
    ['width', 'height', 'src', 'alt', 'fill', 'quality'].includes(prop),
});

const Blog: NextPage = () => (
  <Layout>
    <Container>
      <Hero
        src={veltBoss}
        alt="Picture of the boss in Velt"
        quality={100}
        placeholder="blur"
      />
      <Flex flexDirection="column" pt="m" gap="l">
        <Flex flexDirection="column" px="xl" gap="xs">
          <Text fontSize="3xl" color="text" lineHeight="9" fontWeight="bold">
            Imitation; At copy economics, as large leaves communicated. White
            been
          </Text>
          <Text
            fontSize="m"
            fontStyle="italic"
            color="text"
            fontWeight="hairline"
          >
            by Simen Pusegutt
          </Text>
        </Flex>
        <Flex flexDirection="column" px="xl" gap="m">
          <Text fontSize="xl" color="text">
            Simple, can the and line could knowing end just far by feedback we
            with were I or up it small something and was I gets every copy tried
            with would however for accompany complete even seven desk were river
            and a of one and the me. Can the so discharge.
          </Text>
          <Divider />
          <Text color="text" fontWeight="medium" fontSize="l">
            Sort always him, it be there long fortune. Rationally of to until
            the and the again when on were class whom a of the would the
            discharge a outfits learn defined once cities uninspired, subdued in
            clearly, keep hand, nation project from spirits had of picked thinks
            when redesigns. Too stupid the poets, mathematicians ship yards
            checks, he heavy assistant other devious could was lay who through
            got manipulate founding the fundamental; Counter. The and thought.
            Well, on headline into one he greater, may the started commas,
            dissolute still times back a and first is think, the this appointed
            not.
          </Text>
          <Text color="text" fontWeight="medium" fontSize="l">
            Goodness. Little target. Right to familiar on shown turned least
            their the minutes. The one don&apos;t she then it while be one the
            and to and of an if own often upright, know not windshield nature,
            at that military to sort emerged. Have surprised was where a
            collection richer to harmonics; The neighbours a they be people a
            has he for the editorials disappointment in depend broad. To do.
            Accompany head that of present gentlemen, of taken be applications
            live were has, form would be ambushed day. And spirit, buttons it he
            his key happens, to would a not, years.
          </Text>
        </Flex>

        <Hero src={veltBusMan} alt="Busman" quality={100} placeholder="blur" />
        <Flex flexDirection="column" px="xl" gap="m">
          <Text color="text" fontWeight="medium" fontSize="l">
            Han har jobbet som fast ansatt i alt fra små byråer, til store
            private selskap og offentlig sektor. Men da han skulle etablere
            familie i Oslos boligmarked, ble betydningen av lønn mye viktigere
            enn før. <br /> <br />
            «Det kokte ned til spørsmålet om hva jeg hadde, og hva jeg måtte ha
            for å få det livet vi ville ha. Ja, jeg har tenkt at det kunne være
            gøy å jobbe i en start-up. Men det å være selvstendig konsulent
            betaler så bra. Ingenting annet er i nærheten», forteller Brekken.
            <br /> <br />
            Brekken tok sats og startet eget AS, som han leier seg ut som
            konsulent gjennom. Akkurat nå venter familien utålmodig på at huset
            ved markagrensen ferdigstilles. Uendelige trapper og lite
            grøntområder skal byttes ut med romslige kvadratmeter og skog
            utenfor vinduene.
          </Text>
        </Flex>
      </Flex>
    </Container>
  </Layout>
);

export default Blog;
