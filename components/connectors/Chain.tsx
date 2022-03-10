import { CHAINS } from '../../utils/chain';
import type { Web3ReactHooks } from '@web3-react/core';

const Chain = ({ chainId }: { chainId: ReturnType<Web3ReactHooks['useChainId']> }) => {
  if (chainId === undefined) return null;

  const name = chainId ? CHAINS[chainId]?.name : undefined;

  if (name) {
    return (
      <div className="m-2">
        Chain:{' '}
        <b>
          {name} ({chainId})
        </b>
      </div>
    );
  }

  return (
    <div className="m-2">
      Chain Id: <b>{chainId}</b>
    </div>
  );
};

export default Chain;
