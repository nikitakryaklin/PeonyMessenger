import { create, createStore, StateCreator } from "zustand";
import { ICustomizeColor } from "./customize-interface";
import { persist } from "zustand/middleware";
import { LOCAL_STORAGE, PRIMERY_COLORS } from "@/shared";

const defaultColors: Record<
  keyof Omit<
    ICustomizeColor,
    "isSave" | "setIsSave" | "setColors" | "resetColor"
  >,
  string
> = {
  primery: "#e0b8ff",
  primeryLight: "#f5e7ff",
};

const createColorStore: StateCreator<ICustomizeColor> = (set, get) => ({
  primery: defaultColors.primery,
  primeryLight: defaultColors.primeryLight,
  isSave: false,
  setIsSave: (isSave) => {
    set({ isSave: isSave });
  },
  setColors: (colorName, currentColor) => {
    set({ [colorName]: currentColor });
  },
  resetColor: (theme) => {
    Object.keys(defaultColors).forEach((el) =>
      set({ [el]: PRIMERY_COLORS[el][theme] })
    );
    set({ isSave: false });
  },
});

export const useCustomizeColorStore = create<ICustomizeColor>()(
  persist(createColorStore, { name: LOCAL_STORAGE.colorStore })
);
