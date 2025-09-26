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

  const query = "(max-width: 850px)";

  useEffect(() => {
    if (typeof window === undefined) return;

    const media = window.matchMedia(query);
    setIsMobile(media.matches);

    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return (
    <AdaptiveContext.Provider value={{ page, isMobile, setCurrentPage }}>
      {children}
    </AdaptiveContext.Provider>
  );
};
