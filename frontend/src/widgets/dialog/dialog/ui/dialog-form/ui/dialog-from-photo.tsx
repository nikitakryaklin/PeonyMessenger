import { AvatarSquare } from "@/entities";
import { IconButton } from "@/shared";
import { Trash2 } from "lucide-react";

export const DialogFromPhoto = ({
  photoURL,
  setFormStatus,
  reset,
}: {
  photoURL: string | null;
  setFormStatus: () => void;
  reset: () => void;
}) => {
  const onDeletePhoto = () => {
    setFormStatus();
    reset();
  };

  if (!photoURL) {
    setFormStatus();
    return null;
  }

  return (
    <div className="w-full flex  justify-between items-end h-full">
      <div className="size-40">
        <AvatarSquare url={photoURL} />
      </div>
      <IconButton
        icon={<Trash2 stroke="var(--black)" />}
        onClick={onDeletePhoto}
        type={"button"}
      />
    </div>
  );
};
