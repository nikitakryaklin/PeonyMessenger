import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMessage } from "../service/sendMessage";
import { LOCAL_STORAGE, useSocket } from "@/shared";

export function useSendMessage(chatId: number, dialog: string) {
  const queryClient = useQueryClient();

  const socket = useSocket();

  const { mutate: metateMessage, isPending: isPendingSendMessage } =
    useMutation({
      mutationFn: sendMessage,

      onMutate(data) {
        socket.emit("message", {
          dialog: dialog,
          content: data.content,
          type: data.type,
          createdAt: new Date().toISOString(),
          documentId: Date.now().toString(),
          sender: {
            documentId: localStorage
              .getItem(LOCAL_STORAGE.userDocumentId)
              ?.toString(),
          },
        });
      },

      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["message"] });
      },
    });

  return { metateMessage, isPendingSendMessage };
}
