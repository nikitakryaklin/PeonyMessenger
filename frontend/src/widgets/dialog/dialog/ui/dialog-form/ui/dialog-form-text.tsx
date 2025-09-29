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
        className="flex-1 flex min-w-0 w-full min-h-11  max-h-40 items-center max-w-6/7  overflow-y-scroll"
      >
        <textarea
          className="max-w-full  focus:outline-0 text-[var(--black)]  placeholder:text-[var(--gray)] resize-none overflow-hidden field-sizing-content overflow-y-scroll"
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
