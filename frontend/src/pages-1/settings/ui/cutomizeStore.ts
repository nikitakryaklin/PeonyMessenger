import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface ICustomizeStore {
  currenIndex: string;
  setCurrentindex: (index: string) => void;
}

const createStore: StateCreator<ICustomizeStore> = (set, get) => ({
  currenIndex: "1",
  setCurrentindex: (index: string) => set({ currenIndex: index }),
});

export const useCutomizeStore = create<ICustomizeStore>()(
  persist(createStore, { name: "textSizeIndex" })
);
