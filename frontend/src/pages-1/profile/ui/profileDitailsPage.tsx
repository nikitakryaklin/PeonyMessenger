"use client";

import { AvatarSquare } from "@/entities";
import {
  Button,
  getImageUrl,
  getUserName,
  IAbout,
  Loader,
  LOCAL_STORAGE,
  SubText,
  Text,
} from "@/shared";
import { ArrowLeftFromLine, EditIcon } from "lucide-react";
import { useState } from "react";
import { ProfileEditForm } from "./profileEditForm";
import { useUpdateAboutMutation } from "@/features";

export function ProfileDitailsPage({ data }: { data: IAbout }) {
  const [isAction, setIsAvtion] = useState<"edit" | "save">("edit");
  const [preview, setPreview] = useState<string | null>(null);

  const { updateAboutMutate, isPendingUpdateAbout } = useUpdateAboutMutation();

  const onCancel = () => {
    setIsAvtion("edit");
    setPreview(null);
  };

  return (
    <>
      <div className="w-full px-4">
        {!preview && (
          <AvatarSquare url={getImageUrl(data?.avatar?.[0].url || "")} />
        )}
        {preview && <AvatarSquare url={preview} />}
      </div>

      <div className="w-full px-4 flex justify-between">
        <div>
          <Text text={data?.name || "You didnt specify a name"} />
          <SubText
            text={getUserName(
              localStorage.getItem(LOCAL_STORAGE.userName.toString()) || ""
            )}
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
                  <EditIcon size={15} stroke="var(--black)" />
                  <Text text="Edit" />
                </button>
              ),
              save: (
                <button
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={onCancel}
                >
                  <ArrowLeftFromLine size={15} stroke="var(--black)" />
                  <Text text="Cancel" />
                </button>
              ),
            }[isAction]
          }
        </div>
      </div>
      {isAction === "save" && (
        <ProfileEditForm
          mutate={updateAboutMutate}
          setPreview={setPreview}
          isLoading={isPendingUpdateAbout}
        />
      )}
    </>
  );
}
