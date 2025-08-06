import { Button, CaphionTitle, Field, IAbout, IUser } from "@/shared";
import { ChangeEvent, ReactNode } from "react";
import { CreateDialogItem } from "./createDialogItem";

export const CreateDialog = ({
  title,
  onClose,
  data,
  value,
  onChange,
  onClick,
}: {
  title: string;
  value: string;
  data: (IUser & { about: IAbout | null })[] | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (userId: string | String[]) => void;
  onClose: () => void;
}) => {
  return (
    <div className="bg-[var(--white)] w-3/4 xl:w-1/3 h-3/5 rounded-xl overflow-hidden mt-56 flex flex-col">
      <div className="bg-[var(--light-gray)] px-1 py-3 w-full flex items-center">
        <button
          onClick={onClose}
          className=" w-11 h-11 relative cursor-pointer hover:bg-white/50 rounded-xl"
        >
          <span className="bg-[var(--gray)] w-2/3 h-[1px] block absolute rotate-45 left-2"></span>
          <span className="bg-[var(--gray)] w-2/3 h-[1px] block absolute rotate-[-45deg] left-2"></span>
        </button>
        <CaphionTitle
          text={"New " + title}
          className="text-center w-full ml-[-44px]"
        />
      </div>
      <div className="p-3 flex flex-col flex-1 gap-3">
        <Field value={value} onChange={onChange} />
        <div className="flex-1 bg-pink-300">
          {data &&
            data.map((user) => (
              <CreateDialogItem
                avatarURL={user.about?.avatar?.[0].url}
                userName={user.username}
              />
            ))}
        </div>
        <Button
          text={"Start " + title}
          onClick={() => onClick("")}
          className="bg-[var(--light-gray)] w-full text-[var(--gray)]"
        />
      </div>
    </div>
  );
};
