import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

export interface ShowCaseProps {
  // React component to show in the showcase
  figure: React.ReactNode;

  direction?: 'left' | 'right';
}

export const ShowCase: React.FC<React.PropsWithChildren<ShowCaseProps>> = ({
  children,
  figure,
  direction = 'left',
}) => {
  return (
    <Flex
      sx={{
        flexDirection:
          direction === 'left'
            ? ['column', 'row', 'row']
            : ['column', 'column', 'column', 'row-reverse'],
        borderRadius: '2xl',
        borderWidth: '1px',
        borderColor: 'marker',
      }}
    >
      <Box
        sx={{
          borderRadius: '2xl',
          bgColor: 'marker',
          flexGrow: 1,
          p: 'l',
          display: ['none', 'none', 'none', 'flex'],
        }}
      >
        {figure}
      </Box>
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 'm',
          p: 'l',
          maxWidth: '60ch', // TODO: Move this to theme
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
};
