import { IconButton, Text, Timer } from "@/shared";
import { StopCircle } from "lucide-react";
import { Control, Controller } from "react-hook-form";
import { IDialodForm } from "../../../model/dialog-form-interface";
import { RefObject } from "react";

export const DialogFormRecording = ({
  control,
  duration,
  audioBlob,
  onStopRecording,
}: {
  control: Control<IDialodForm, any, IDialodForm>;
  duration: RefObject<number>;
  audioBlob: RefObject<Blob | null>;
  onStopRecording: () => void;
}) => {
  return (
    <div className="h-full flex-1 flex items-center">
      <div className="w-full flex justify-between items-center md:px-5 bg-[var(--primery-light)] h-9 py-1 pb-1 rounded-2xl animate-pulse">
        <Text text="Recording..." />
        <Timer />
      </div>
      <Controller
        name="voise"
        control={control}
        render={({ field }) => (
          <IconButton
            icon={<StopCircle stroke="var(--red)" />}
            onClick={() => {
              onStopRecording();
              field.onChange({
                blob: audioBlob,
                duration: duration,
              });
            }}
            type={"button"}
          />
        )}
      />
    </div>
  );
};
