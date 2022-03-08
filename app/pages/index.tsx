import ChannelBar from 'components/ChannelBar';
import ContentContainer from 'components/ContentContainer';
import SideBar from 'components/SideBar';

export default () => {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
};