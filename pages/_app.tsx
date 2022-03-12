import '../styles/globals.css';
import Head from 'next/head';
import { MoralisProvider } from 'react-moralis';
import type { AppProps } from 'next/app';

const APP_ID = process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID as string;
const SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL as string;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;

  if (!APP_ID || !SERVER_URL)
    throw new Error(
      'Missing Moralis Application ID or Server URL. Make sure to set your .env file.'
    );

  return (
    <MoralisProvider serverUrl={SERVER_URL} appId={APP_ID}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>So5 Discord</title>
      </Head>
      <Component {...pageProps} />
    </MoralisProvider>
  );
};

export default MyApp;
