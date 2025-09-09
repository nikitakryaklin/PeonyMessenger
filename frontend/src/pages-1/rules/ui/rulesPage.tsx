"use client";

import {
  CaphionTitle,
  LinkTitle,
  Markdonw,
  SubTitle,
  Text,
  Title,
  useIntersection,
  useScrollToTop,
} from "@/shared";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export const RulesPage = ({ content }: { content: string }) => {
  const RefScroll = useRef<HTMLDivElement>(null);
  const RefMarkdown = useRef<HTMLDivElement>(null);

  const { visible, onScroll } = useScrollToTop(RefScroll);

  const [heading, setHeading] = useState<
    { text: string; link: string; id: string; level: Number }[]
  >([]);

  const [isActive, setIsActive] = useState<string | undefined>("");

  const test = (e: IntersectionObserverEntry) => {
    setIsActive(e.target.id);
  };

  const onderverRef = useIntersection(test, {
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

  return (
    <div
      ref={RefScroll}
      className="max-h-[87dvh] overflow-y-scroll scroll-smooth"
    >
      {/*  */}

      {visible && (
        <button
          onClick={onScroll}
          className="group w-1/6 left-0 top-24 fixed h-screen cursor-pointer"
        >
          <div className="w-30 p-4 h-full text-[var(--primery)] transition-colors duration-200 group-hover:bg-[var(--primery-light)] ">
            <LinkTitle text="Go up" className=" text-[var(--primery)] " />
          </div>
        </button>
      )}

      {/*  */}

      <aside className="fixed top-24 right-60">
        <ul>
          {heading.map((el, idx) => (
            <li
              key={idx}
              className={clsx(
                "max-w-50 overflow-hidden text-ellipsis  pl-5 hover:border-l-3 hover:border-[var(--primery-light)]",
                isActive === el.id && "border-l-3 border-[var(--primery)]"
              )}
            >
              <a
                href={el.link}
                className={clsx(
                  "text-nowrap  overflow-hidden text-ellipsis text-[var(--primery)]",
                  el.level === 3 && "font-bold",
                  el.level === 4 && "text-[0.875rem] font-normal pl-2"
                )}
              >
                {el.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/*  */}

      <div
        ref={RefMarkdown}
        className="w-4/5 xl:w-1/2 mx-auto mb-11 scroll-smooth"
      >
        <Markdonw Ref={onderverRef} content={content} />
      </div>
    </div>
  );
};
