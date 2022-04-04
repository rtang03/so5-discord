import { BigNumber } from 'ethers';

export type Publication = {
  profileIdPointed: BigNumber;
  pubIdPointed: BigNumber;
  contentURI: string;
  referenceModule: string;
  collectModule: string;
  collectNFT: string;
};
