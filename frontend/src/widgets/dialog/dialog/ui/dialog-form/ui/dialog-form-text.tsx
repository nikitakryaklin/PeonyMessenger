import { HTMLProps, useEffect, useId, useRef } from "react";
import { TInputStatus } from "../../../model/dialog-form-interface";

export const DialogFormText = ({
  setInputStatus,
  ...inputProps
}: {
  setInputStatus: (status: TInputStatus) => void;
} & HTMLProps<HTMLTextAreaElement>) => {
  const textMessageId = useId();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onInput = () => {
    setInputStatus("typing");

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setInputStatus("idle");
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      () => setInputStatus("idle");
    };
  }, []);

  return (
    <>
      <label
        htmlFor={textMessageId}
        className="flex-1 flex min-w-0 w-full min-h-11   items-center max-w-6/7  overflow-y-scroll"
      >
        <textarea
          className="max-w-full min-w-0 max-h-40 focus:outline-0 text-[var(--black)]  placeholder:text-[var(--gray)] resize-none overflow-hidden field-sizing-content overflow-y-scroll"
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
