import { useEffect } from 'react';
import { useScrollbarWidth } from './useScrollbarWidth';

export const useScrollLock = (lock, lockTouch = true) => {
  const scrollbarWidth = useScrollbarWidth();

  useEffect(() => {
    if (lock) {
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.paddingRight = '';
      document.body.style.overflow = '';
    };
  }, [lock, lockTouch, scrollbarWidth]);
};