import { MicIcon, Paperclip, Smile } from "lucide-react";
import { useId } from "react";
import { useDialogForm } from "../hook/useDialogForm";

export const DialogForm = ({ chatId }: { chatId: number }) => {
  const textMessageId = useId();

  const { onsubmit, register } = useDialogForm(chatId);

  return (
    <form
      onSubmit={onsubmit}
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
      <button type="submit">send</button>
    </form>
  );
};
