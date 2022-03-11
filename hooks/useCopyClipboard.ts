// https://github.com/Uniswap/interface/blob/5831328364708b251e12bdcb054ed2c6d20b1683/src/hooks/useCopyClipboard.ts
import copy from 'copy-to-clipboard';
import { useCallback, useEffect, useState } from 'react';

const useCopyClipboard = (timeout = 500): [boolean, (toCopy: string) => void] => {
  const [isCopied, setIsCopied] = useState(false);

  const staticCopy = useCallback((text) => {
    const didCopy = copy(text);
    setIsCopied(didCopy);
  }, []);

  useEffect(() => {
    if (isCopied) {
      const hide = setTimeout(() => {
        setIsCopied(false);
      }, timeout);

      return () => {
        clearTimeout(hide);
      };
    }
    return undefined;
  }, [isCopied, setIsCopied, timeout]);

  return [isCopied, staticCopy];
};

export default useCopyClipboard;
