import { AvatarCircle } from "@/entities";
import { Logout, useUserAbout } from "@/features";
import { DropDown, useDropDownOnHover } from "@/shared";

export const UserAvatar = () => {
  const { data, isPending } = useUserAbout();
  const { onOpen, onClose, isOpen } = useDropDownOnHover();

  return (
    <>
      <button
        className="h-full w-8 sm:w-16 relative cursor-pointer"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        <AvatarCircle url={data?.avatar?.[0].url} isLoading={isPending} />
      </button>
      <DropDown
        isOpen={isOpen}
        className="right-0 bottom-[-65] w-30"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        <Logout className="w-full" />
      </DropDown>
    </>
  );
};
