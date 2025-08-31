import { Button } from "@/shared";
import { LANGUAGES } from "../config/languages";
import clsx from "clsx";
import { useI18nStore } from "../model/useI18nStore";

export const I18n = ({ color = { bg: "--black", text: "--white" } }) => {
  const language = useI18nStore((s) => s.language);
  const setLanguage = useI18nStore((s) => s.setLanguage);

  return (
    <div className="flex gap-2 w-24">
      {LANGUAGES.map((el) => (
        <Button
          text={el.id}
          key={el.id}
          onClick={() => setLanguage(el.id)}
          className={clsx(
            "h-11 w-11 border transition-colors duration-200",
            language === el.id && `bg-[var(${color.bg})]`
          )}
          textClasses={clsx(language === el.id && `text-[var(${color.text})]`)}
        />
      ))}
    </div>
  );
};
