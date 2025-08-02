"use client";

import { useSearchChat } from "@/features";
import { ChatList } from "@/widgets";

export const MyChatsPage = () => {
  const chatArray = [
    {
      link: 1,
    },
    {
      link: 2,
    },
    {
      link: 3,
    },
    {
      link: 4,
    },
    {
      link: 5,
    },
  ];

  const { chatList } = useSearchChat("");

  console.log(chatList);

  return (
    <div className="w-full flex flex-col">
      <ChatList chats={chatList!} />
    </div>
  );
};
