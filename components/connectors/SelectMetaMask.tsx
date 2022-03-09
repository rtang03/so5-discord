import ConnectStatus from './ConnectStatus';
import { hooks, metaMask } from '../../utils/connectors/metaMask';

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
      <p className="my-2 text-xl text-gray-500">MetaMask {`(${chainId})`}</p>
      <ConnectStatus isActivating={isActivating} error={error} isActive={isActive} />
      {accounts?.map((account, index) => (
        <div className="my-2" key={index}>{ENSNames?.[index] || account}</div>
      ))}
      {!isActive && (
        <button className="my-2 p-2 border-2" disabled={isActivating} onClick={() => metaMask.activate()}>
          Connect
        </button>
      )}
      {isActive && (
        <button className="my-2 p-2 border-2" onClick={() => metaMask.deactivate()}>
          Disconnect
        </button>
      )}
    </div>
  );
};

export default SelectMetaMask;
