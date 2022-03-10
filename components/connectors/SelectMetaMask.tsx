import ConnectStatus from './ConnectStatus';
import Chain from './Chain';
// import { hooks, metaMask } from '../../utils/connectors/metaMask';
import { hooks, network } from '../../utils/connectors/network';
import { URLS } from 'utils/chain';

const SelectMetaMask = () => {
  const {
    useChainId,
    useAccounts,
    useError,
    useIsActivating,
    useIsActive,
    useProvider,
    useENSNames,
  } = hooks;

  const chainId = useChainId();
  const accounts = useAccounts();
  const error = useError();
  const isActivating = useIsActivating();
  const isActive = useIsActive();
  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  return (
    <div className="mt-2">
      <p className="my-2 text-xl text-gray-500">MetaMask</p>
      <Chain chainId={chainId} />
      <ConnectStatus
        isActivating={isActivating}
        error={error}
        isActive={isActive}
        account={ENSNames?.[0] || accounts?.[0]?.substring(0, 7) + '...'}
      />
      {!isActive && (
        <button
          className="my-2 border-2 p-2"
          disabled={isActivating}
          onClick={() => network.activate(Number(1))}
        >
          Connect
        </button>
      )}
      {isActive && (
        <button className="my-2 border-2 p-2" onClick={() => network.deactivate()}>
          Disconnect
        </button>
      )}
    </div>
  );
};

export default SelectMetaMask;
