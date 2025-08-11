import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMessage } from "../service/sendMessage";

export function useSendMessage(chatId: number) {
  const queryClient = useQueryClient();

  const { mutate: metateMessage, isPending: isPendingSendMessage } =
    useMutation({
      mutationFn: sendMessage,
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["messange"] });
      },
    });
  return { metateMessage, isPendingSendMessage };
}
