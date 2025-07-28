import { HTMLProps, Ref } from "react";
import { SubText } from "../text";
import clsx from "clsx";

export const Field = ({
  title,
  isError,
  className,
  elementClassName,
  type = "text",
  id,
  ref,
  ...inputProps
}: {
  title?: string;
  isError?: boolean;
  elementClassName?: string;
  ref: Ref<HTMLInputElement>;
} & HTMLProps<HTMLInputElement>) => {
  return (
    <div className={clsx(elementClassName)}>
      {title && (
        <SubText
          text={title}
          className={clsx(isError && "text-[var(--red)]")}
        />
      )}
      <label
        htmlFor={id}
        className={clsx(
          "w-full border p-1.5  my-0.5 rounded-[0.5rem] h-12 flex ",
          isError && "border-[var(--red)]",
          className
        )}
      >
        <input
          type={type}
          id={id}
          ref={ref}
          {...inputProps}
          className={clsx(
            "outline-none w-full",
            isError && "placeholder:text-[var(--red)]"
          )}
        />
      </label>
    </div>
  );
};
