import { hooks } from '../utils/connectors/metaMask';

const Profile = () => {
  const { useAccounts, useProvider } = hooks;
  const accounts = useAccounts();
  const provider = useProvider();

  return (
    <>
      <div>About Me</div>
      <div>Avatar</div>
      <div>Banner</div>
      <div>Nickname</div>
    </>
  );
};

export default Profile;
