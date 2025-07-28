import { useFromStepStore } from "./useFormStepStore";

export const usePublicRegisterFormStore = () => {
  const step = useFromStepStore((s) => s.step);
  const prevStep = useFromStepStore((s) => s.prevStep);

  return { step, prevStep };
};
