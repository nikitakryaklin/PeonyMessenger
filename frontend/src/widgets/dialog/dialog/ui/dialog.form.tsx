import { MicIcon, Paperclip, Smile } from "lucide-react";
import { useId } from "react";

export const DialogForm = () => {
  const textMessageId = useId();

  return (
    <form className="bg-[var(--white)] h-16 flex gap-4 px-5 items-center">
      <Paperclip />
      <label htmlFor={textMessageId} className="flex-1 flex gap-2">
        <input
          className="w-full focus:outline-0"
          id={textMessageId}
          type="text"
          placeholder="White a message..."
        />
        <Smile />
      </label>
      <MicIcon />
    </form>
  );
};
