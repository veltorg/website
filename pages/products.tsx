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
  SimpleGrid,
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
  Tooltip,
  Tr,
  UnorderedList,
  propNames,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { Layout } from '../components/layout';
import {
  CheckIcon,
  EmailIcon,
  InfoIcon,
  InfoOutlineIcon,
  PhoneIcon,
  SearchIcon,
  SettingsIcon,
} from '@chakra-ui/icons';
import { Freshworks } from '../components/footer/elements/freshworks';
import { FreshworksDark } from '../components/footer/elements/freshworks-dark';
import { Pricing } from '../components/pricing';

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
                  <Image src="/freshdesk/freshdesk.svg" />
                </Tab>
                <Tab onClick={onOpen}>
                  <Image src="/freshservice/freshservice.svg" />
                </Tab>
                <Tab onClick={onOpen}>
                  <Image src="/freshsales/freshsales.svg" />
                </Tab>
                <Tab onClick={onOpen}>
                  <Image src="/freshchat/freshchat.svg" />
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
                        <Image src="/freshdesk/freshdesk.svg" mt={4} w="20%" />
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
                          <Image src="/freshdesk/freshdeskgraphic-person.svg" />
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
                          src="/freshdesk/freshdeskgraphic-pc.svg"
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
                            <Image src="/freshdesk/freshdeskgraphic-kog.svg" />
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
                            <Image src="/freshdesk/freshdeskgraphic-handshake.svg" />
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
                            <Image src="/freshdesk/freshdeskgraphic-kogs.svg" />
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
                          </Text>
                          <UnorderedList>
                            <ListItem>
                              Share ownership of tickets without losing
                              visibility. Loop in teammates for a discussion
                              right inside the ticket for full context.
                            </ListItem>
                            <ListItem>
                              Split tickets with several tasks into sub-tickets.
                              Have multiple teams work on them in parallel.
                            </ListItem>
                            <ListItem>
                              Link and keep track of tickets related to similar
                              issues. Send bulk updates to customers in one go.
                            </ListItem>
                          </UnorderedList>
                        </Flex>
                        <Flex width="50%" align="center" justify="end">
                          <Image
                            src="/freshdesk/freshdesk-screenshot.jpg"
                            h="70%"
                          />
                        </Flex>
                      </Flex>
                      <Flex flexDirection="row" p={4} gap={3}>
                        <Flex width="50%" align="center">
                          <Image src="/freshdesk/freshdesk-admin.jpg" />
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
                          <Image src="/freshdesk/freshdesk-carousel.svg" />
                        </Flex>
                      </Flex>
                      <Flex p={4} align="center" flexDirection="column" gap={3}>
                        <Text fontSize="2xl" fontWeight="bold">
                          AI powered automations to streamline your team&apos;
                          workflows
                        </Text>

                        <Flex w="70%">
                          <Image src="/freshdesk/freshdesk-page.svg" />
                        </Flex>
                      </Flex>
                      <Flex
                        flexDirection="column"
                        bgColor="green10"
                        p={4}
                        gap={2}
                      >
                        <Text fontSize="2xl" fontWeight="bold" color="green00">
                          We&apos;ve simplified ticketing for you!
                        </Text>
                        <Text>
                          Customer issues from any channel can be converted into
                          tickets in Freshdesk. This way, none of your customer
                          conversations slip through the cracks.
                        </Text>
                      </Flex>
                      <Flex p={4}>
                        <Image src="/freshdesk/freshdesk-admin2.jpg" />
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
                      <Flex flexDirection="column" p={4} gap={3}>
                        <Flex justify="center">
                          <Text fontSize="2xl">Kundereferanser</Text>
                        </Flex>
                        <Flex flexDirection="row" gap={3}>
                          <Image src="./pearson.svg" w="20%"/>
                          <Flex flexDirection="column" gap={2}>
                            <Text>
                              &apos;&apos;Vi ble solgt da vi så Freshdesk. Kombinasjonen av
                              sosiale medier, e-post, kunnskapsbas, mobil og
                              fleksibilitet på en og samme platform, gjorde det
                              enkelt for oss å velge en kundesenter-løsning.&apos;&apos;
                            </Text>
                            <Text fontWeight="semibold">Matthijs Lok</Text>
                          </Flex>
                          <Image src="./lesley.jpg" w="20%" alignSelf="center"/>
                          <Flex flexDirection="column" gap={2} >
                            <Text>
                            &apos;&apos;Vi begynte å lete etter en ny løsning på høsten og
                              var opptatt av å få noe på plass og optimalisert
                              raskt. Freshdesk sørget for en rask og enkel
                              implementering og vi var i gang innen 48 timer.&apos;&apos;
                            </Text>
                            <Text fontWeight="semibold">Vaughan Potter</Text>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Flex></Flex>
                      <Flex p={4} bgColor="green.100" width="100%">
                        <SimpleGrid
                          width="100%"
                          columns={4}
                          gridTemplateRows="auto auto auto"
                          border="2px"
                          borderRadius="md"
                        >
                          <GridItem borderBottom="2px" p={1}>
                            <Text
                              fontSize="lg"
                              fontWeight="bold"
                              align="center"
                            >
                              Free
                            </Text>
                            <Text fontSize="sm" mt={1} align="center">
                              Get going for free
                            </Text>
                          </GridItem>

                          <GridItem borderBottom="2px" p={1}>
                            <Text
                              fontSize="lg"
                              align="center"
                              fontWeight="bold"
                            >
                              Growth
                            </Text>
                            <Text fontSize="sm" mt={1} align="center">
                              Intuitive, industry-leading
                              <br />
                              support for growing businesses
                            </Text>
                          </GridItem>
                          <GridItem borderBottom="2px" p={1}>
                            <Text
                              fontSize="lg"
                              align="center"
                              fontWeight="bold"
                            >
                              Pro
                            </Text>
                            <Text fontSize="sm" mt={1} align="center">
                              Advanced automation for high
                              <br />
                              performance
                            </Text>
                          </GridItem>
                          <GridItem borderBottom="2px" p={1}>
                            <Text
                              fontSize="lg"
                              align="center"
                              fontWeight="bold"
                            >
                              Enterprise
                            </Text>
                            <Text fontSize="sm" mt={1} align="center">
                              Fully featured with bots for
                              <br />
                              enterprise-level support
                            </Text>
                          </GridItem>
                          <GridItem p={1}>
                            <Text
                              align="center"
                              fontSize="lg"
                              fontWeight="semibold"
                            >
                              €0
                            </Text>
                            <Text align="center" fontSize="md">
                              Up to 10 agents
                            </Text>
                          </GridItem>
                          <GridItem p={1}>
                            <Text
                              align="center"
                              fontSize="lg"
                              fontWeight="semibold"
                            >
                              €15
                            </Text>
                            <Text align="center" fontSize="md">
                              /agent/month, billed annualy <br />
                              €18 <br />
                              /agent/month, billed monthly
                            </Text>
                          </GridItem>
                          <GridItem p={1}>
                            <Text
                              align="center"
                              fontSize="lg"
                              fontWeight="semibold"
                            >
                              €49
                            </Text>
                            <Text align="center" fontSize="md">
                              /agent/month, billed annualy <br />
                              €59 <br />
                              /agent/month, billed monthly
                            </Text>
                          </GridItem>
                          <GridItem p={1}>
                            <Text
                              align="center"
                              fontSize="lg"
                              fontWeight="semibold"
                            >
                              €79
                            </Text>
                            <Text align="center" fontSize="md">
                              /agent/month, billed annualy <br />
                              €95 <br />
                              /agent/month, billed monthly
                            </Text>
                          </GridItem>
                          <GridItem
                            borderBottom="2px"
                            p={2}
                            justifySelf="center"
                          >
                            <Button size="sm" border="1px" borderRadius="none">
                              Start Free Trial
                            </Button>
                          </GridItem>
                          <GridItem
                            borderBottom="2px"
                            p={2}
                            justifySelf="center"
                          >
                            <Button size="sm" border="1px" borderRadius="none">
                              Start Free Trial
                            </Button>
                          </GridItem>
                          <GridItem
                            borderBottom="2px"
                            p={2}
                            justifySelf="center"
                          >
                            <Button size="sm" border="1px" borderRadius="none">
                              Start Free Trial
                            </Button>
                          </GridItem>
                          <GridItem
                            borderBottom="2px"
                            p={2}
                            justifySelf="center"
                          >
                            <Button size="sm" border="1px" borderRadius="none">
                              Start Free Trial
                            </Button>
                          </GridItem>
                          <GridItem p={2} justifySelf="center">
                            <Text fontSize="sm">
                              <CheckIcon /> Integrated ticketing across email
                              and social{' '}
                              <Tooltip
                                label="Convert all email and social inquiries
                                    into tickets and track, prioritize, 
                                    and reply using Freshdesk."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Ticket Dispatch{' '}
                              <Tooltip
                                label="Categorize, prioritize, and route tickets to
                                    the right teams by creating your own business rules."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Knowledge Base{' '}
                              <Tooltip
                                label="Enable customers to help themselves 
                                    by finding answers on their own."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Ticket Trend Report{' '}
                              <Tooltip
                                label="Analyze trends and stay on top of
                                    tickets by allocating resources at the right time."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Out-of-the-box analytics and
                              reporting{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Choose your data center location{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Team collaboration{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> 24x7 email support{' '}
                            </Text>
                          </GridItem>
                          <GridItem p={2} justifySelf="center">
                            <Text fontSize="sm" as="i">
                              {' '}
                              Everything in Free and...{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Automation{' '}
                              <Tooltip
                                label="Automate follow-ups, escalations, and other tasks 
                                using specific time and event-based triggers to perform any action of your choice."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Collision Detection{' '}
                              <Tooltip
                                label="Know when another agent is viewing/replying
                                to a ticket to avoid duplicating each other's effort."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> 1000+ marketplace apps{' '}
                              <Tooltip
                                label="Get access to 1000+ apps and extend
                                the capabilities of your helpdesk with the Freshworks Marketplace."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> In-depth helpdesk report{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> SLA management & business hours{' '}
                              <Tooltip
                                label="Set the right expectations with customers and agents
                                on the response and resolution timeframes for every ticket
                                in your helpdesk, and set the right business hours."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Custom Email Server{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Custom Ticket Views{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Custom ticket fields & status{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Custom SSL{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Easily track time spent by agents on
                              tickets{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> 24x5 phone support{' '}
                            </Text>
                          </GridItem>
                          <GridItem p={2} justifySelf="center">
                            <Text fontSize="sm" as="i">
                              {' '}
                              Everything in Growth and...{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Multiple products{' '}
                              <Tooltip label="Up to 5 products">
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Includes up to 5000 Collaborators{' '}
                              <Tooltip
                                label="Invite external agents and third parties into 
                                Freshdesk to help full-time agents resolve complex customer issues."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Round-robin routing{' '}
                              <Tooltip
                                label="Automatically assign tickets to all available
                                 agents in a group in a circular fashion."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Custom Roles{' '}
                              <Tooltip label="Provide or restrict access to your agents at granular levels.">
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Custom Reports and Dashboards{' '}
                              <Tooltip
                                label="Create powerful reports and dashboards unique to your
                                 business and draw deeper insights from your Freshdesk data."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Segment customers for personalized
                              support{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Customer journey{' '}
                              <Tooltip
                                label="Show agents the solution articles that a customer
                                 opened before they created a support ticket."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Canned forms{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Manage versions in knowledge base{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Community forums{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Extendable API Limits{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> CSAT surveys & reports{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Multiple SLA policies & business
                              hours{' '}
                              <Tooltip
                                label="Set custom Service Level Agreements (SLA) for multiple regions, products and business
                                 units to prioritize and deliver by suitable deadlines for each requirement."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> SLA reminder & escalation{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Multilingual knowledge base{' '}
                              <Tooltip label="Supports 42 languages">
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Custom apps{' '}
                              <Tooltip
                                label="Extend your support capabilities 
                                by building apps customized for your business."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Average handling Time (AHT){' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Custom Metrics{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Report Sharing{' '}
                            </Text>
                          </GridItem>
                          <GridItem p={2} justifySelf="center">
                            <Text fontSize="sm" as="i">
                              {' '}
                              Everything in Pro and...{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Unlimited products{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Sandbox{' '}
                              <Tooltip
                                label="Create a secure test environment to try new features and 
                                settings in Freshdesk without impacting agents or customers."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Easily manage agent shifts across
                              time zones{' '}
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Custom objects{' '}
                              <Tooltip label="Create or bring in business-critical data right inside your Freshdesk.">
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Assist bot{' '}
                              <Tooltip
                                label="Guide agents through pre-configured steps
                                 to help resolve customer queries faster. Does not require bot sessions."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Email bot{' '}
                              <Tooltip
                                label="Automatically respond to email tickets with relevant
                                 solution articles. Consumes bot sessions."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Audit log{' '}
                              <Tooltip
                                label="Monitor changes and always stay up-to-date 
                                on what's happening with your helpdesk."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Skill-based routing{' '}
                              <Tooltip
                                label="Match tickets to the agent most skilled in 
                                handling specific types of issues within the group."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Knowledge base approval workflow{' '}
                              <Tooltip label="Track, review, approve, and publish knowledge base articles.">
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Flexible knowledge base hierarchy{' '}
                              <Tooltip label="Categorize articles up to 5 folder levels and scale your knowledge base.">
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> IP range restriction{' '}
                              <Tooltip label="Increase helpdesk security by allowing certain IP addresses to access your portal.">
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Auto-triage Freddy{' '}
                              <Tooltip
                                label="Automatically predict basic ticket fields like Type, 
                                Priority & Group and other custom ticket fields."
                              >
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Article suggester{' '}
                              <Tooltip label="Let Freddy suggest solution articles to your agents to help them respond to tickets faster.">
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> Canned response suggester{' '}
                              <Tooltip label="Let Freddy suggest canned responses to help your agents respond to tickets faster.">
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                            <Text fontSize="sm">
                              <CheckIcon /> AI-powered social signals{' '}
                              <Tooltip label="Use AI to find important tweets and cancel out the noise.">
                                <InfoOutlineIcon />
                              </Tooltip>
                            </Text>
                          </GridItem>
                        </SimpleGrid>
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
