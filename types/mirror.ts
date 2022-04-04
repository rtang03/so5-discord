import { BigNumber, Bytes } from 'ethers';

export type Mirror = {
  profileId: BigNumber;
  profileIdPointed: BigNumber;
  pubIdPointed: BigNumber;
  referenceModule: string;
  referenceModuleData: Bytes;
}