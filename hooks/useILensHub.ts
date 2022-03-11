import { useContract } from './useContract';
import ILensHubJson from '../constants/ILensHub.json';

const { abi: ILensHubABI } = ILensHubJson;

export const useLensHubContract = (address: string, withSignerIfPossible?: boolean) =>
  useContract<any>(address, ILensHubABI, withSignerIfPossible);
