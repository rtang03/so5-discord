import Link from 'next/link';
import { ReactChild } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';

type SettingLayoutProps = {
  children: ReactChild;
  title: string;
};

const items = [
  { path: '/account', name: 'Account' },
  { path: '/profile', name: 'NFT profile' },
  { path: '/nftbalance', name: 'NFT balance' },
  { path: '/advanced', name: 'Advanced' },
];

const SettingLayout = ({ title, children }: SettingLayoutProps) => {
  const { pathname } = useRouter();

  return (
    <div className="h-screen bg-white dark:bg-gray-800">
      <div className="container h-screen">
        <div className="flex h-screen">
          <div className="prose bg-gray-200 pl-5 text-gray-600 dark:bg-gray-800  dark:text-gray-400">
            <p className="prose-2xl mt-20 w-48">Settings</p>
            {items.map(({ path, name }, key) => (
              <div
                key={key}
                className={`pl-8 ${pathname == path && 'bg-gray-300 dark:bg-gray-700'}`}
              >
                <Link href={path}>
                  <a className="text-gray-700 no-underline dark:text-gray-100">{name}</a>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-screen bg-gray-300 dark:bg-gray-700">
            <div className="flex flex-row-reverse">
              <div className="mt-5 mr-10">
                <Link href={'/dashboard'}>
                  <a>
                    <button className="border-blue-300 p-2 ">
                      <FaRegTimesCircle className="text-4xl  text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-400" />
                    </button>
                  </a>
                </Link>
                <p className="text-center text-sm text-gray-600 dark:text-gray-500">ESC</p>
              </div>
            </div>
            <div className="prose ml-10 mb-10">
              <h1 className="prose-2xl font-semibold text-gray-600 dark:text-gray-400">{title}</h1>
            </div>
            <div className="prose ml-20 text-gray-600 dark:text-gray-400">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingLayout;
