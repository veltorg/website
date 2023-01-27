import { Box, Container } from '@chakra-ui/react';
import { Logo } from './logo';

export const Header: React.FC = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'block',
        }}
      >
        <Logo height="logoHeight" />
      </Box>
    </Container>
  );
};
