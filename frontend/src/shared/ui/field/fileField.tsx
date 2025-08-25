import { HTMLProps, RefObject } from "react";

export function FileField({
  Ref,
  type = "file",
  ...inputProps
}: { Ref?: RefObject<HTMLInputElement> } & HTMLProps<HTMLInputElement>) {
  return <input type={type} ref={Ref} className=" hidden" {...inputProps} />;
}
