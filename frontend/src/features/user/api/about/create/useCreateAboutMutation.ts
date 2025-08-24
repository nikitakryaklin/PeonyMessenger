"use client";

import { userService } from "@/features/user/service/user.service";
import { LOCAL_STORAGE } from "@/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateAboutMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: createAboutMutate, isPending: isPendingCreateAbout } =
    useMutation({
      mutationFn: userService.createAbout,
      onSuccess: async ({ data }) => {
        await localStorage.setItem(
          LOCAL_STORAGE.aboutDocumentId,
          data.documentId
        );
        await queryClient.invalidateQueries({ queryKey: ["user", "about"] });
      },
    });
  return { createAboutMutate, isPendingCreateAbout };
};
