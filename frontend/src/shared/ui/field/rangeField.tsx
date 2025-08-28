import { ChangeEvent, HTMLProps } from "react";
import { SubText } from "../text";

export const RangeField = ({
  title,
  id,
  onChange,
  ...inpytProps
}: {
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & HTMLProps<HTMLInputElement>) => {
  return (
    <div className="h-15">
      <SubText text={title} />
      <label htmlFor={id}>
        <input
          type="range"
          id={id}
          className="w-full  accent-[var(--black)] cursor-pointer h-11"
          onChange={onChange}
          {...inpytProps}
        />
      </label>
    </div>
  );
};
