import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { theme } from '../theme';
import '@fontsource/inter';

export const app: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
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
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default app;
