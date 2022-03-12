// // https://github.com/Uniswap/interface/blob/5831328364708b251e12bdcb054ed2c6d20b1683/src/utils/index.ts
// import { Contract } from '@ethersproject/contracts';
// import { useMemo } from 'react';
// import { getAddress } from '@ethersproject/address';
// import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
// import { AddressZero } from '@ethersproject/constants';

// //
// import { useWeb3React as useWeb3ReactCore } from '@web3-react/core';
// import { Web3ReactContextInterface } from '@web3-react/core/dist/types';

// // https://github.com/Uniswap/interface/blob/5831328364708b251e12bdcb054ed2c6d20b1683/src/constants/misc.ts
// export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
// export const NetworkContextName = 'NETWORK';

// // returns the checksummed address if the address is valid, otherwise returns false
// export const isAddress = (value: any): string | false => {
//   try {
//     return getAddress(value);
//   } catch {
//     return false;
//   }
// };

// const getSigner = (library: Web3Provider, account: string): JsonRpcSigner =>
//   library.getSigner(account).connectUnchecked();

// const getProviderOrSigner = (
//   library: Web3Provider,
//   account?: string
// ): Web3Provider | JsonRpcSigner => (account ? getSigner(library, account) : library);

// export function getContract(
//   address: string,
//   ABI: any,
//   library: Web3Provider,
//   account?: string
// ): Contract {
//   if (!isAddress(address) || address === AddressZero)
//     throw Error(`Invalid 'address' parameter '${address}'.`);

//   return new Contract(address, ABI, getProviderOrSigner(library, account) as any);
// }

// //https://github.com/Uniswap/interface/blob/5831328364708b251e12bdcb054ed2c6d20b1683/src/hooks/useContract.ts
// export const useActiveWeb3React = (): Web3ReactContextInterface<Web3Provider> => {
//   const context = useWeb3ReactCore<Web3Provider>();
//   const contextNetwork = useWeb3ReactCore<Web3Provider>(NetworkContextName);
//   return context.active ? context : contextNetwork;
// };

// export const useContract = <T extends Contract = Contract>(
//   addressOrAddressMap: string | { [chainId: number]: string } | undefined,
//   ABI: any,
//   withSignerIfPossible = true
// ): T | null => {
//   const { library, account, chainId } = useActiveWeb3React();

//   return useMemo(() => {
//     if (!addressOrAddressMap || !ABI || !library || !chainId) return null;
//     let address: string | undefined;
//     if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap;
//     else address = addressOrAddressMap[chainId];
//     if (!address) return null;
//     try {
//       return getContract(
//         address,
//         ABI,
//         library,
//         withSignerIfPossible && account ? account : undefined
//       );
//     } catch (error) {
//       console.error('Failed to get contract', error);
//       return null;
//     }
//   }, [addressOrAddressMap, ABI, library, chainId, withSignerIfPossible, account]) as T;
// };
