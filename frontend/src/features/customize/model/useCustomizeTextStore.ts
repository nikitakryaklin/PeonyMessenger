import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { ICustomizeText, TTextScale } from "./customize-interface";

const createStore: StateCreator<ICustomizeText> = (set, get) => ({
  textScale: "1",
  setTextScale: (textScale: TTextScale) => set({ textScale: textScale }),
  resetTextScale: () => set({ textScale: "1" }),
});

export const useCustomizeTextStore = create<ICustomizeText>()(
  persist(createStore, { name: "textScale" })
);
