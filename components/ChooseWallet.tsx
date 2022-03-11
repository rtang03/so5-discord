import useInactiveListener from '../hooks/useInactiveListener';
import ILensHubJson from '../constants/ILensHub.json';
import useEagerConnect from 'hooks/useEagerConnect';
import { injected } from 'utils/connectors';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { useState } from 'react';
import { UserRejectedRequestError, NoEthereumProviderError } from '@web3-react/injected-connector';
import { ethers } from 'ethers';

const ChooseWallet = () => {
  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState<any>();

  const context = useWeb3React<Web3Provider>();
  const { activate, deactivate, active, error, chainId, library } = context;
  const isUnsupportedChainIdError = error instanceof UnsupportedChainIdError;
  const isNoEthereumProviderError = error instanceof NoEthereumProviderError;
  const isUserRejectedRequestError = error instanceof UserRejectedRequestError;

  const { abi } = ILensHubJson;
  const contract = new ethers.Contract(
    // hardhat account 0
    '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    abi,
    library?.getSigner()
  );

  const onClick = async () => {
    const profile = await contract.getProfile(1);
    console.log('profile', profile);
  };

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <div className="mt-2">
      <p className="my-2 text-xl text-gray-500">MetaMask</p>
      <div>Chain ID: {chainId ? `${chainId} is connected` : 'none'}</div>
      <div>
        {active ? (
          <button className="my-2 border-2 bg-red-400 p-2" onClick={() => deactivate()}>
            Disconnect
          </button>
        ) : (
          <button
            className="my-2 border-2 bg-blue-400 p-2"
            disabled={!triedEager || !!error}
            onClick={async () => {
              setActivatingConnector(injected);
              await activate(injected, (error) => error && setActivatingConnector(undefined));
            }}
          >
            Connect
          </button>
        )}
      </div>
      <button onClick={onClick} className="border-2 bg-blue-300">
        Hello
      </button>
      {triedEager && !active && error && (
        <div>
          Oops! An unknown error occurred. Please refresh the page, or visit from another browser or
          device.
        </div>
      )}
      {/* debug */}
      {error && isUnsupportedChainIdError && console.error('UnsupportedChainIdError')}
      {error && isNoEthereumProviderError && console.error('NoEthereumProviderError')}
      {error && isUserRejectedRequestError && console.error('UserRejectedRequestError')}
    </div>
  );
};

export default ChooseWallet;
