import { chatService } from "@/features/chat/service/chat.service";
import { useQuery } from "@tanstack/react-query";

export const useChatGetById = (chatId: string) => {
  const { data: chat, isPending: isPendingChat } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: () => chatService.getByid(chatId),
    select: (data) => data.data,
    enabled: !!chatId,
  });

  return { chat, isPendingChat };
};
