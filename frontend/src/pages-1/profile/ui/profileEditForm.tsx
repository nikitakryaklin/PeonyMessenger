"use client";

import { Button, Field, IAbout } from "@/shared";
import { ReactNode } from "react";
import { useFormEditAbout } from "../hook/useFormEditAbout";
import { UseMutateFunction } from "@tanstack/react-query";
import { IAboutMutate } from "../model/formEdit-interface";

export const ProfileEditForm = ({ mutate }: { mutate: IAboutMutate }) => {
  const { onSubmit, register } = useFormEditAbout(mutate);

  return (
    <div className="w-full border-t p-4 flex flex-col gap-4">
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <Field title="Name" {...register("name")} />
        <Field title="Photo" />
        <Button
          type="submit"
          text="Save"
          className="bg-[var(--primery)] w-full hover:bg-[var(--primery-light)]"
        />
      </form>
    </div>
  );
};
