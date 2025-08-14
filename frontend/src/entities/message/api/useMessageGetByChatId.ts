import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getMessageByChatId } from "../service/getMessageByChatId";

export const useMessageGetByChatId = (chatId: string) => {
  const {
    data: messages,
    isPending: isPendingMessage,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["message", chatId],
    queryFn: ({ pageParam = 1 }) => getMessageByChatId(chatId, pageParam),

    initialPageParam: 1,
    getNextPageParam: (res) => {
      if (res.meta.pagination.total !== res.meta.pagination.page) {
        return res?.meta?.pagination?.page + 1;
      }
    },
    select: (result) => result.pages.flatMap((el) => el.data),
    enabled: !!chatId,
  });

  return {
    messages,
    isPendingMessage,
    nextPage: {
      hasNextPage,
      fetchNextPage,
      isFetchingNextPage,
    },
  };
};
