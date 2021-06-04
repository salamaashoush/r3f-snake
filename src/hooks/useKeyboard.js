import { useEffect, useCallback } from 'react';

export const useKeyboard = (keys, directionName, fn) => {
  const onKeydown = useCallback(
    (event) => {
      if (keys.includes(event.key)) {
        fn(directionName);
      }
    },
    [keys, directionName, fn]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [keys, onKeydown]);

  return null;
};
