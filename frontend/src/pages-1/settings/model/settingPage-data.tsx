import { BellRing, MessageCircleHeart, ServerIcon } from "lucide-react";
import { nanoid } from "nanoid";

export const SETTINGS_PAGE_DATA = [
  {
    id: nanoid(),
    text: "Natification and sounds",
    value: "natification",
    link: "#",
    icon: <BellRing style={{ stroke: "var(--black)" }} />,
  },
  {
    id: nanoid(),
    text: "Data and storage",
    value: "storage",
    link: "#",
    icon: <ServerIcon style={{ stroke: "var(--black)" }} />,
  },
  {
    id: nanoid(),
    text: "Customize chats",
    value: "natification",
    link: "#",
    icon: <MessageCircleHeart style={{ stroke: "var(--black)" }} />,
  },
];
