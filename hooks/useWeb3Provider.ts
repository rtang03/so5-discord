import { useEffect, useState, useRef } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

const simpleRpcProvider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');

const useWeb3Provider = () => {
  const { library } = useWeb3React();
  const refEth = useRef(library);
  const [provider, setProvider] = useState(library || simpleRpcProvider);

  useEffect(() => {
    if (library !== refEth.current) {
      setProvider(library || simpleRpcProvider);
      refEth.current = library;
    }
  }, [library]);

  return provider;
};

export default useWeb3Provider;
