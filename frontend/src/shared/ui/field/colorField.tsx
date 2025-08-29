import { ChangeEvent, HTMLProps } from "react";
import { Text } from "../text";

export const ColorField = ({
  id,
  value,
  text,
  currentColor,
  ...inputProps
}: {
  text: string;
  currentColor: string;
} & HTMLProps<HTMLInputElement>) => {
  return (
    <label
      htmlFor={id}
      className="w-full h-11 flex justify-between items-center cursor-pointer"
    >
      <Text text={text} />
      <div
        className="size-7 rounded-full overflow-hidden"
        style={{ background: currentColor }}
      >
        <input
          id={id}
          type="color"
          value={currentColor}
          className=" appearance-none"
          {...inputProps}
        />
      </div>
    </label>
  );
};
