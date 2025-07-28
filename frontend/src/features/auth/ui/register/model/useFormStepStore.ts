import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

const localStorageName = "register form";

interface IFormStep {
  step: number;
  total: number;
  nextStep: () => void;
  prevStep: () => void;
}

const createStepSlice: StateCreator<IFormStep> = (set, get) => ({
  step: 1,
  total: 2,
  nextStep: () => {
    const step = get().step;
    const total = get().total;
    if (step < total) set({ step: step + 1 });
  },
  prevStep: () => {
    const step = get().step;
    if (step > 1) set({ step: step - 1 });
  },
});

export const useFromStepStore = create<IFormStep>()(
  persist(createStepSlice, { name: localStorageName })
);

export const removeFormStore = () => {
  useFromStepStore.setState({ step: 1 });
  localStorage.removeItem(localStorageName);
};
