import { Message } from "@/entities";
import { useChangeColor } from "../hook/useChangeColor";
import { useTextScale } from "../hook/useTextScale";
import clsx from "clsx";

export const ExampleChanges = () => {
  const { colors } = useChangeColor();

  const { textOptions } = useTextScale();

  const date = new Date();

  const dateToIso = date.toISOString();

  const textModification = {
    text: `calc(1rem*${textOptions.textScale})`,
    subText: `calc(0.875rem*${textOptions.textScale})`,
  };

  return (
    <div className="border-b border-[var(--gray)] pb-4">
      <div
        className="p-4 rounded-xl flex flex-col gap-4"
        style={{ background: colors.primeryLight }}
      >
        <Message
          text={"Good morning!"}
          className={clsx(Message.right, "min-w-4/5")}
          createdAt={dateToIso}
          textModification={textModification}
        />
        <Message
          text={"Good morning! Haw are you?"}
          className={clsx(Message.left, "self-end min-w-4/5")}
          createdAt={dateToIso}
          textModification={textModification}
        />
      </div>
    </div>
  );
};
