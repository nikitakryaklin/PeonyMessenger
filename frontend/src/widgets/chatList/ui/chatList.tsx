// import { IChat } from "../model/chat-interface";
import { IChat } from "@/features";
import { ChatItem } from "./chatItem";

export const ChatList = ({ chats }: { chats: IChat[] }) => {
  console.log(chats);

  return (
    <div>
      {chats.map((chat, idx) => (
        <ChatItem
          key={idx}
          chatId={chat.documentId}
          avatar={chat.participants[1].about?.avatar?.[0].url}
          userName={chat.participants[1].username}
          lastMessage={chat.messages[0].massange}
          date={chat.messages[0].publishedAt}
        />
      ))}
    </div>
  );
};
