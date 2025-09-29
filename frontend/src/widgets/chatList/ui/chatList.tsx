import { IChat } from "@/features";
import { ChatItem } from "./chatItem";
import { filtredParticipants, ROUTES } from "@/shared";

export const ChatList = ({
  chats,
  type,
}: {
  chats: IChat[];
  type: "chat" | "group";
}) => {
  const dialogUrl = {
    chat: (dialogId: string) => ROUTES.chatById(dialogId),
    group: (dialogId: string) => ROUTES.groupById(dialogId),
  };

  return (
    <div>
      {chats.map((chat, idx) => (
        <ChatItem
          key={idx}
          DialogIdUrl={dialogUrl[type](chat.documentId)}
          avatar={
            filtredParticipants(chat.participants)[0].about?.avatar?.[0].url ||
            ""
          }
          userName={
            chat.name
              ? chat.name
              : filtredParticipants(chat.participants)[0].username
          }
          // lastMessage={chat.messages[0]?.content || "no messages"}
          lastMessage={"no messages"}
          date={chat?.messages[0]?.publishedAt}
        />
      ))}
    </div>
  );
};
