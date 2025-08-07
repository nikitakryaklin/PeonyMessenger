"use client";

import { chatService } from "@/features/chat/service/chat.service";
import { ROUTES } from "@/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useSearchChat } from "../../list/api/useSearchChat";

export const useCreateChatMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: chatService.create,
    onSuccess: async ({ data }) => {
      await queryClient.invalidateQueries({ queryKey: ["chatList"] });
      await router.push(ROUTES.chatById(data.documentId));
    },
  });

  return { createChatMutate: mutate, isPending };
};
