import type { Web3ReactHooks } from '@web3-react/core';

const ConnectStatus = ({
  isActivating,
  error,
  isActive,
  account,
}: {
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>;
  error: ReturnType<Web3ReactHooks['useError']>;
  isActive: ReturnType<Web3ReactHooks['useIsActive']>;
  account?: string;
}) => {
  return (
    <div>
      {error ? (
        <>
          🔴 {error.name ?? 'Error'}
          {error.message ? `: ${error.message}` : null}
        </>
      ) : isActivating ? (
        <>🟡 Connecting</>
      ) : isActive ? (
        <>🟢 Connected with {account}</>
      ) : (
        <>⚪️ Disconnected</>
      )}
    </div>
  );
};

export default ConnectStatus;
