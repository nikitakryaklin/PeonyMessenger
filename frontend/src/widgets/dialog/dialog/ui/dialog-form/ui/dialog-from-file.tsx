import { FileField, IconButton } from "@/shared";
import { Paperclip } from "lucide-react";
import { HTMLProps, useId } from "react";
import { TInputStatus } from "../../../model/dialog-form-interface";

export const DialogFormFile = ({
  onPhoho,
  setInputStatus,
  ...inputProps
}: {
  onPhoho?: () => void;
  setInputStatus: (status: TInputStatus) => void;
} & HTMLProps<HTMLInputElement>) => {
  const inputFile = useId();

  const onInput = () => setInputStatus("choosing");

  return (
    <>
      <label
        htmlFor={inputFile}
        className=" size-11 cursor-pointer flex items-center"
        onClick={onInput}
      >
        <Paperclip stroke="var(--black)" />
        <FileField id={inputFile} {...inputProps} />
      </label>
    </>
  );
};
