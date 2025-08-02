// import { IChat } from "../model/chat-interface";
import { IChat } from "@/features";
import { ChatItem } from "./chatItem";

export const ChatList = ({ chats }: { chats: IChat[] }) => {
  console.log(chats[0].participants[1].about?.avatar[0]?.url);

  return (
    <div>
      {/* {chats.map((chat, idx) => (
        <ChatItem
          key={idx}
          chatId={chat.documentId}
          avatar={null}
          userName={chat.participants[1].username}
          lastMessage={chat.messanges[0].massange}
          date={chat.messanges[0].publishedAt}
        />
      ))} */}
    </div>
  );
};
// "participants
