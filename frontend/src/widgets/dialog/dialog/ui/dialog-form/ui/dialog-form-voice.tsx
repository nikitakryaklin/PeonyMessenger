import { AudioPlayer, IconButton } from "@/shared";
import { Trash2 } from "lucide-react";
import { RefObject } from "react";

export const DialogFormVoice = ({
  url,
  duration,
  deleteAudio,
  setFormStatus,
  reset,
}: {
  url: string;
  duration: RefObject<number>;
  deleteAudio: () => void;
  setFormStatus: () => void;
  reset: () => void;
}) => {
  const onDeleteAudio = () => {
    deleteAudio();
    setFormStatus();
    reset();
  };

  return (
    <>
      <AudioPlayer src={url} duration={duration.current} />
      <IconButton
        icon={<Trash2 stroke="var(--black)" />}
        onClick={onDeleteAudio}
        type={"button"}
      />
    </>
  );
};
