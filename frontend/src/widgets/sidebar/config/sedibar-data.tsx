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
      icon: <MessageCircleMore />,
    },
    {
      id: nanoid(),
      text: "My Groups",
      link: ROUTES.group,
      icon: <UsersIcon />,
    },
  ],

  nav: [
    {
      id: nanoid(),
      text: "Profile",
      link: ROUTES.account,
      icon: <UserIcon />,
    },
    {
      id: nanoid(),
      text: "Blocked users",
      link: ROUTES.blocked_users,
      icon: <BanIcon />,
    },
    {
      id: nanoid(),
      text: "Settings",
      link: ROUTES.setting,
      icon: <SettingsIcon />,
    },
  ],
  help: [
    { id: nanoid(), text: "Help", link: ROUTES.help, icon: <HelpCircle /> },
    { id: nanoid(), text: "Info", link: ROUTES.info, icon: <Info /> },
  ],
  recommendation: [
    {
      id: nanoid(),
      text: "Recommendation",
      link: ROUTES.recommendation,
      icon: <RotateCcwSquare />,
    },
  ],
};
