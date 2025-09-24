"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface IAdaptiveContext {
  page: "page" | "dialog";
  isMobile: boolean;
  setCurrentPage: (currentPage: "page" | "dialog") => void;
  setCurrantIsMobile: (isMobile: boolean) => void;
}

const AdaptiveContext = createContext<IAdaptiveContext | undefined>(undefined);

export function useAdaptive() {
  const ctx = useContext(AdaptiveContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}

export const AdaptiveProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState<"page" | "dialog">("page");
  const [isMobile, setIsMobile] = useState(false);

  const setCurrentPage = (currentPage: "page" | "dialog") => {
    if (page === currentPage && isMobile) return;

    setPage(currentPage);
  };

  const setCurrantIsMobile = (isMobileCurrent: boolean) => {
    if (isMobile === isMobileCurrent) return;

    setIsMobile(isMobileCurrent);
  };

  useEffect(() => {
    if (window.screen.width < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <AdaptiveContext.Provider
      value={{ page, isMobile, setCurrentPage, setCurrantIsMobile }}
    >
      {children}
    </AdaptiveContext.Provider>
  );
};
