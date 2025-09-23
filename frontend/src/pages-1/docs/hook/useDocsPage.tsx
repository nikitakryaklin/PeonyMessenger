"use client";

import { useIntersection } from "@/shared";
import { useEffect, useRef, useState } from "react";
import { INavigation } from "../model/navigation-inrerface";
import { Navigation } from "../ui/navigation";

export const useDocsPage = () => {
  const RefScroll = useRef<HTMLDivElement>(null);
  const RefMarkdown = useRef<HTMLDivElement>(null);

  const [heading, setHeading] = useState<INavigation[]>([]);

  const [isActive, setIsActive] = useState<string | undefined>("");

  const useIntersectionCallback = (e: IntersectionObserverEntry) => {
    const newId = e.target.id;
    setIsActive((prev) => (prev === newId ? prev : newId));
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
    Navigation: <Navigation heading={heading} isActive={isActive} />,
    refs: {
      RefScroll,
      RefMarkdown,
      onderverRef,
    },
  };
};
