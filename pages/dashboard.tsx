import ChannelBar from 'components/ChannelBar';
import ContentContainer from 'components/ContentContainer';
import SideBar from 'components/SideBar';

const Dashboard = () => {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
};

export default Dashboard;
