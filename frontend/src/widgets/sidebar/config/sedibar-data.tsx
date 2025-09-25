import { ROUTES } from "@/shared";
import {
  BanIcon,
  HelpCircle,
  Info,
  MessageCircleMore,
  RotateCcwSquare,
  SettingsIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import { nanoid } from "nanoid";

export const SIDEBAR_DATA = {
  chat: [
    {
      id: nanoid(),
      text: "My chats",
      link: ROUTES.chat,
      icon: <MessageCircleMore style={{ stroke: "var(--black)" }} />,
    },
    {
      id: nanoid(),
      text: "My Groups",
      link: ROUTES.group,
      icon: <UsersIcon style={{ stroke: "var(--black)" }} />,
    },
  ],

  nav: [
    {
      id: nanoid(),
      text: "Profile",
      link: ROUTES.account,
      icon: <UserIcon style={{ stroke: "var(--black)" }} />,
    },
    {
      id: nanoid(),
      text: "Settings",
      link: ROUTES.setting.home,
      icon: <SettingsIcon style={{ stroke: "var(--black)" }} />,
    },
  ],
  help: [
    {
      id: nanoid(),
      text: "Help",
      link: ROUTES.faq,
      icon: <HelpCircle style={{ stroke: "var(--black)" }} />,
    },
    {
      id: nanoid(),
      text: "Info",
      link: ROUTES.info,
      icon: <Info style={{ stroke: "var(--black)" }} />,
    },
  ],
};
