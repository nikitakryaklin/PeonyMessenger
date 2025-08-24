import {
  Button,
  CaphionTitle,
  getUserName,
  LOCAL_STORAGE,
  Text,
} from "@/shared";
import { ProfileEditForm } from "./profileEditForm";
import { useCreateAboutMutation } from "@/features";

export const WelcomePage = () => {
  const { createAboutMutate, isPendingCreateAbout } = useCreateAboutMutation();

  return (
    <div className="flex items-center flex-col gap-4">
      <div className="flex flex-col gap-1 items-center w-full aspect-square justify-center">
        <CaphionTitle text="Hello!" />
        <Text
          text={getUserName(localStorage.getItem(LOCAL_STORAGE.userName) || "")}
        />
        <Text text="Enter information about your self" />
      </div>

      <ProfileEditForm mutate={createAboutMutate} />
    </div>
  );
};
