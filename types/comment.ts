import { BigNumber, Bytes } from 'ethers';

export type CommentData = {
  profileId: BigNumber;
  contentURI: string;
  profileIdPointed: BigNumber;
  pubIdPointed: BigNumber;
  collectModule: string;
  collectModuleData: Bytes;
  referenceModule: string;
  referenceModuleData: Bytes;
};
