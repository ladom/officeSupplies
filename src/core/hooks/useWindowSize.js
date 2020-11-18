import { useState, useEffect } from 'react';

const isClient = () => typeof window !== undefined;

export default function useWindowSize() {
  function getSize() {
    return {
      width: isClient() ? window.innerWidth : 375,
      height: isClient() ? window.innerHeight : 667,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient()) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize, true);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
