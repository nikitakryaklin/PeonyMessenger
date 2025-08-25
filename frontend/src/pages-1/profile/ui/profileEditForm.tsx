"use client";

import { Button, Field, FileField, IAbout, Text } from "@/shared";
import { ReactNode, useId, useRef } from "react";
import { useFormEditAbout } from "../hook/useFormEditAbout";
import { UseMutateFunction } from "@tanstack/react-query";
import { IAboutMutate } from "../model/formEdit-interface";

export const ProfileEditForm = ({ mutate }: { mutate: IAboutMutate }) => {
  const { onSubmit, register } = useFormEditAbout(mutate);
  const id = useId();

  return (
    <div className="w-full border-t p-4 flex flex-col gap-4">
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <Field title="Name" {...register("name")} />
        <Text text="Avatar" />
        <label
          htmlFor={id}
          className="w-full h-9 flex items-center justify-center border rounded-lg my-[-0.5rem] mb-2"
        >
          <Text text="Choose an avatar" />
          <FileField id={id} />
        </label>
        <Button
          type="submit"
          text="Save"
          className="bg-[var(--primery)] w-full hover:bg-[var(--primery-light)]"
        />
      </form>
    </div>
  );
};
