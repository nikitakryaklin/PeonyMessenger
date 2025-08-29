import { ColorField } from "@/shared";
import { useChangeColor } from "../hook/useChangeColor";
import { ChangeEvent } from "react";

export const ChangeColors = () => {
  const { primeryId, primeryLightId, colors, onColor } = useChangeColor();

  return (
    <>
      <ColorField
        text="Change primery color"
        currentColor={colors.primery}
        id={primeryId}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onColor("primery", e)}
      />
      <ColorField
        text="Change primery light color"
        currentColor={colors.primeryLight}
        id={primeryLightId}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onColor("primeryLight", e)
        }
      />
    </>
  );
};
