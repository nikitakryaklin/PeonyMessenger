"use client";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { chatService } from "../service/chat.service";
import { LOCAL_STORAGE } from "@/shared";

export function useSearchChat(userName: string) {
  const { data: chatList } = useQuery({
    queryKey: ["chatList", userName],
    queryFn: () => chatService.get("", 1),
    enabled: !!localStorage.getItem(LOCAL_STORAGE.userId),
    select: (data) => data.data,
  });
  return { chatList };
}
