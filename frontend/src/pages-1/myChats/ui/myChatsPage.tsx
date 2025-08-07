"use client";

import { CaphionTitle, Field, Text } from "@/shared";
import { ChatList } from "@/widgets";
import { Search } from "lucide-react";
import { useMyChatPage } from "../hook/useMyChatPage";

export const MyChatsPage = () => {
  const { chatList, setInputValue, value, onOpenCreateChatModal } =
    useMyChatPage();

  return (
    <div className="size-full flex flex-col min-w-72">
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
        disabled={!chatList?.length}
      />

      {chatList && <ChatList chats={chatList} />}
      {!chatList?.length && (
        <div className="size-full flex items-center">
          <Text text="You do not have any chats" className="mx-auto" />
        </div>
      )}
    </div>
  );
};
