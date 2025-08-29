import { useCustomizeColorStore } from "../model/useCustomizeColorStore";
import { useCustomizeTextStore } from "../model/useCustomizeTextStore";

export function useOnResetCustomize() {
  const resetColor = useCustomizeColorStore((s) => s.resetColor);
  const resetText = useCustomizeTextStore((s) => s.resetTextScale);

  const onResetCustomize = () => {
    resetColor();
    resetText();
  };

  return { onResetCustomize };
}
