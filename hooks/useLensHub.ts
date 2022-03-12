import ILensHubJson from '../constants/ILensHub.json';
import addresses from '../addresses.json';
import { useWeb3Contract } from 'react-moralis';

const { abi } = ILensHubJson;

const contractAddress = addresses['lensHub proxy'];

export const useLensHubContract = (functionName: string, params: any) =>
  useWeb3Contract({
    abi,
    contractAddress, // your contract address here
    functionName,
    params,
  });
