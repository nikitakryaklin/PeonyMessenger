import { language } from "../model/language-type";

interface ILanguage {
  id: language;
}

export const LANGUAGES: ILanguage[] = [
  {
    id: "ru",
  },
  {
    id: "en",
  },
];
