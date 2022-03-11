// source: https://github.com/NoahZinsmeister/web3-react/blob/v6/example/connectors.ts
import { InjectedConnector } from '@web3-react/injected-connector';
import { NetworkConnector } from '@web3-react/network-connector';

const RPC_URLS: { [chainId: number]: string } = {
  31337: 'http://127.0.0.1:8545/',
  80001: `https://polygon-mumbai.infura.io/v3/${process.env.NEXT_PUBLIC_infuraKey}`,
};

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97, 1337, 31337],
});

// NOT USED, NOR TESTED
export const network = new NetworkConnector({
  urls: { 80001: RPC_URLS[80001], 31337: RPC_URLS[31337] },
  defaultChainId: 80001,
});
