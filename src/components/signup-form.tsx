import { Box, Button, chakra } from '@chakra-ui/react';
import { useReCaptcha } from 'next-recaptcha-v3';
import React, { useEffect } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useToggles } from '../providers/toggles-provider';

type MessageEvent = {
  data: string;
  origin: string;
};

type ParsedMessage = {
  signup_finished: boolean;
  url: string;
};

const collectorUrl =
  'https://europe-west1-velt-metrics.cloudfunctions.net/signup-form-collector-7b80f45';

const isValidJSON = (data: string): boolean => {
  try {
    JSON.parse(data);
  } catch {
    return false;
  }
  return true;
};

const Form = chakra('iframe');

const formPath = 'signup/partners-external-iframe-signup';
const baseUrls = {
  freshchat: 'https://freshworks.com/live-chat-software',
  freshdesk: 'https://freshdesk.com',
  freshsales: 'https://freshsales.com/freshsales-crm',
  freshservice: 'https://freshservice.com',
} as const;

type Types = keyof typeof baseUrls;

type SignUpFormProps = {
  type: Types;
};

export const SignUpForm: React.FC<SignUpFormProps> = props => {
  const { isEnabled } = useToggles();
  const url = new URL([baseUrls[props.type], formPath].join('/'));
  const { executeRecaptcha } = useReCaptcha();

  const sendSignUpToCollector = (
    signUpUrl: string,
    recaptchaToken: string,
  ) => {
    try {
      fetch(collectorUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          signUpUrl,
          recaptchaToken,
        }),
      });
    } catch {
      // eslint-disable-next-line no-console
      console.error('Failed to send data to collector');
    }
  }

  useEffect(() => {
    const handleMessage = (event: MessageEvent): void => {
      if (isEnabled('dev-signup-form')) {
        // eslint-disable-next-line no-console
        console.log({ event });
      }
      if (isValidJSON(event.data)) {
        const parsedMessage = JSON.parse(event.data) as ParsedMessage;

        // eslint-disable-next-line promise/catch-or-return
        executeRecaptcha('signup').then(token =>
          sendSignUpToCollector(parsedMessage.url, token),
        );

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
  }, [isEnabled, executeRecaptcha]);

  return (
    <>
      {isEnabled('dev-signup-form') && (
        <Button
          onClick={() =>
            sendSignUpToCollector(
              'https://testdomain.com',
              token || 'hello-world',
            )
          }
        >
          Send to collector
        </Button>
      )}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: '90vh',
          minHeight: '800px',
        }}
      >
        <Form
          // sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
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
      </Box>
      <GoogleReCaptcha
        onVerify={token => {
          setToken(token);
        }}
      />
    </>
  );
};
