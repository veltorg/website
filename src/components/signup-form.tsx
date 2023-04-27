import { Box, chakra } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useToggles } from '../providers/toggles-provider';

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
  const { isEnabled } = useToggles();
  useEffect(() => {
    const handleMessage = (event: MessageEvent): void => {
      if (isEnabled('dev-signup-form')) {
        // eslint-disable-next-line no-console
        console.log({ event });
      }
      if (isValidJSON(event.data)) {
        const parsedMessage = JSON.parse(event.data) as ParsedMessage;

        if (isEnabled('dev-signup-form')) {
          // eslint-disable-next-line no-console
          console.log({ parsedMessage });
        } else {
          if (parsedMessage.signup_finished) {
            window.location.href = parsedMessage.url.trim();
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        minHeight: '800px',
      }}
    >
      {isEnabled('dev-signup-form') && <div>Development Signup Form Mode</div>}
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
        src="https://freshservice.com/signup/partners-external-iframe-signup"
      />
    </Box>
  );
};
