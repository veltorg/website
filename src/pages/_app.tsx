import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo, LocalBusinessJsonLd } from 'next-seo';
import type { AppProps } from 'next/app';
import { TogglesProvider } from '../providers/toggles-provider';
import { theme } from '../theme';
import '@fontsource/inter';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const siteKey = '6Lc_78ElAAAAAFFkzMSMFg-Uisc7-nlxPrFvVbuN';

export const app: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      <ChakraProvider theme={theme}>
        <DefaultSeo
          title="Velt – vi skaper gode opplevelser"
          description="Vi skaper gode kunde- og ansattopplevelser for å gjøre hverdagen bedre for folk"
          openGraph={{
            type: 'website',
            locale: 'no_NB',
            url: 'https://velt.no/',
            siteName: 'Velt',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
        <LocalBusinessJsonLd
          type="LocalBusiness"
          id="https://velt.no/"
          name="Velt AS"
          description="Vi skaper gode kunde- og ansattopplevelser for å gjøre hverdagen bedre for folk"
          url="https://velt.no/"
          telephone="+4721080000"
          address={{
            streetAddress: 'Myntgata 2',
            addressLocality: 'Oslo',
            addressRegion: 'Oslo',
            postalCode: '0152',
            addressCountry: 'NO',
          }}
        />
        <TogglesProvider>
          <Component {...pageProps} />
        </TogglesProvider>
      </ChakraProvider>
    </GoogleReCaptchaProvider>
  );
};

export default app;
