import { FileField, IconButton } from "@/shared";
import { Paperclip } from "lucide-react";
import { HTMLProps, useId } from "react";

export const DialogFormFile = ({
  onPhoho,
  ...inputProps
}: {
  onPhoho?: () => void;
} & HTMLProps<HTMLInputElement>) => {
  const inputFile = useId();

  return (
    <>
      <label
        htmlFor={inputFile}
        className=" size-11 cursor-pointer flex items-center"
      >
        <Paperclip stroke="var(--black)" />
        <FileField id={inputFile} {...inputProps} />
      </label>
    </>
  );
};
