import { IChat } from "@/features";
import { ChatItem } from "./chatItem";
import { filtredParticipants } from "@/shared";

export const ChatList = ({ chats }: { chats: IChat[] }) => {
  return (
    <div>
      {chats.map((chat, idx) => (
        <ChatItem
          key={idx}
          chatId={chat.documentId}
          avatar={
            filtredParticipants(chat.participants)[0].about?.avatar?.[0].url
          }
          userName={
            chat.name
              ? chat.name
              : filtredParticipants(chat.participants)[0].username
          }
          lastMessage={chat.messages[0]?.massage || "no messages"}
          date={chat?.messages[0]?.publishedAt}
        />
      ))}
    </div>
  );
};
