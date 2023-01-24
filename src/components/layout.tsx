import { Container, Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Footer } from './footer';
import { Header } from './header';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <Flex
    sx={{
      flexDirection: 'column',
    }}
  >
    <Container>
      <Header />
    </Container>
    <Flex gap={3}>{children}</Flex>
    <Footer />
  </Flex>
);
