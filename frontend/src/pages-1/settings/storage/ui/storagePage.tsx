"use client";

import { IconButton, SubText, Text, useQueryCacheSize } from "@/shared";
import { SettingsWrapper } from "../../home/ui/settingsWrapper";
import { li } from "motion/react-client";
import { Trash2, User2Icon, UsersIcon } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

export const StoragePage = () => {
  const { queryCacheInMB } = useQueryCacheSize();

  const queryClient = useQueryClient();

  const cache = [
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
  ];

  const deleteCache = (keys: string[]) => {
    keys.forEach(
      async (key) => await queryClient.removeQueries({ queryKey: [key] })
    );
  };

  console.log(queryClient.getQueriesData({ queryKey: ["chat"] }));

  return (
    <SettingsWrapper
      title="Data and storage"
      resetText="Delete all files"
      reset={() => {}}
    >
      <ul>
        {cache
          .sort((a, b) => b.size - a.size)
          .map((el) => (
            <li key={el.id} className="flex justify-between items-center px-3">
              <div className="flex gap-2 items-center">
                {el.icon} <Text text={el.name} />
              </div>
              <div className="flex gap-2 items-center">
                <SubText text={el.size + " bt"} />
                <IconButton
                  icon={<Trash2 stroke="var(--red)" />}
                  onClick={() => deleteCache(el.keys)}
                />
              </div>
            </li>
          ))}
      </ul>
    </SettingsWrapper>
  );
};
