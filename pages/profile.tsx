import { useLensHubContract } from '../hooks/useLensHub';
import SettingLayout from '../components/SettingLayout';
import { useMoralis } from 'react-moralis';
import React, { useEffect } from 'react';

// dev use
const PROFILE_HANDLE = 'zer0dot';

const ProfilePage = () => {
  const { account, chainId, isWeb3Enabled } = useMoralis();
  const { data, error, runContractFunction, isFetching, isLoading } = useLensHubContract(
    'getProfile',
    { profileId: 1 }
  );

  useEffect(() => {
    if (isWeb3Enabled) runContractFunction();
  }, [account, chainId, isWeb3Enabled, runContractFunction]);

  return (
    <SettingLayout title="NFT Profile">
      <>
        <div className="animate-pulse">Loading your NFT profile, "{PROFILE_HANDLE}"</div>
      </>
    </SettingLayout>
  );
};

export default ProfilePage;
