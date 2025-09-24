"use client";

import { AdaptiveProvider, QueryClientCastomProvider } from "@/shared";
import { ReactNode } from "react";
import { LazyMotion, domAnimation } from "motion/react";

export const MainPrivider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientCastomProvider>
      <AdaptiveProvider>
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </AdaptiveProvider>
    </QueryClientCastomProvider>
  );
};
