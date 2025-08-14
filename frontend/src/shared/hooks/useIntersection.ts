"use client";

import { useCallback, useRef } from "react";

export const useIntersection = (onIntersect: () => void) => {
  const unSubscribe = useRef(() => {});

  return useCallback((el: HTMLDivElement | null) => {
    const observer = new IntersectionObserver((entry) => {
      entry.forEach((intersection) => {
        if (intersection.isIntersecting) {
          onIntersect();
        }
      });
    });

    if (el) {
      observer.observe(el);
      unSubscribe.current = () => observer.disconnect();
    } else {
      unSubscribe.current();
    }
  }, []);
};
