import { groupService } from "@/features/group/service/group.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateGroup = () => {
  const queryClient = useQueryClient();

  const { mutate: createGroupMutate, isPending: isPandingCreateGroup } =
    useMutation({
      mutationFn: groupService.create,
      onSettled: async () => {
        await queryClient.invalidateQueries({ queryKey: ["groupList"] });
        // await router.push(ROUTES.chatById(data.documentId));
      },
    });
  return { createGroupMutate, isPandingCreateGroup };
};
