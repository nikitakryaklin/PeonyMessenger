import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { language } from "./language-type";

interface II18nStore {
  language: language;
  setLanguage: (language: language) => void;
}

const languageStore: StateCreator<II18nStore> = (set) => ({
  language: "en",
  setLanguage: (language: language) => {
    set({ language: language });
  },
});

export const useI18nStore = create<II18nStore>()(
  persist(languageStore, { name: "I18n" })
);
