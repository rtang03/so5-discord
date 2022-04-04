import Address from 'components/Address';
import SettingLayout from 'components/SettingLayout';
import { useMoralis } from 'react-moralis';

const AccountPage = () => {
  const { chainId, isWeb3Enabled, serverUrl, appId, network, connectorType } = useMoralis();

  return (
    <SettingLayout title="Account">
      <>
        <div>
          {isWeb3Enabled && (
            <>
              <div>chainId: {chainId}</div>
              <div>serverUrl: {serverUrl}</div>
              <div>appId: {appId}</div>
              <div>network: {network}</div>
              <div>connectorType: {connectorType}</div>
            </>
          )}
        </div>
        <div>Metamask is {(window as any)?.ethereum ? '' : 'not'} detected</div>
        <div>
          {isWeb3Enabled ? (
            <div className="m-2 border-2 p-2 dark:border-gray-900">
              <Address copyable={true} shortAddress={false} chars={5} />
            </div>
          ) : (
            '❎ Wallet is not connected.'
          )}
        </div>
      </>
    </SettingLayout>
  );
};

export default AccountPage;
