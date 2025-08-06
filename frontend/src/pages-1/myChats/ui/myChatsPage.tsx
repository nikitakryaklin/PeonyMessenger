"use client";

import { CaphionTitle, Field, Text } from "@/shared";
import { ChatList } from "@/widgets";
import { Search } from "lucide-react";
import { useMyChatPage } from "../hook/useMyChatPage";
import { useCreateChatModal } from "@/features";

export const MyChatsPage = () => {
  const { chatList, setInputValue, value } = useMyChatPage();

  const onOpenCreateChatModal = useCreateChatModal(
    (s) => s.onOpenCreateChatModal
  );

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between px-2 items-center">
        <Text text="All Chats" />
        <button
          onClick={onOpenCreateChatModal}
          className=" size-11 cursor-pointer"
        >
          <CaphionTitle text="+" />
        </button>
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
