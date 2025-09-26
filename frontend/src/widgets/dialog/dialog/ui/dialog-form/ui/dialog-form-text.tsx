import { FileField, IconButton } from "@/shared";
import { Paperclip } from "lucide-react";
import { HTMLProps, useId } from "react";

export const DialogFormText = ({
  onInput,
  ...inputProps
}: {
  onInput: () => void;
} & HTMLProps<HTMLTextAreaElement>) => {
  const textMessageId = useId();

  return (
    <>
      <label
        htmlFor={textMessageId}
        className="flex-1 flex min-h-11 items-center max-w-6/7  overflow-hidden"
      >
        <textarea
          className="max-w-50 sm:max-w-full max-h-40  focus:outline-0 text-[var(--black)]  placeholder:text-[var(--gray)] resize-none overflow-hidden field-sizing-content overflow-y-scroll"
          id={textMessageId}
          type="text"
          placeholder="White a message..."
          onInput={onInput}
          {...inputProps}
        ></textarea>
      </label>
    </>
  );
};
