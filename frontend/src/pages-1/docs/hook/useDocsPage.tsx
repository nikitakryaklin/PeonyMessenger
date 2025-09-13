"use client";

import { useIntersection, useScrollToTop } from "@/shared";
import { useEffect, useRef, useState } from "react";
import { INavigation } from "../model/navigation-inrerface";
import { GoUp } from "../ui/goUp";
import { Navigation } from "../ui/navigation";

export const useDocsPage = () => {
  const RefScroll = useRef<HTMLDivElement>(null);
  const RefMarkdown = useRef<HTMLDivElement>(null);

  const { isVisible, onScroll } = useScrollToTop(RefScroll);

  const [heading, setHeading] = useState<INavigation[]>([]);

  const [isActive, setIsActive] = useState<string | undefined>("");

  const useIntersectionCallback = (e: IntersectionObserverEntry) => {
    setIsActive(e.target.id);
  };

  const onderverRef = useIntersection(useIntersectionCallback, {
    rootMargin: "-60px 0px -80% 0px",
    threshold: 0,
  });

  useEffect(() => {
    if (!RefMarkdown.current) return;

    const heading = RefMarkdown.current.querySelectorAll("h3, h4");
    const newHeaders = Array.from(heading).map((el) => ({
      id: el.id,
      text: el.textContent,
      link: `#${el.textContent.replace(/ /g, "")}`,
      level: Number(el.tagName.replace("H", "")),
    }));

    setHeading(newHeaders);
  }, [RefMarkdown]);

  return {
    GoUp: <GoUp isVisible={isVisible} onScroll={onScroll} />,
    Navigation: <Navigation heading={heading} isActive={isActive} />,
    refs: {
      RefScroll,
      RefMarkdown,
      onderverRef,
    },
  };
};
