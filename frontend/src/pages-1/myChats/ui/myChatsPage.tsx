"use client";

import { CaphionTitle, Text } from "@/shared";
import { ChatList, DialogSidebar } from "@/widgets";
import { useMyChatPage } from "../hook/useMyChatPage";
import { useAdaptive } from "@/shared/providers/adaptiveProvider";
import { useEffect } from "react";

export const MyChatsPage = () => {
  const { chatList, value, setValue, onOpenCreateChatModal } = useMyChatPage();

  const { setCurrentPage } = useAdaptive();

  useEffect(() => {
    setCurrentPage("dialog");
  }, []);

  return (
    <DialogSidebar
      title="Chat"
      actions={
        <button
          onClick={onOpenCreateChatModal}
          className=" size-11 cursor-pointer hover:bg-[var(--primery-light)] rounded-xl"
        >
          <CaphionTitle text="+" />
        </button>
      }
      searchParams={value}
      setSearchParams={setValue}
      isSearchSisabled={!chatList?.length}
    >
      {chatList && <ChatList chats={chatList} type="chat" />}
      {!chatList?.length && (
        <DialogSidebar.notFound text="You do not have any chats" />
      )}
    </DialogSidebar>
  );
};
