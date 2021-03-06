import { getAddress } from '@ethersproject/address';

export * from './contracts';
export * from './networks';

// returns the checksummed address if the address is valid, otherwise returns false
export const isAddress = (value: any): string | false => {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
};

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export const shortenAddress = (address: string, chars = 2): string => {
  const parsed = isAddress(address);
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
};
