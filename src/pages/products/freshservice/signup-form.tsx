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

export const SignUpForm: React.FC = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent): void => {
      console.log({ event });
      if (isValidJSON(event.data)) {
        const parsedMessage = JSON.parse(event.data) as ParsedMessage;

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
    <div className="fw-ctner">
      <iframe
        className="fw-iframe"
        // gesture="media"
        // allow="encrypted-media"
        allowFullScreen
        src="https://www.freshworks.com/no/freshdesk/signup/partners-external-iframe-signup/"
      ></iframe>
    </div>
  );
};
