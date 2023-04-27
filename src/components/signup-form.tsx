import { Box, chakra } from '@chakra-ui/react';
import React, { useEffect } from 'react';

type MessageEvent = {
  data: string;
  origin: string;
};

type ParsedMessage = {
  signup_finished: boolean;
  url: string;
};

const isValidJSON = (data: string): boolean => {
  try {
    JSON.parse(data);
  } catch {
    return false;
  }
  return true;
};

const Form = chakra('iframe');

export const SignUpForm: React.FC = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent): void => {
      // eslint-disable-next-line no-console
      console.log({ event });
      if (isValidJSON(event.data)) {
        const parsedMessage = JSON.parse(event.data) as ParsedMessage;

        // eslint-disable-next-line no-console
        console.log({ parsedMessage });

        if (parsedMessage.signup_finished) {
          window.location.href = parsedMessage.url.trim();
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <Box sx={{
      position: 'relative',
      overflow: 'hidden',
      height: '100vh',
      minHeight: '800px',
    }}>
      <Form
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        className="fw-iframe"
        allowFullScreen
        src="https://www.freshworks.com/no/freshdesk/signup/partners-external-iframe-signup/"
      />
    </Box>
  );
};
