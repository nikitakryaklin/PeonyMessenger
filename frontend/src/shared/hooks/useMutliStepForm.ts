export function useMutliStepForm(
  total: number,
  step: number,
  nextStep: () => void,
  callBack: () => void
) {
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
