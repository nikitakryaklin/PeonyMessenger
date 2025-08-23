import { getImageUrl } from "@/shared";
import clsx from "clsx";
import Image from "next/image";

export const AvatarSquare = ({ url }: { url: string | null | undefined }) => {
  return (
    <div className=" w-full aspect-square rounded-xl relative overflow-hidden">
      <Image
        className={clsx(" object-cover")}
        src={getImageUrl(url || "")}
        alt="avatar"
        fill
      />
    </div>
  );
};
