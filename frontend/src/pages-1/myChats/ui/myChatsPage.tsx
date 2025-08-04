"use client";

import { CaphionTitle, Field, Text } from "@/shared";
import { ChatList } from "@/widgets";
import { Search } from "lucide-react";
import { useMyChatPage } from "../hook/useMyChatPage";

export const MyChatsPage = () => {
  const { chatList, setInputValue, value } = useMyChatPage();

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between px-2 items-center">
        <Text text="All Chats" />
        <CaphionTitle text="+" />
      </div>

      <Field
        icon={<Search />}
        type="search"
        elementClassName="px-2 my-2"
        value={value}
        onChange={setInputValue}
      />

      {chatList && <ChatList chats={chatList} />}
    </div>
  );
};
