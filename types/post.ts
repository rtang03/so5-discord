import { BigNumber, Bytes } from 'ethers';

export type Post = {
  profileId: BigNumber;
  contentURI: string;
  collectModule: string;
  collectModeulData: Bytes;
  referenceModule: string;
  referenceModuleData: Bytes;
};
