"use client";

import { MainTitle } from "@/shared";
import { HTMLProps } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const RulesPage = ({ content }: { content: string }) => {
  return (
    <div className="h-full">
      <div className="w-2/3  mx-auto">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: (props: any) => (
              <h1
                className="text-[calc(3.5rem*var(--text-scale))] leading-[120%] text-bold text-[var(--black)]"
                {...props}
              />
            ),
            h2: (props: any) => (
              <h2
                className="text-[var(--black)] my-4  leading-[120%] text-semibold text-[calc(2.5rem*var(--text-scale))]"
                {...props}
              />
            ),
            h3: (props: any) => (
              <h3
                className="leading-[140%] text-semibold text-[calc(2rem*var(--text-scale))] my-3 text-[var(--black)]"
                {...props}
              />
            ),
            h4: (props: any) => (
              <h3
                className="leading-[140%] text-bold text-[calc(1.5rem*var(--text-scale))] my-2 text-[var(--black)]"
                {...props}
              />
            ),
            p: (props: any) => (
              <p
                className="my-2 text-[var(--black)] leading-[140%] text-medium text-[calc(1rem*var(--text-scale))]"
                {...props}
              />
            ),
            li: ({ children, ...props }: any) => (
              <li className="ml-6 list-disc my-1 text-[var(--black)] leading-[140%] text-[calc(1rem*var(--text-scale))] marker:text-[var(--primery)]">
                {children}
              </li>
            ),
            blockquote: (props: any) => (
              <blockquote
                className="border-l-4 border-[var(--primery)] mb-10 pl-4  mt-2"
                {...props}
              />
            ),
            a: (props: any) => (
              <a
                className="text-[var(--primery)] leading-[140%] text-medium text-[calc(1rem*var(--text-scale))]"
                {...props}
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};
