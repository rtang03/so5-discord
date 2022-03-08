import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import React, { ReactElement } from 'react';

const Divider = () => <hr className="sidebar-hr" />;

const SideBarIcon: (opt: { icon: ReactElement; text?: string }) => ReactElement = ({
  icon,
  text = 'tooltip 💡',
}) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 flex h-screen w-16 flex-col bg-white shadow-lg dark:bg-gray-900">
      <SideBarIcon icon={<FaFire size="28" />} />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

export default SideBar;
