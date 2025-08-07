"use client";

import { Button, CaphionTitle, Field, IAbout, IUser, Text } from "@/shared";
import { ChangeEvent } from "react";
import { CreateDialogItem } from "./createDialogItem";
import clsx from "clsx";
import { useCreateDialog } from "../hook/useCreateDialog";

export const CreateDialog = ({
  title,
  type,
  onClose,
  data,
  value,
  onChange,
  onClick,
}: {
  type: "chat" | "group";
  title: string;
  value: string;
  data: (IUser & { about: IAbout | null })[] | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (userId: number | number[]) => void;
  onClose: () => void;
}) => {
  const { select, button } = useCreateDialog(type);

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
      <div className="p-3 flex flex-col flex-1 gap-3 max-h-9/10">
        <Field value={value} onChange={onChange} />
        <div className="flex-1 overflow-y-scroll max-h-4/5">
          {data &&
            data.map((user) => (
              <CreateDialogItem
                key={user.documentId}
                avatarURL={user.about?.avatar?.[0].url}
                userName={user.username}
                isActive={select.isSelect(user.id)}
                onClick={() => select.selectItem(user.id)}
              />
            ))}
          {!data?.length && (
            <div className="size-full flex">
              <Text text="Users not found" className="mx-auto mt-15" />
            </div>
          )}
        </div>
        <Button
          text={button.buttonText(title)}
          onClick={() => onClick(select.select)}
          className={clsx(
            "bg-[var(--light-gray)] w-full text-[var(--gray)] shrink-0"
          )}
          disabled={button.disabled}
        />
      </div>
    </div>
  );
};
