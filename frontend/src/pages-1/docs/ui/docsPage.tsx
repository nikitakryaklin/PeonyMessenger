"use client";

import { Markdonw } from "@/shared";
import { useDocsPage } from "../hook/useDocsPage";
import { useMemo } from "react";
import { GoUp } from "./goUp";

export const DocsPage = ({ content }: { content: string }) => {
  const { Navigation, refs } = useDocsPage();

  return (
    <div
      ref={refs.RefScroll}
      className="max-h-[87dvh] overflow-y-scroll scroll-smooth"
    >
      {useMemo(
        () => (
          <GoUp RefScroll={refs.RefScroll} />
        ),
        [refs.RefScroll]
      )}

      {Navigation}

      <div
        ref={refs.RefMarkdown}
        className="w-4/5 xl:w-1/2 mx-auto mb-11 scroll-smooth"
      >
        {useMemo(
          () => (
            <Markdonw Ref={refs.onderverRef} content={content} />
          ),
          [content, refs.onderverRef]
        )}
      </div>
    </div>
  );
};
