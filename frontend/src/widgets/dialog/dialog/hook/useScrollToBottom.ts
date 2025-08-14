"use client";
import { useEffect, useRef } from "react";

export const useScrollToBottom = () => {
  const meessagesFildRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = (variant: ScrollBehavior) => {
    const el = meessagesFildRef.current;

    if (!el) return null;

    el.scrollTo({ top: el.scrollHeight, behavior: variant });
  };

  useEffect(() => {
    scrollToBottom("instant");
  }, []);

  return { meessagesFildRef, scrollToBottom };
};
