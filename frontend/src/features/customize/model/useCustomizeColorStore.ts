import { create, createStore, StateCreator } from "zustand";
import { ICustomizeColor } from "./customize-interface";
import { persist } from "zustand/middleware";

const defaultColors: Record<
  keyof Omit<ICustomizeColor, "setColors" | "resetColor">,
  string
> = {
  primery: "#e0b8ff",
  primeryLight: "#f5e7ff",
};

const createColorStore: StateCreator<ICustomizeColor> = (set, get) => ({
  primery: defaultColors.primery,
  primeryLight: defaultColors.primeryLight,
  setColors: (colorName, currentColor) => {
    set({ [colorName]: currentColor });
  },
  resetColor: () => {
    Object.entries(defaultColors).forEach((el) => set({ [el[0]]: el[1] }));
  },
});

export const useCustomizeColorStore = create<ICustomizeColor>()(
  persist(createColorStore, { name: "color-store" })
);
