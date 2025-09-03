import { useCustomizeColorStore } from "../model/useCustomizeColorStore";
import { useCustomizeTextStore } from "../model/useCustomizeTextStore";
import { useChangeColor } from "./useChangeColor";
import { useTextScale } from "./useTextScale";

export function usePublicApiCustomize() {
  const resetColor = useCustomizeColorStore((s) => s.resetColor);

  const resetText = useCustomizeTextStore((s) => s.resetTextScale);

  const { onSaveColorSettings } = useChangeColor();
  const { onSaveTextScale } = useTextScale();

  const onSaveCustomize = () => {
    onSaveColorSettings();
    onSaveTextScale();
  };

  const onResetCustomize = () => {
    resetColor();
    resetText();
  };

  return { onSaveCustomize, onResetCustomize };
}
