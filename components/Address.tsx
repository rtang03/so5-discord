import { shortenAddress } from 'utils';
import { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';

const Check = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="3"
    stroke="#21BF96"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l5 5l10 -10" />
    <title id="copied-address">Copied!</title>
  </svg>
);

type AddressProps = {
  shortAddress?: boolean;
  chars?: number;
  copyable?: boolean;
  address?: string;
};

const Address = (props: AddressProps) => {
  const { account, isAuthenticated } = useMoralis();
  const [address, setAddress] = useState<string>();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (props?.address) setAddress(props.address);
    else if (isAuthenticated && account) setAddress(account);
  }, [account, isAuthenticated, props]);

  const Copy = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#1780FF"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ cursor: 'pointer' }}
      onClick={() => {
        address && navigator.clipboard.writeText(address);
        setIsClicked(true);
      }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 3v4a1 1 0 0 0 1 1h4" />
      <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" />
      <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
      <title id="copy-address">Copy Address</title>
    </svg>
  );

  return (
    <>
      {address && (
        <div className="flex m-3 h-15">
          <div>{props?.shortAddress ? shortenAddress(address, props.chars) : address}</div>
          {props?.copyable && (isClicked ? <Check /> : <Copy />)}
        </div>
      )}
    </>
  );
};
export default Address;
