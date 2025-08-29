import { RangeField } from "@/shared";
import { useId } from "react";
import { useTextScale } from "../hook/useTextScale";

export const ChangeTextScale = () => {
  const { textOptions, onTextScale } = useTextScale();

  return (
    <>
      <RangeField
        title="Text size"
        id={textOptions.textScaleId}
        min={"0.8"}
        step={"0.1"}
        max={"1.2"}
        value={textOptions.textScale}
        onChange={onTextScale}
      />
    </>
  );
};
