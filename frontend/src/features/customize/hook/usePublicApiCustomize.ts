import { useChangeColor } from "./useChangeColor";
import { useTextScale } from "./useTextScale";

export function usePublicApiCustomize() {
  const { onSaveColorSettings, onResetColors } = useChangeColor();
  const { onSaveTextScale, onResetTextScale } = useTextScale();

  const onSaveCustomize = () => {
    onSaveColorSettings();
    onSaveTextScale();
  };

  const onResetCustomize = (theme: "light" | "dark") => {
    onResetColors(theme);
    onResetTextScale();
  };

  return { onSaveCustomize, onResetCustomize };
}
