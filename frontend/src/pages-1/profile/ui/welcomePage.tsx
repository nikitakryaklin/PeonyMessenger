import {
  Button,
  CaphionTitle,
  getUserName,
  LOCAL_STORAGE,
  Text,
} from "@/shared";
import { ProfileEditForm } from "./profileEditForm";
import { useCreateAboutMutation } from "@/features";
import { useState } from "react";
import { AvatarSquare } from "@/entities";

export const WelcomePage = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const { createAboutMutate, isPendingCreateAbout } = useCreateAboutMutation();

  return (
    <div className="flex items-center flex-col gap-3">
      <div className="flex flex-col gap-1 items-center w-full aspect-square justify-center px-4">
        {!preview && (
          <>
            <CaphionTitle text="Hello!" />
            <Text
              text={getUserName(
                localStorage.getItem(LOCAL_STORAGE.userName) || ""
              )}
            />
            <Text text="Enter information about your self" />
          </>
        )}
        {preview && <AvatarSquare url={preview} />}
      </div>

      <ProfileEditForm
        mutate={createAboutMutate}
        setPreview={setPreview}
        isLoading={isPendingCreateAbout}
      />
    </div>
  );
};
