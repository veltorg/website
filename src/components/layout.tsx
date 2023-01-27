import { Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Footer } from './footer';
import { Header } from './header';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      gap: 'l',
      mt: 'l',
    }}
  >
    <Header />
    <Flex
      sx={{
        flexDirection: 'column',
        gap: 'xl',
        mb: 'l',
      }}
    >
      {children}
    </Flex>
    <Footer />
  </Flex>
);
