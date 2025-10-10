"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// export function useStateWithCallback(initialValue) {
//   const [state, setState] = useState(initialValue);
//   const cbRef = useRef(null);

//   const updateState = useCallback((newState, cb) => {
//     cbRef.current = cb;

//     setState((prev) =>
//       typeof newState === "function" ? newState(prev) : newState
//     );
//   }, []);

//   useEffect(() => {
//     if (cbRef.current) {
//       cbRef.current(state);
//       cbRef.current = null;
//     }
//   }, [state]);

//   return [state, updateState];
// }

export function useStateWithCallback<T>(
  initialValue: T
): [T, (newState: T | ((prev: T) => T), cb?: (state: T) => void) => void] {
  const [state, setState] = useState<T>(initialValue);
  const cbRef = useRef<((state: T) => void) | null>(null);

  const updateState = useCallback(
    (newState: T | ((prev: T) => T), cb?: (state: T) => void) => {
      cbRef.current = cb ?? null;
      setState((prev) =>
        typeof newState === "function"
          ? (newState as (prev: T) => T)(prev)
          : newState
      );
    },
    []
  );

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null;
    }
  }, [state]);

  return [state, updateState];
}
