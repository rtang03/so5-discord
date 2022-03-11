// https://github.com/Uniswap/interface/blob/main/src/constants/addresses.ts
import { SupportedChainId } from './chains';
import { constructSameAddressMap } from '../utils';

type AddressMap = { [chainId: number]: string };

export const LENS_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984', [
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.MAINNET]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3',
};
