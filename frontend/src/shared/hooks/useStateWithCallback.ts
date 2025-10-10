"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useStateWithCallback<T>(
  initialValue: T,
  callback?: (value: T) => void
): [T, (newValue: T, callback?: () => void) => void] {
  const [state, setState] = useState<T>(initialValue);

  const updateState = useCallback((newValue: T, callback?: () => void) => {
    setState(newValue);
    if (callback) {
      callback();
    }
  }, []);

  useEffect(() => {
    if (callback) {
      callback(state);
    }
  }, [state, callback]);

  return [state, updateState];
}
