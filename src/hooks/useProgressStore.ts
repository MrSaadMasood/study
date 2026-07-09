import { useCallback, useSyncExternalStore } from 'react';
import {
  getCompletedCount,
  isSessionComplete,
  toggleSessionComplete,
} from './useProgress';

let listeners: Array<() => void> = [];

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function notify() {
  listeners.forEach((l) => l());
}

export function useProgressStore() {
  const completedCount = useSyncExternalStore(subscribe, getCompletedCount, () => 0);

  const toggle = useCallback((sessionId: string) => {
    toggleSessionComplete(sessionId);
    notify();
  }, []);

  const isComplete = useCallback(
    (sessionId: string) => isSessionComplete(sessionId),
    [completedCount],
  );

  return { completedCount, toggle, isComplete };
}
