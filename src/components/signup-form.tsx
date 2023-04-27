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

const formUrl = '/signup/partners-external-iframe-signup';

const types = {
  freshchat: new URL(formUrl, 'https://freshworks.com/live-chat-software/'),
  freshdesk: new URL(formUrl, 'https://freshdesk.com'),
  freshsales: new URL(formUrl, 'https://freshsales.com/freshsales-crm/'),
  freshservice: new URL(formUrl, 'https://freshservice.com'),
} as const;

type Types = keyof typeof types;

type SignUpFormProps = {
  type: Types;
};

export const SignUpForm: React.FC<SignUpFormProps> = (props) => {
  const { isEnabled } = useToggles();
  const url = types[props.type];
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
  }, [isEnabled]);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        minHeight: '800px',
      }}
    >
      {isEnabled('dev-signup-form') ? (
        <Form
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
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
          src={url.toString()}
        />
      ) : (
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
      )}
    </Box>
  );
};
