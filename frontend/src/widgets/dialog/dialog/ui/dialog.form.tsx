import { MicIcon, Paperclip, Send, Smile } from "lucide-react";
import { useId } from "react";
import { useDialogForm } from "../hook/useDialogForm";
import { IconButton } from "@/shared";

export const DialogForm = ({
  chatId,
  scrollToBottom,
}: {
  chatId: number;
  scrollToBottom: (variant: ScrollBehavior) => void;
}) => {
  const textMessageId = useId();

  const { onSubmit, register } = useDialogForm(chatId);

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
        />
        <Smile />
      </label>
      <MicIcon />
      <IconButton icon={<Send />} onClick={() => scrollToBottom("smooth")} />
    </form>
  );
};
