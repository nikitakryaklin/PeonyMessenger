import { BookText, Globe, Mail } from "lucide-react";
import { nanoid } from "nanoid";

export const INFO_PAGE_DATA = [
  {
    id: nanoid(),
    text: "Visit Website",
    url: "https://github.com/nikitakryaklin/PeonyMessenger",
    icon: <Globe size={15} />,
  },
  {
    id: nanoid(),
    text: "Send us Email",
    url: `mailto:peony@gmail.com?subject=Questions&body=I want to ask about `,
    icon: <Mail size={15} />,
  },
  {
    id: nanoid(),
    text: "Rules if Usage",
    url: "/rules",
    icon: <BookText size={15} />,
  },
];
