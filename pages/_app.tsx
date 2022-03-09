import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>So5 Discord</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
