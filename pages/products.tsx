import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  ListItem,
  ScaleFade,
  Show,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  propNames,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { Layout } from '../components/layout';
import {
  EmailIcon,
  PhoneIcon,
  SearchIcon,
  SettingsIcon,
} from '@chakra-ui/icons';
import { Freshworks } from '../components/footer/elements/freshworks';
import { FreshworksDark } from '../components/footer/elements/freshworks-dark';

const Products: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const freshworksLogo =
    colorMode === 'light' ? <Freshworks /> : <FreshworksDark />;
  return (
    <Layout>
      <Show above="sm">
        <Flex flexDirection="column" width="100%">
          <Flex>
            <Image src="./productgraphic.jpg" />
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={4}
            my={3}
          >
            {freshworksLogo}
            <Text fontSize="2xl" fontWeight="bold">
              Select Your Freshworks Product
            </Text>
          </Flex>
          <Flex>
            <Tabs isFitted variant="enclosed" isLazy={true}>
              <TabList bgColor="green10" height="7rem">
                <Tab onClick={onOpen} onLoad={onOpen}>
                  <Image src="./freshdesk.svg" />
                </Tab>
                <Tab onClick={onOpen}>
                  <Image src="./freshservice.svg" />
                </Tab>
                <Tab onClick={onOpen}>
                  <Image src="./freshsales.svg" />
                </Tab>
                <Tab onClick={onOpen}>
                  <Image src="./freshchat.svg" />
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel /*freshdesk*/ p="0rem">
                  <ScaleFade initialScale={0.5} in={isOpen}>
                    <Flex flexDirection="column">
                      <Flex
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        p={4}
                      >
                        <Text
                          fontSize="4xl"
                          color="blacktogreen"
                          fontWeight="extrabold"
                        >
                          Support Desk
                        </Text>
                        <Divider orientation="horizontal" w="30%" />
                        <Image src="freshdesk.svg" mt={4} w="20%" />
                      </Flex>
                      <Flex flexDirection="row" gap={3} p={4}>
                        <Flex
                          flexDirection="column"
                          width="60%"
                          gap={3}
                          justifyContent="center"
                        >
                          <Text fontSize="2xl" fontWeight="bold">
                            Ticketing
                          </Text>
                          <Text fontSize="3xl">
                            Use the power of collaborative ticketing and AI to
                            deliver the best customer experience
                          </Text>
                        </Flex>
                        <Flex width="40%" flexDirection="column">
                          <Image src="/freshdeskgraphic-person.svg" />
                        </Flex>
                      </Flex>
                      <Flex
                        width="100%"
                        backgroundColor="green00"
                        flexDirection="row"
                        p={4}
                      >
                        <Flex flexDirection="column" justifyContent="end">
                          <Text fontSize="2xl" color="white">
                            Experience a seamless and easy weekday
                          </Text>
                          <Text
                            fontSize="2xl"
                            fontWeight="extrabold"
                            color="white"
                          >
                            Seamless. Easy.
                          </Text>
                        </Flex>
                        <Image
                          src="/freshdeskgraphic-pc.svg"
                          width="40%"
                          ml="auto"
                        />
                      </Flex>

                      <Flex flexDirection="row" gap={4} p={4}>
                        <Flex
                          flexDirection="column"
                          width="50%"
                          gap={2}
                          justifyContent="center"
                        >
                          <Text fontSize="xl" color="green00" fontWeight="bold">
                            Everything in one helpdesk
                          </Text>
                          <Text fontSize="xl">
                            Freshdesk is a cloudbased software for customer
                            service that links conversations from many different
                            channels like: e-mail, phone, chat, social media.
                            Freshdesk makes it possible for teams to cooperate
                            crossplatform to provide exceptional customer
                            service.
                          </Text>
                        </Flex>
                        <Flex flexDirection="column" width="45%" gap={2}>
                          <Text
                            textAlign="center"
                            fontSize="3xl"
                            fontWeight="bold"
                          >
                            Start your 21-day free trial period.
                          </Text>
                          <FormControl>
                            <Stack direction="row" spacing={2} align="center">
                              <InputGroup>
                                <InputLeftElement>
                                  <SearchIcon />
                                </InputLeftElement>
                                <Input
                                  type="name"
                                  placeholder=" First name"
                                  isRequired
                                  size="lg"
                                />
                              </InputGroup>
                              <InputGroup>
                                <InputLeftElement>
                                  <SearchIcon />
                                </InputLeftElement>
                                <Input
                                  type="name"
                                  placeholder=" Last name"
                                  isRequired
                                  size="lg"
                                />
                              </InputGroup>
                            </Stack>
                            <Stack
                              direction="column"
                              spacing={0}
                              alignItems="center"
                            >
                              <InputGroup>
                                <InputLeftElement>
                                  <EmailIcon />
                                </InputLeftElement>
                                <Input
                                  type="email"
                                  placeholder=" E-mail"
                                  isRequired
                                  size="lg"
                                />
                              </InputGroup>
                              <InputGroup>
                                <InputLeftElement>
                                  <SettingsIcon />
                                </InputLeftElement>
                                <Input
                                  type="name"
                                  placeholder=" Company"
                                  isRequired
                                  size="lg"
                                />
                              </InputGroup>
                              <InputGroup>
                                <InputLeftElement>
                                  <PhoneIcon />
                                </InputLeftElement>
                                <Input
                                  type="tel"
                                  placeholder=" Phonenumber"
                                  isRequired
                                  size="lg"
                                />
                              </InputGroup>
                            </Stack>
                            <Button
                              type="submit"
                              width="100%"
                              bgColor="green10"
                              mt={2}
                              size="lg"
                            >
                              Register For Free
                            </Button>
                          </FormControl>
                        </Flex>
                      </Flex>
                      <Flex
                        flexDirection="column"
                        p={4}
                        gap={2}
                        bgColor="green10"
                      >
                        <Text fontSize="xl" fontWeight="bold">
                          Agent Productivity
                        </Text>
                        <Text>
                          Freshdesk is built to propel agent productivity and
                          speedy response to customers. Agents can easily stay
                          on top of all tickets and work collaboratively with
                          teammates to efficiently resolve customer issues.
                        </Text>
                      </Flex>
                      <Flex flexDirection="row">
                        <Grid gridTemplateColumns="1fr 1fr 1fr">
                          <GridItem p={6}>
                            <Image src="/freshdeskgraphic-kog.svg" />
                            <Text
                              align="center"
                              mt={3}
                              fontSize="lg"
                              fontWeight="bold"
                            >
                              Effective
                            </Text>
                          </GridItem>
                          <GridItem p={6}>
                            <Image src="/freshdeskgraphic-handshake.svg" />
                            <Text
                              align="center"
                              mt={3}
                              fontSize="lg"
                              fontWeight="bold"
                            >
                              Cooperation
                            </Text>
                          </GridItem>
                          <GridItem p={6}>
                            <Image src="/freshdeskgraphic-kogs.svg" />
                            <Text
                              align="center"
                              mt={3}
                              fontSize="lg"
                              fontWeight="bold"
                            >
                              Automation
                            </Text>
                          </GridItem>
                        </Grid>
                      </Flex>
                      <Flex flexDirection="row" p={4} bgColor="green10">
                        <Flex
                          flexDirection="column"
                          gap={2}
                          width="50%"
                          justify="center"
                        >
                          <Text
                            fontSize="lg"
                            color="green00"
                            fontWeight="extrabold"
                          >
                            Collaborative ticketing
                          </Text>
                          <Text>
                            Help your teams collaborate effectively to provide
                            better support experiences.
                            <UnorderedList>
                              <ListItem>
                                Share ownership of tickets without losing
                                visibility. Loop in teammates for a discussion
                                right inside the ticket for full context.
                              </ListItem>
                              <ListItem>
                                Split tickets with several tasks into
                                sub-tickets. Have multiple teams work on them in
                                parallel.
                              </ListItem>
                              <ListItem>
                                Link and keep track of tickets related to
                                similar issues. Send bulk updates to customers
                                in one go.
                              </ListItem>
                            </UnorderedList>
                          </Text>
                        </Flex>
                        <Flex width="50%" align="center" justify="end">
                          <Image src="/freshdesk-screenshot.jpg" h="70%" />
                        </Flex>
                      </Flex>
                      <Flex flexDirection="row" p={4} gap={3}>
                        <Flex width="50%" align="center">
                          <Image src="/freshdesk-admin.jpg" />
                        </Flex>
                        <Flex flexDirection="column" width="50%" gap={3}>
                          <Text fontSize="2xl" fontWeight="bold">
                            SLA Management
                          </Text>
                          <Text>
                            A service level agreement across your Freshdesk sets
                            performance thresholds that can be managed and
                            optimized over time. With SLAs, set expectations for
                            response time with customers and measure how well
                            agents are able to meet time frames.
                          </Text>
                          <UnorderedList>
                            <ListItem>
                              Set up rules for when every ticked needs to be
                              replied to and solved so agents are clear about
                              deadlines.
                            </ListItem>
                            <ListItem>
                              Redistribute the workload or add more people to
                              the team based on SLA compliance rates.
                            </ListItem>
                            <ListItem>
                              Set up automatic reminders for agents and
                              escalations to managers whenever SLAs are not met.
                            </ListItem>
                          </UnorderedList>
                          <Link as={NextLink} href="/sla" color="green00">
                            Learn more
                          </Link>
                        </Flex>
                      </Flex>
                      <Flex
                        flexDirection="row"
                        p={4}
                        gap={2}
                        backgroundColor="green10"
                      >
                        <Flex
                          width="50%"
                          flexDirection="column"
                          gap={2}
                          justify="center"
                        >
                          <Text fontSize="2xl">Collaboration</Text>
                          <Text fontSize="xl" fontWeight="semibold">
                            It takes a team to deliver great customer support!
                            Freshdesk helps you work together with team members
                            from across the company to provide quick and
                            consistent answers to your customers.
                          </Text>
                        </Flex>
                        <Flex width="50%">
                          <Image src="/freshdesk-carousel.svg" />
                        </Flex>
                      </Flex>
                      <Flex p={4} align="center" flexDirection="column" gap={3}>
                        <Text fontSize="2xl" fontWeight="bold">
                          AI powered automations to streamline your teams'
                          workflows
                        </Text>

                        <Flex w="70%">
                          <Image src="/freshdesk-page.svg" />
                        </Flex>
                      </Flex>
                      <Flex
                        flexDirection="column"
                        bgColor="green10"
                        p={4}
                        gap={2}
                      >
                        <Text fontSize="2xl" fontWeight="bold" color="green00">
                          We've simplified ticketing for you!
                        </Text>
                        <Text>
                          Customer issues from any channel can be converted into
                          tickets in Freshdesk. This way, none of your customer
                          conversations slip through the cracks.
                        </Text>
                      </Flex>
                      <Flex p={4}>
                        <Image src="/freshdesk-admin2.jpg" />
                      </Flex>
                      <Flex
                        bgColor="green10"
                        flexDirection="row"
                        p={4}
                        gap={1}
                        align="baseline"
                        justify="center"
                      >
                        <Text fontSize="xl" fontWeight="bold" color="green00">
                          Security:
                        </Text>
                        <Text fontWeight="semibold">
                          Ensure secure access with Custom SSL certificates
                        </Text>
                      </Flex>
                      <Flex flexDirection="column" p={4} gap={2}>
                        <Flex justify="center">
                          <Text fontSize="2xl">Kundereferanser</Text>
                        </Flex>
                        <Flex flexDirection="row">
                          <Flex align="center">Pearson-logo</Flex>
                          <Flex flexDirection="column" gap={2}>
                            ''
                            <Text>
                              Vi ble solgt da vi så Freshdesk. Kombinasjonen av
                              sosiale medier, e-post, kunnskapsbas, mobil og
                              fleksibilitet på en og samme platform, gjorde det
                              enkelt for oss å velge en kundesenter-løsning.
                            </Text>
                            <Text fontWeight="semibold">Matthijs Lok</Text>
                          </Flex>
                          <Flex>Lesley-Logo</Flex>
                          <Flex flexDirection="column" gap={2}>
                            ''
                            <Text>
                              Vi begynte å lete etter en ny løsning på høsten og
                              var opptatt av å få noe på plass og optimalisert
                              raskt. Freshdesk sørget for en rask og enkel
                              implementering og vi var i gang innen 48 timer.
                            </Text>
                            <Text fontWeight="semibold">Vaughan Potter</Text>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Flex p={4} bgColor="green.100" width="100%">
                        <Grid
                          width="100%"
                          gridTemplateColumns="1fr 1fr 1fr 1fr"
                          gridTemplateRows="5rem 2rem"
                          border="1px"
                          borderRadius="md"
                        >
                          <GridItem>
                            <Text
                              fontSize="sm"
                              fontWeight="bold"
                              align="center"
                            >
                              Free
                            </Text>
                            <Text fontSize="2xs" mt={1} align="center">
                              Get going for free
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text
                              fontSize="sm"
                              align="center"
                              fontWeight="bold"
                            >
                              Growth
                            </Text>
                            <Text fontSize="2xs" mt={1} align="center">
                              Intuitive, industry-leading
                              <br />
                              support for growing businesses
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text
                              fontSize="sm"
                              align="center"
                              fontWeight="bold"
                            >
                              Pro
                            </Text>
                            <Text fontSize="2xs" mt={1} align="center">
                              Advanced automation for high
                              <br />
                              performance
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text
                              fontSize="sm"
                              align="center"
                              fontWeight="bold"
                            >
                              Enterprise
                            </Text>
                            <Text fontSize="2xs" mt={1} align="center">
                              Fully featured with bots for
                              <br />
                              enterprise-level support
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text align="center">Euro 0</Text>
                          </GridItem>
                          <GridItem>euro</GridItem>
                          <GridItem>Euro 0</GridItem>
                          <GridItem>euro</GridItem>
                        </Grid>
                      </Flex>
                    </Flex>
                  </ScaleFade>
                </TabPanel>
                <TabPanel /*freshservice*/>
                  <ScaleFade initialScale={0.5} in={isOpen}>
                    <Flex flexDirection="row" gap={4} p={3} my={3}>
                      <Flex
                        flexDirection="column"
                        width="50%"
                        gap={2}
                        justifyContent="center"
                      >
                        <Text fontSize="xl" color="green00" fontWeight="bold">
                          Everything in one helpdesk
                        </Text>
                        <Text fontSize="xl">
                          Freshdesk is a cloudbased software for customer
                          service that links conversations from many different
                          channels like: e-mail, phone, chat, social media.
                          Freshdesk makes it possible for teams to cooperate
                          crossplatform to provide exceptional customer service.
                        </Text>
                      </Flex>
                      <Flex flexDirection="column" width="45%" gap={2}>
                        <Text
                          textAlign="center"
                          fontSize="3xl"
                          fontWeight="bold"
                        >
                          Start your 21-day free trial period.
                        </Text>
                        <FormControl>
                          <Stack direction="row" spacing={2} align="center">
                            <InputGroup>
                              <InputLeftElement>
                                <SearchIcon />
                              </InputLeftElement>
                              <Input
                                type="name"
                                placeholder=" First name"
                                isRequired
                                size="lg"
                              />
                            </InputGroup>
                            <InputGroup>
                              <InputLeftElement>
                                <SearchIcon />
                              </InputLeftElement>
                              <Input
                                type="name"
                                placeholder=" Last name"
                                isRequired
                                size="lg"
                              />
                            </InputGroup>
                          </Stack>
                          <Stack
                            direction="column"
                            spacing={0}
                            alignItems="center"
                          >
                            <InputGroup>
                              <InputLeftElement>
                                <EmailIcon />
                              </InputLeftElement>
                              <Input
                                type="email"
                                placeholder=" E-mail"
                                isRequired
                                size="lg"
                              />
                            </InputGroup>
                            <InputGroup>
                              <InputLeftElement>
                                <SettingsIcon />
                              </InputLeftElement>
                              <Input
                                type="name"
                                placeholder=" Company"
                                isRequired
                                size="lg"
                              />
                            </InputGroup>
                            <InputGroup>
                              <InputLeftElement>
                                <PhoneIcon />
                              </InputLeftElement>
                              <Input
                                type="tel"
                                placeholder=" Phonenumber"
                                isRequired
                                size="lg"
                              />
                            </InputGroup>
                          </Stack>
                          <Button
                            type="submit"
                            width="100%"
                            bgColor="green10"
                            mt={2}
                            size="lg"
                          >
                            Register For Free
                          </Button>
                        </FormControl>
                      </Flex>
                    </Flex>
                  </ScaleFade>
                </TabPanel>

                <TabPanel /*freshsales*/>
                  <Flex flexDirection="column">
                    <ScaleFade initialScale={0.5} in={isOpen}>
                      <Flex flexDirection="row" gap={3}>
                        <Flex
                          flexDirection="column"
                          width="50%"
                          gap={2}
                          justifyContent="center"
                        >
                          <Text
                            fontSize="5xl"
                            lineHeight="3.5rem"
                            fontWeight="bold"
                          >
                            CRM-løsningen ditt salg og markedsteam vil elske
                          </Text>
                          <Text fontSize="xl">
                            Freshworks CRM bruker AI, automasjoner og sømløse
                            integrasjoner for å gi deg de verktøyene ditt salgs-
                            og markedsteam behøver for å jobbe bedre. 
                          </Text>
                        </Flex>
                        <Flex flexDirection="column" width="50%" gap={2}>
                          <Text
                            textAlign="center"
                            fontSize="3xl"
                            fontWeight="bold"
                          >
                            Start din 21-dagers gratis prøveperiode.
                          </Text>
                          <FormControl>
                            <Stack direction="row" spacing={2}>
                              <InputGroup alignItems="center">
                                <InputLeftElement>
                                  {' '}
                                  <SearchIcon />{' '}
                                </InputLeftElement>
                                <Input
                                  type="name"
                                  placeholder="Fornavn"
                                  isRequired
                                />
                              </InputGroup>
                              <InputGroup alignItems="center">
                                <Input
                                  type="name"
                                  placeholder="Etternavn"
                                  isRequired
                                />
                              </InputGroup>
                            </Stack>
                            <Stack
                              direction="column"
                              spacing={0}
                              alignItems="center"
                            >
                              <InputGroup>
                                <InputLeftElement>
                                  {' '}
                                  <EmailIcon />{' '}
                                </InputLeftElement>
                                <Input
                                  type="email"
                                  placeholder="E-post"
                                  isRequired
                                />
                              </InputGroup>
                              <InputGroup>
                                <InputLeftElement>
                                  {' '}
                                  <SettingsIcon />{' '}
                                </InputLeftElement>
                                <Input
                                  type="name"
                                  placeholder="Bedrift"
                                  isRequired
                                />
                              </InputGroup>
                              <InputGroup>
                                <InputLeftElement>
                                  {' '}
                                  <PhoneIcon />{' '}
                                </InputLeftElement>
                                <Input
                                  type="tel"
                                  placeholder="Telefonnummer"
                                  isRequired
                                />
                              </InputGroup>
                            </Stack>
                            <Button
                              type="submit"
                              width="100%"
                              bgColor="green10"
                              mt={2}
                            >
                              Registrer Gratis
                            </Button>
                          </FormControl>
                        </Flex>
                      </Flex>
                    </ScaleFade>
                  </Flex>
                </TabPanel>
                <TabPanel /*freshchat*/>
                  <ScaleFade initialScale={0.5} in={isOpen}>
                    <Flex flexDirection="row" gap={3}>
                      <Flex
                        flexDirection="column"
                        width="50%"
                        gap={2}
                        justifyContent="center"
                      >
                        <Text
                          fontSize="5xl"
                          lineHeight="3.5rem"
                          fontWeight="bold"
                        >
                          Hank dem inn og behold dem.
                        </Text>
                        <Text fontSize="xl">
                          Freshchat er en moderne chatprogramvare som er laget
                          for team som ønsker å gjøre mer for kundene. Med
                          Freshchat gjør du besøkende om til leads og brukere
                          til å bli fornøyde kunder.
                        </Text>
                      </Flex>
                      <Flex flexDirection="column" width="50%" gap={2}>
                        <Text
                          textAlign="center"
                          fontSize="3xl"
                          fontWeight="bold"
                        >
                          Start din 30-dagers gratis prøveperiode.
                        </Text>
                        <FormControl>
                          <Stack direction="row" spacing={2}>
                            <InputGroup alignItems="center">
                              <InputLeftElement>
                                {' '}
                                <SearchIcon />{' '}
                              </InputLeftElement>
                              <Input
                                type="name"
                                placeholder="Fornavn"
                                isRequired
                              />
                            </InputGroup>
                            <InputGroup alignItems="center">
                              <Input
                                type="name"
                                placeholder="Etternavn"
                                isRequired
                              />
                            </InputGroup>
                          </Stack>
                          <Stack
                            direction="column"
                            spacing={0}
                            alignItems="center"
                          >
                            <InputGroup>
                              <InputLeftElement>
                                {' '}
                                <EmailIcon />{' '}
                              </InputLeftElement>
                              <Input
                                type="email"
                                placeholder="E-post"
                                isRequired
                              />
                            </InputGroup>
                            <InputGroup>
                              <InputLeftElement>
                                {' '}
                                <SettingsIcon />{' '}
                              </InputLeftElement>
                              <Input
                                type="name"
                                placeholder="Bedrift"
                                isRequired
                              />
                            </InputGroup>
                            <InputGroup>
                              <InputLeftElement>
                                {' '}
                                <PhoneIcon />{' '}
                              </InputLeftElement>
                              <Input
                                type="tel"
                                placeholder="Telefonnummer"
                                isRequired
                              />
                            </InputGroup>
                          </Stack>
                          <Button
                            type="submit"
                            width="100%"
                            bgColor="green10"
                            mt={2}
                          >
                            Registrer Gratis
                          </Button>
                        </FormControl>
                      </Flex>
                    </Flex>
                  </ScaleFade>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </Show>
    </Layout>
  );
};

export default Products;
