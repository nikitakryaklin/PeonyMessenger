import { useQuery } from "@tanstack/react-query";
import { getMessageByChatId } from "../service/getMessageByChatId";
//useInfinityQuery
export const useMessageGetByChatId = (chatId: string) => {
  const { data: messages, isPending: isPendingMessage } = useQuery({
    queryKey: ["messange", chatId],
    queryFn: () => getMessageByChatId(chatId),
    select: (data) => data.data.reverse(),
    enabled: !!chatId,
  });
  return { messages, isPendingMessage };
};
