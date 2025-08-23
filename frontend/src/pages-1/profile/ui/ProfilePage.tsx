"use client";

import { AvatarSquare } from "@/entities";
import { useUserAbout } from "@/features";
import { Button, Field, Loader, LOCAL_STORAGE, SubText, Text } from "@/shared";
import clsx from "clsx";
import { EditIcon, FileUser } from "lucide-react";
import { getURL } from "next/dist/shared/lib/utils";
import Image from "next/image";
import { useState } from "react";

export const ProfilePage = () => {
  const { data, isPending } = useUserAbout();

  const [isAction, setIsAvtion] = useState<"edit" | "save">("edit");

  if (isPending) return <Loader />;

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full px-4">
        <AvatarSquare url={data?.avatar?.[0].url} />
      </div>

      <div className="w-full px-4 flex justify-between">
        <div>
          <Text text={data?.name || "you didnt specify a name"} />
          <SubText
            text={
              `@${localStorage.getItem(LOCAL_STORAGE.userName)?.toString()}` ||
              ""
            }
          />
        </div>

        <div>
          {
            {
              edit: (
                <button
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => setIsAvtion("save")}
                >
                  <EditIcon size={15} />
                  <Text text="Edit" />
                </button>
              ),
              save: (
                <button className="flex items-center gap-1 cursor-pointer">
                  <FileUser size={15} />
                  <Text text="Save" />
                </button>
              ),
            }[isAction]
          }
        </div>
      </div>

      {isAction === "save" && (
        <div className="w-full border-t p-4 flex flex-col gap-4">
          <form action="" className="">
            <Field title="Name" />
          </form>
          <Button
            text="Cancel"
            className="bg-red-400 text-[var(--white)] w-full hover:bg-red-500"
            onClick={() => setIsAvtion("edit")}
          />
        </div>
      )}
    </div>
  );
};
