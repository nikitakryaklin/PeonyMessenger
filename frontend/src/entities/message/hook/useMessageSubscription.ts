"use client";

import { IPagination, useSocket } from "@/shared";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { TMessage } from "../model/massage-interface";

export const useMessageSubscription = (dialog: string) => {
  const socket = useSocket();
  const queryClient = useQueryClient();

  useEffect(() => {
    socket.on("message", ({ data }: { data: TMessage }) => {
      queryClient.setQueryData<
        InfiniteData<{ data: TMessage[]; meta: IPagination }, number>
      >(["message", dialog], (old) => {
        if (!old) {
          return {
            pages: [{ data: [data], meta: {} as IPagination }],
            pageParams: [1],
          };
        }
        return {
          ...old,
          pages: old.pages.map((page, idx) => {
            if (idx === 0) {
              return {
                ...page,
                data: [data, ...page.data],
              };
            }
            return page;
          }),
        };
      });
    });
  }, [dialog, socket]);
};
