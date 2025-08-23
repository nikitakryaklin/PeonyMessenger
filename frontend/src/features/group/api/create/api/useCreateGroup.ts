"use client";

import { groupService } from "@/features/group/service/group.service";
import { ROUTES } from "@/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useCreateGroup = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  const { mutate: createGroupMutate, isPending: isPandingCreateGroup } =
    useMutation({
      mutationFn: groupService.create,

      onSettled: async ({ data }) => {
        await queryClient.invalidateQueries({ queryKey: ["groupList"] });
        await router.push(ROUTES.groupById(data.documentId));
      },
    });
  return { createGroupMutate, isPandingCreateGroup };
};
