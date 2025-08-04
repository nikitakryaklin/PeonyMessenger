import { Loader } from "@/shared";
import { getImageUrl } from "@/shared/lib/getImageURL";
import clsx from "clsx";
import { div } from "motion/react-client";
import Image from "next/image";

export const AvatarCircle = ({
  url,
  isLoading,
  className,
}: {
  url: string | null | undefined;
  isLoading?: boolean;
  className?: string;
}) => {
  if (isLoading) {
    return <Loader />;
  }

  if (!url) {
    return (
      <div
        className={clsx(
          "size-full flex items-center justify-center rounded-full border-2 border-[var(--primery)]",
          className
        )}
      >
        <Image src={"/defaultAvatar.png"} alt="avatar" width={35} height={35} />
      </div>
    );
  }

  if (url) {
    return (
      <Image
        className={clsx(" object-cover rounded-full", className)}
        src={getImageUrl(url)}
        alt="avatar"
        fill
      />
    );
  }
};
