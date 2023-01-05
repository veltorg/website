import { Container, Flex, Grid, Image, Link, ListItem, Show, Text, UnorderedList, useColorMode } from '@chakra-ui/react';
import { Freshworks } from './elements/freshworks';
import { FreshworksDark } from './elements/freshworks-dark';
import { Switches } from './elements/switch';
import NextLink from 'next/link';
import { DesktopLogo } from '../header/elements/desktop-logo';
import { DesktopLogoDark } from '../header/elements/desktop-logo-dark';

export const Footer: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode();
  const freshLogo = colorMode === 'light' ? <Freshworks /> : <FreshworksDark />;
  const logoInput = colorMode === 'light' ? <DesktopLogo /> : <DesktopLogoDark/>
  return (
    <Flex width='100%' m="0rem" p="0rem" flexDirection='column'>
      <Show above="md">
        <Flex backgroundColor='green10' width='100%' p={4}>
          <Grid templateColumns={'1fr 1fr 1fr'} width='100%'>
            <Flex flexDirection="column" gap={2}>
              <Flex>
                {logoInput}
              </Flex>
            <UnorderedList>
              <ListItem>
                Dronningens gate 8b
              </ListItem>
              <ListItem>
                0152 Oslo
              </ListItem>
              <ListItem>
                <Link as={NextLink} href='tel:210 80 000'>
                  210 80 000
                </Link>
              </ListItem>
              <ListItem>
                <Link as={NextLink} href='mailto:salg@velt.no'>
                  salg@velt.no
                </Link>
              </ListItem>
            </UnorderedList>
            </Flex>
            <Flex flexDirection="column" gap={2} mt={4}>
              <Text fontSize='lg' fontWeight='semibold'>
                Products
              </Text>
            <UnorderedList>
              <ListItem>
              <Link as={NextLink} href='/produkter'>
                  freshdesk
                </Link>
              </ListItem>
              <ListItem>
              <Link as={NextLink} href='/produkter'>
                  freshsales
                </Link>
              </ListItem>
              <ListItem>
                <Link as={NextLink} href='/produkter'>
                  freshchat
                </Link>
              </ListItem>
              <ListItem>
                <Link as={NextLink} href='/produkter'>
                  freshservice
                </Link>
              </ListItem>
            </UnorderedList>
            </Flex>
            <Flex flexDirection="column" gap={2} mt={4}>
              <Text fontSize='lg' fontWeight='semibold'>
                About us
              </Text>
            <UnorderedList>
              <ListItem>
              <Link as={NextLink} href='/about'>
                  Velt AS
                </Link>
              </ListItem>
              <ListItem>
              <Link as={NextLink} href='/contact'>
                  Contact us
                </Link>
              </ListItem>
              <ListItem>
                <Link as={NextLink} href='/webinar'>
                  Webinar
                </Link>
              </ListItem>
            </UnorderedList>
            </Flex>
          </Grid>
        </Flex>
      </Show>
    <Show below="md">
    <Flex sx={{ flexDirection: 'column', p: 3, gap: 4, mt: 2 }}>
      <Flex sx={{ alignItems: 'center', justifyContent: 'center', gap: 1 }}>
        {freshLogo}
      </Flex>
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Switches />
      </Flex>
    </Flex>
    </Show>
    </Flex>
  );
};
