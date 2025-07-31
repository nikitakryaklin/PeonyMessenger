import { ChatItem } from "@/entities";
import { PageWrapper, ROUTES } from "@/shared";
import { nanoid } from "nanoid";
import Link from "next/link";

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

  return (
    <div className="w-full flex flex-col">
      {chatArray.map((el) => (
        <ChatItem
          chatId={el.link}
          key={el.link}
          avatar={""}
          userName={""}
          lastMassage={""}
          date={""}
        />
      ))}
    </div>
  );
};
