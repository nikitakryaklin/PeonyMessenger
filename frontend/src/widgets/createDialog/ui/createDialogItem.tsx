import { AvatarCircle } from "@/entities";
import { Text } from "@/shared";

export const CreateDialogItem = ({
  avatarURL,
  userName,
  isActive,
}: {
  avatarURL: string | undefined;
  userName: string;
  isActive?: boolean;
}) => {
  return (
    <div className="w-full flex relative">
      <AvatarCircle url={avatarURL} className="size-14" />
      <Text text={userName} />
    </div>
  );
};
