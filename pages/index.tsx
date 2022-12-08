import { Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import { Layout } from "../components/layout";


const Home = () => (
  <Layout>
<Grid sx={{ width: "100%", px: 3 }}>
        <Flex
          sx={{
            backgroundColor: "pink00",
            alignItems: "center",
            flexDirection: "column",
            mt: 3,
            pb: 3,
            borderRadius: 0,
            position: "relative",
          }}
        >
          <Image
            src={"../tablemeet.png"}
            width={364}
            height={293}
            sx={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
            alt={""}
          />
          <Flex
            sx={{
              p: 3,
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Image src="../snap.svg" sx={{}} height={128} width={90} alt={""} />
            <Flex
              sx={{ alignItems: "center", flexDirection: "column", gap: 0 }}
            >
              <Text variant="header" sx={{ color: "blue00" }}>
                Vi styrker mennesker til å oppnå mer
              </Text>
              <Text
                variant="normal"
                sx={{
                  color: "blue00",
                }}
              >
                Vi gir deg verktøyene du trenger for å jobbe smart og effektivt
                i en ny digital hverdag.
              </Text>
            </Flex>
            <Link href="/about" mr="auto">
              <Text variant="normal" sx={{ color: "blue00" }}>
                Les mer om oss →
              </Text>
            </Link>
          </Flex>
        </Flex>
        <Flex
          sx={{
            alignItems: "center",
            p: 3,
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Image src="../squares.svg" sx={{}} width={110} height={121} alt={""} />
          <Flex sx={{ gap: 2, flexDirection: "column" }}>
            <Text
              variant="header"
              sx={{ color: "green00", textAlign: "center" }}
            >
              Utvid, tilpass og skreddersy iterativt
            </Text>
            <Text variant="normal" sx={{ textAlign: "center" }}>
              Vi elsker å skape fantastiske opplevelser, og vi innser at alle
              har forskjellige behov. Med oss på laget kan du utvide, tilpasse
              og skreddersky mens du går.
            </Text>
            <Link href="/about">
              <Text
                variant="normal"
                sx={{ color: "black", textAlign: "center", fontWeight: "800" }}
              >
                Les mer om vår kompetanse
              </Text>
            </Link>
          </Flex>
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            p: 3,
            backgroundColor: "green00noswap",
            borderRadius: 0,
            gap: 0,
          }}
        >
          <Text variant="header" sx={{ color: "green10noswap" }}>
            Lorem ipsum sit amet
          </Text>
          <Text variant="normal" sx={{ color: "green10noswap" }}>
            Aliquam pellentesque urna lacinia, finibus tellus non, aliquam urna.
            Phasellus varius aliquet massa, id tempus dui aliquet at.
          </Text>
          <Text variant="normal" sx={{ color: "green10noswap" }}>
            Aenean aliquam sed ante nec aliquam. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. In
            sit amet metus efficitur, cursus sapien maximus, semper purus.
          </Text>
          <Link href="/about" mr="auto">
            <Text variant="normal" sx={{ color: "green10noswap" }}>
              Les mer om oss →
            </Text>
          </Link>
        </Flex>
      </Grid>
  </Layout>
)

export default Home;

