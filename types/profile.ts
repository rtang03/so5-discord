import { BigNumber, Bytes } from 'ethers';

export type Profile = {
  pubCount: BigNumber;
  followModule: string;
  followNFT: string;
  handle: string;
  imageURI: string;
  followNFTURI: string;
};

export type CreateProfileData = {
  to: string;
  handle: string;
  imageURI: string;
  followModule: string;
  followModuleData: Bytes;
  followNFTURI: string;
}