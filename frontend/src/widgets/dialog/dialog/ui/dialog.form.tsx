import { MicIcon, Paperclip, Send, Smile } from "lucide-react";
import { useEffect, useId, useRef } from "react";
import { useDialogForm } from "../hook/useDialogForm";
import { IconButton } from "@/shared";

export const DialogForm = ({
  chatId,
  dialog,
  scrollToBottom,
  onMessage,
}: {
  chatId: number;
  dialog: string;
  scrollToBottom: (variant: ScrollBehavior) => void;
  onMessage: (isTyping: boolean) => void;
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const textMessageId = useId();
  const { onSubmit, register } = useDialogForm(chatId, dialog);

  const hendleClick = () => {
    scrollToBottom("smooth");
  };

  const onInput = () => {
    onMessage(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      onMessage(false);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      onMessage(false);
    };
  }, []);

  return (
    <form
      onSubmit={onSubmit}
      className="bg-[var(--white)] h-16 flex gap-4 px-5 items-center"
    >
      <Paperclip />
      <label htmlFor={textMessageId} className="flex-1 flex gap-2">
        <input
          className="w-full focus:outline-0"
          id={textMessageId}
          type="text"
          placeholder="White a message..."
          {...register("message")}
          onInput={onInput}
        />
        <Smile />
      </label>
      <MicIcon />
      <IconButton icon={<Send />} onClick={hendleClick} />
    </form>
  );
};
