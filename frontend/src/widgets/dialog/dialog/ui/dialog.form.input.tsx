import { Smile } from "lucide-react";
import { ForwardedRef, HTMLProps, Ref, RefObject, useId } from "react";

export const DialogFormInput = ({
  onInput,
  ...inputProps
}: {
  onInput: () => void;
} & HTMLProps<HTMLInputElement>) => {
  const textMessageId = useId();

  return (
    <>
      <label htmlFor={textMessageId} className="flex-1 flex gap-2">
        <input
          className="w-full focus:outline-0 text-[var(--black)]  placeholder:text-[var(--gray)]"
          id={textMessageId}
          type="text"
          placeholder="White a message..."
          onInput={onInput}
          {...inputProps}
        />
        <Smile stroke="var(--black)" />
      </label>
    </>
  );
};
