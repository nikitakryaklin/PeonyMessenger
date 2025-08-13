import { Globe, Mail } from "lucide-react";
import { nanoid } from "nanoid";

export const INFO_PAGE_DATA = [
  {
    id: nanoid(),
    text: "Visit Website",
    url: "#",
    icon: <Globe size={15} />,
  },
  {
    id: nanoid(),
    text: "Send us Email",
    url: "#",
    icon: <Mail size={15} />,
  },
  {
    id: nanoid(),
    text: "Rules if Usage",
    url: "#",
    icon: <Globe size={15} />,
  },
];
