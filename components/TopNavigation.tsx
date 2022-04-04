import Account from './Account/Account';
import useDarkMode from '../hooks/useDarkMode';
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaRegUser,
  FaRegGrinAlt,
} from 'react-icons/fa';
import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search..." />
    <FaSearch size="18" className="text-secondary my-auto" />
  </div>
);
const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" />;
const UserCircle = () => <FaUserCircle size="24" className="top-navigation-icon" />;
const HashtagIcon = () => <FaHashtag size="20" className="title-hashtag" />;
const Title = () => <h5 className="title-text">tailwind-css</h5>;
const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};

const TopNavigation = () => {
  return (
    <div className="top-navigation">
      {/* Part 1: # */}
      <HashtagIcon />

      {/* Part 2: Title */}
      <Title />

      {/* Part 3: Select Theme */}
      <ThemeIcon />

      {/* Part 4: Search */}
      <Search />

      {/* Part 5: Notification */}
      <BellIcon />

      {/* Part 6: Account Setting */}
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center py-2">
            <UserCircle aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Link href={`/account`}>
              <a>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <FaRegUser className="mr-2 h-5 w-5" aria-hidden="true" />
                        Account
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </a>
            </Link>
            <Link href={`/profile`}>
              <a>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <FaRegGrinAlt className="mr-2 h-5 w-5" aria-hidden="true" />
                        NFT Profile
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </a>
            </Link>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* Part 7: Connect Wallet */}
      <Account />
    </div>
  );
};

export default TopNavigation;
