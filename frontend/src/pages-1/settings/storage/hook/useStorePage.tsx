"use client";

import { useQueryCacheSize } from "@/shared";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { ICacheData } from "../model/casheDate-interface";
import { User2Icon, UsersIcon } from "lucide-react";

export const useStorePage = () => {
  const { queryCacheInMB } = useQueryCacheSize();
  const queryClient = useQueryClient();

  const [cashe, setCashe] = useState<ICacheData[]>([
    {
      id: "1",
      icon: <User2Icon stroke="var(--black)" />,
      size: queryCacheInMB("chat") + queryCacheInMB("chatList"),
      name: "chat",
      keys: ["chat", "chatList"],
    },
    {
      id: "2",
      icon: <UsersIcon stroke="var(--black)" />,
      size: queryCacheInMB("group") + queryCacheInMB("groupList"),
      name: "group",
      keys: ["group", "groupList"],
    },
  ]);

  const [isDelete, setIsDelete] = useState(false);

  const onDeleteCache = async (keys: string[], id: string) => {
    setIsDelete(true);
    await Promise.all(
      keys.map((key) => queryClient.removeQueries({ queryKey: [key] }))
    );
    setIsDelete(false);

    setCashe((prev) => prev.filter((el) => el.id !== id));
  };

  const onDeleteAll = async () => {
    await Promise.all(cashe.map((el) => onDeleteCache(el.keys, el.id)));
  };

  return {
    cashe: cashe.filter((el) => el.size !== 0).sort((a, b) => b.size - a.size),
    isDelete,
    onDeleteCache,
    onDeleteAll,
  };
};
