import '../styles/globals.css';
import Head from 'next/head';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import type { AppProps } from 'next/app';

const POLLING_INTERVAL = 12000;

const getLibrary = (provider: any) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>So5 Discord</title>
    </Head>
    <Component {...pageProps} />
  </Web3ReactProvider>
);

export default MyApp;
