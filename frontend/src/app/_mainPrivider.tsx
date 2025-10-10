"use client";

import { AdaptiveProvider, QueryClientCastomProvider } from "@/shared";
import { ReactNode } from "react";
import { LazyMotion, domAnimation } from "motion/react";
import { CallingProvider } from "@/features";

export const MainPrivider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientCastomProvider>
      <AdaptiveProvider>
        <CallingProvider>
          <LazyMotion features={domAnimation}>{children}</LazyMotion>
        </CallingProvider>
      </AdaptiveProvider>
    </QueryClientCastomProvider>
  );
};
