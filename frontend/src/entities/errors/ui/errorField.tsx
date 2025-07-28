import { ShieldAlert } from "lucide-react";
import { Text } from "@/shared";

import {
  FieldErrors,
  FieldError,
  FieldErrorsImpl,
  Merge,
  Message,
} from "react-hook-form";

export const ErrorField = ({
  RHFError,
  mutateError,
}: {
  RHFError: [string, any][];
  mutateError: string | undefined;
}) => {
  return (
    <div className="bg-red-200 flex gap-2 p-2 rounded-[0.5rem]">
      <ShieldAlert style={{ stroke: "var(--red)" }} className="min-w-7" />
      <div>
        {RHFError &&
          RHFError.map((el) => (
            <Text key={el[0]} text={el[0] + " - " + el[1].message} />
          ))}
      </div>
      {mutateError && <Text text={mutateError} />}
    </div>
  );
};
