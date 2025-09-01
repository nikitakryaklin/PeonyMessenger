import { LOCAL_STORAGE } from "@/shared";
import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

export type TTheme = "light" | "dark";

export interface IThemeStore {
  theme: TTheme;
  setTheme: (thme: TTheme) => void;
}

const storeCreate: StateCreator<IThemeStore> = (set) => ({
  theme: "light",
  setTheme: (theme) => {
    set({ theme: theme });
  },
});

export const useThemeStore = create<IThemeStore>()(
  persist(storeCreate, { name: LOCAL_STORAGE.theme })
);
