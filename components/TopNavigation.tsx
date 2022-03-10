import useDarkMode from './useDarkMode';
import SelectMetaMask from './connectors/SelectMetaMask';
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaRegUser,
} from 'react-icons/fa';
import React, { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';

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
  // open account settings
  // open "Wallets" dialogue
  const [isWalletDialogOpen, setIsWalletDialogOpen] = useState(false);
  const closeWalletDialogModal = () => setIsWalletDialogOpen(false);
  const openWalletDialogModal = () => setIsWalletDialogOpen(true);

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
            <UserCircle />
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
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <FaRegUser className="mr-2 h-5 w-5" aria-hidden="true" />
                    Profile
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* Part 7: Connect Wallet */}
      <button type="button" onClick={openWalletDialogModal} className="connect-btn">
        Wallets
      </button>

      {/* Modal Dialogue */}
      <Transition appear show={isWalletDialogOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeWalletDialogModal}
        >
          {/* Use the overlay to style a dim backdrop for your dialog */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/70 dark:bg-black/80" />
          </Transition.Child>

          {/* Content */}
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Wallets
                </Dialog.Title>

                {/* Using MetaMask */}
                <SelectMetaMask />

                {/* Close Button */}
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeWalletDialogModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      {/* End of Modal Dialogue */}
    </div>
  );
};

export default TopNavigation;
