import ILensHubJson from '../constants/ILensHub.json';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

const SendTx = () => {
  const { library, chainId } = useWeb3React<Web3Provider>();
  const { abi } = ILensHubJson;
  console.log('chainId: ', chainId);
  console.log('lib: ', library);
  const contract = new ethers.Contract('0x7c2c195cd6d34b8f845992d380aadb2730bb9c6f', abi, library);
  const onClick = async () => {
    const profile = await contract.getProfile(1);
    console.log('profile', profile);
  };

  return (
    <button onClick={onClick} className="border-2 bg-blue-300">
      Hello
    </button>
  );
};

export default SendTx;
