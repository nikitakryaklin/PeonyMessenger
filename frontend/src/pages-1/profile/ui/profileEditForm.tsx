"use client";

import { Button, Field, FileField, IAbout, Text, usePreview } from "@/shared";
import { ReactNode, useId, useRef } from "react";
import { useFormEditAbout } from "../hook/useFormEditAbout";
import { UseMutateFunction } from "@tanstack/react-query";
import { IAboutMutate } from "../model/formEdit-interface";

export const ProfileEditForm = ({
  isLoading,
  mutate,
  setPreview,
}: {
  isLoading: boolean;
  mutate: IAboutMutate;
  setPreview: (url: string | null) => void;
}) => {
  const { onSubmit, register, watch } = useFormEditAbout(mutate);
  usePreview(watch("avatar"), setPreview);

  const id = useId();

  return (
    <div className="w-full border-t p-4 flex flex-col gap-4">
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <Field title="Name" {...register("name")} />
        <Text text="Avatar" />
        <label
          htmlFor={id}
          className="w-full h-9 flex items-center justify-center border rounded-lg my-[-0.5rem] mb-2 cursor-pointer"
        >
          <Text text="Choose an avatar" />
          <FileField id={id} {...register("avatar")} />
        </label>
        <Button
          type="submit"
          text="Save"
          className="bg-[var(--primery)] w-full hover:bg-[var(--primery-light)]"
          promise={{ loading: isLoading, color: "#000" }}
        />
      </form>
    </div>
  );
};
