"use client";

import { useEffect } from "react";

export function useMutliStepForm(
  total: number,
  step: number,
  nextStep: () => void,
  callBack: () => void,
  clearErrors: () => void
) {
  useEffect(() => {
    clearErrors();
  }, [step]);

  const formSubmit = () => {
    callBack();
  };

  const formAction = () => {
    if (step === total) {
      formSubmit();
      return;
    }

    nextStep();
  };

  return {
    formAction,
    formSubmit,
  };
}
