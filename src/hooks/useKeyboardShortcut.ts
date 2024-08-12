import { useEffect } from 'react';

interface IUseKeyboardShortcut {
  key: string;
  callback: () => void;
}

export function useKeyboardShortcut({ key, callback }: IUseKeyboardShortcut) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === key) {
        callback();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [key, callback]);
}
