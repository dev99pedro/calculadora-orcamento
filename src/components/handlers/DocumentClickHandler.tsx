import {
  useEffect,
} from 'react';

interface DocumentClickHandlerProps {
  callback: () => void;
  elementReference: React.RefObject<HTMLDivElement>,
}

function DocumentClickHandler({
  callback,
  elementReference,
}: DocumentClickHandlerProps): null {
  const handleClickOutside = (event: MouseEvent): void => {
    if (elementReference.current
      && elementReference.current.contains
      && !elementReference.current.contains(event.target as Node)) {
      setTimeout(() => {
        callback();
      }, 200);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default DocumentClickHandler;
