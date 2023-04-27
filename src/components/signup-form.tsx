import { Box, Button, chakra } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from 'react-google-recaptcha-v3';
import { useToggles } from '../providers/toggles-provider';

type MessageEvent = {
  data: string;
  origin: string;
};

type ParsedMessage = {
  signup_finished: boolean;
  url: string;
};

const siteKey = '6Lc_78ElAAAAAFFkzMSMFg-Uisc7-nlxPrFvVbuN';
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

function sendSignUpToCollector(
  signUpUrl: string,
  recaptchaToken: string,
): void {
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

export const SignUpForm: React.FC<SignUpFormProps> = props => {
  const { isEnabled } = useToggles();
  const [token, setToken] = useState<string | undefined>();
  const url = new URL([baseUrls[props.type], formPath].join('/'));
  
  useEffect(() => {
    const handleMessage = (event: MessageEvent): void => {
      if (isEnabled('dev-signup-form')) {
        // eslint-disable-next-line no-console
        console.log({ event });
      }
      if (isValidJSON(event.data)) {
        const parsedMessage = JSON.parse(event.data) as ParsedMessage;

        if (token) {
          sendSignUpToCollector(parsedMessage.url, token);
        }

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
    <>
      {isEnabled('dev-signup-form') && (
        <Button
          onClick={() => sendSignUpToCollector('https://testdomain.com', token)}
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
      </Box>
      <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
        <GoogleReCaptcha
          onVerify={token => {
            setToken(token);
          }}
        />
      </GoogleReCaptchaProvider>
    </>
  );
};
