"use client";

import { useSearchChat } from "@/features";
import { CaphionTitle, Field, Text } from "@/shared";
import { ChatList } from "@/widgets";
import { Search } from "lucide-react";
import { ChangeEvent, SyntheticEvent, useState } from "react";

export const MyChatsPage = () => {
  const [value, setValue] = useState("");
  const { chatList } = useSearchChat(value);

  console.log(value);
  console.log(chatList);

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
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      {chatList && <ChatList chats={chatList} />}
    </div>
  );
};
