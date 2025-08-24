"use client";

import { userService } from "@/features/user/service/user.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateAboutMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: updateAboutMutate, isPending: isPendingUpdateAbout } =
    useMutation({
      mutationFn: userService.updateAbout,
      onSettled: async () => {
        await queryClient.invalidateQueries({ queryKey: ["user", "about"] });
      },
    });
  return { updateAboutMutate, isPendingUpdateAbout };
};
