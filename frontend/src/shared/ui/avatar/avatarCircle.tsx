import { getImageUrl } from "@/shared/lib/getImageURL";
import clsx from "clsx";
import Image from "next/image";

export const AvatarCircle = ({
  url,
  className,
}: {
  url: string | null | undefined;
  className?: string;
}) => {
  const imageURL = url ? getImageUrl(url) : "/defaultAvatar.png";

  console.log(imageURL);
  return (
    <Image
      className={clsx(" object-cover rounded-full", className)}
      src={imageURL}
      alt="avatar"
      width={56}
      height={56}
      // fill
    />
  );
};
