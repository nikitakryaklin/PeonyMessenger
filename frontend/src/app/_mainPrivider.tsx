"use client";

import { QueryClientCastomProvider } from "@/shared";
import { ReactNode } from "react";
import { LazyMotion, domAnimation } from "motion/react";

export const MainPrivider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientCastomProvider>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </QueryClientCastomProvider>
  );
};
