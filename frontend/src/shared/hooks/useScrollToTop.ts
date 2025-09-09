"use client";

import { RefObject, useEffect, useState } from "react";

export const useScrollToTop = (Ref: RefObject<HTMLDivElement | null>) => {
  const [visible, setIsVisible] = useState(false);
  const visibleValue = 300;

  useEffect(() => {
    if (!Ref.current) return;

    const handleScroll = () => {
      if (!Ref.current) return;
      setIsVisible(Ref.current.scrollTop > visibleValue);
    };
    Ref.current.addEventListener("scroll", handleScroll);

    return () => {
      if (!Ref.current) return;
      Ref.current.removeEventListener("scroll", handleScroll);
    };
  }, [Ref]);

  const onScroll = () => {
    if (!Ref.current) return;
    Ref.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { visible, onScroll };
};
