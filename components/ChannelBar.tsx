import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const topics = ['draft', 'published'];
const questions = ['followers', 'followings', 'trendings'];
const random = ['listings', 'suggestions'];

const Dropdown = ({ header, selections }: { header: string; selections: string[] }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="dropdown">
      <div onClick={() => setExpanded(!expanded)} className="dropdown-header">
        <ChevronIcon expanded={expanded} />
        <h5 className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}>
          {header}
        </h5>
        <FaPlus size="12" className="text-accent my-auto ml-auto text-opacity-80" />
      </div>
      {expanded &&
        selections &&
        selections.map((selection, index) => <TopicSelection key={index} selection={selection} />)}
    </div>
  );
};

const ChevronIcon = ({ expanded }: { expanded: boolean }) => {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
  return expanded ? (
    <FaChevronDown size="14" className={chevClass} />
  ) : (
    <FaChevronRight size="14" className={chevClass} />
  );
};

const TopicSelection = ({ selection }: { selection: string }) => (
  <div className="dropdown-selection">
    <BsHash size="24" className="text-gray-400" />
    <h5 className="dropdown-selection-text">{selection}</h5>
  </div>
);

const ChannelBlock = ({ account }: { account: string }) => (
  <div className="channel-block">
    <h5 className="channel-block-text">{account}</h5>
  </div>
);

const ChannelBar = () => {
  return (
    <div className="channel-bar shadow-lg">
      <ChannelBlock account={'Channel'} />
      <div className="channel-container">
        <Dropdown header="Topics" selections={topics} />
        <Dropdown header="Community" selections={questions} />
        <Dropdown header="NFT" selections={random} />
      </div>
    </div>
  );
};

export default ChannelBar;
