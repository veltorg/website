<script lang="ts">
  import { onMount } from 'svelte';

  const togglesStore = localStorage.getItem('toggles') ?? '';
  const toggles = togglesStore.trim().split(',');

  export function isEnabled(feature: string): boolean {
    if (toggles.includes(feature)) {
      return true;
    }

    return false;
  }

  const collectorUrl =
    'https://europe-west1-velt-metrics.cloudfunctions.net/signup-form-collector-7b80f45';
  const formPath = 'signup/partners-external-iframe-signup';
  const types = {
    freshchat: {
      title: 'Freshchat',
      url: 'https://freshworks.com/live-chat-software',
    },
    freshdesk: {
      title: 'Freshdesk',
      url: 'https://freshdesk.com',
    },
    freshsales: {
      title: 'Freshsales',
      url: 'https://freshworks.com/crm',
    },
    freshservice: {
      title: 'Freshservice',
      url: 'https://freshservice.com',
    },
  } as const;

  type Types = keyof typeof types;
  export let type: Types;
  const config = types[type];

  if (!config) {
    throw new Error('Invalid type');
  }

  const url = new URL([config.url, formPath].join('/'));

  const sendSignUpToCollector = async (signUpUrl: string) => {
    try {
      grecaptcha.ready(async () => {
        const token = await grecaptcha.execute(
          '6Lc_78ElAAAAAFFkzMSMFg-Uisc7-nlxPrFvVbuN',
          {
            action: 'submit',
          },
        );
        fetch(collectorUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            signUpUrl,
            recaptchaToken: token,
          }),
        });
      });
    } catch {
      // eslint-disable-next-line no-console
      console.error('Failed to send data to collector');
    }
  };

  type MessageEvent = {
    data: string;
    origin: string;
  };

  type ParsedMessage = {
    signup_finished: boolean;
    url: string;
  };

  function handleMessage(event: MessageEvent) {
    try {
      const parsedMessage = JSON.parse(event.data) as ParsedMessage;
      // eslint-disable-next-line no-console
      console.log({ event, parsedMessage });

      sendSignUpToCollector(parsedMessage.url);

      if (parsedMessage.signup_finished) {
        window.location.href = parsedMessage.url.trim();
      }
    } catch {
      // eslint-disable-next-line no-console
      console.error('Failed to parse message');
    }
  }

  onMount(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  });
</script>

<svelte:head>
  <script
    src="https://www.google.com/recaptcha/api.js?render=6Lc_78ElAAAAAFFkzMSMFg-Uisc7-nlxPrFvVbuN"
  ></script>
</svelte:head>

<iframe
  class="fw-iframe"
  title="freshworks"
  src={url.toString()}
  allowFullscreen
/>

{#if isEnabled('dev-signup-form')}
  <button on:click={() => sendSignUpToCollector('https://testdomain.com')}>
    Simulate signup collector call
  </button>
{/if}

<style>
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    border: none;
  }
</style>
