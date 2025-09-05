"use client";

import { Button, IconButton } from "@/shared";
import { TREME_DATA } from "../model/treme-data";
import clsx from "clsx";
import { useTheme } from "../hook/useTreme";

export const Theme = ({ size }: { size: "s" | "l" }) => {
  const { theme, onChangeTheme } = useTheme();

  return (
    <div
      className={clsx(
        "flex h-12 rounded-xl items-center justify-center",
        size === "l" && "w-4/5 px-1",
        size === "s" && "w-3/4 aspect-square",
        theme === "light" && "bg-neutral-300",
        theme === "dark" && "bg-neutral-500"
      )}
    >
      {
        {
          l: (
            <>
              {Object.values(TREME_DATA).map((el) => (
                <Button
                  key={el.id}
                  text={el.text}
                  icon={el.icon}
                  className={clsx(
                    "flex gap-2",
                    theme === el.value &&
                      "bg-[var(--white)] transition-colors duration-150 ease-in-out"
                  )}
                  onClick={() => onChangeTheme(el.value)}
                />
              ))}
            </>
          ),
          s: (
            <IconButton
              icon={TREME_DATA[theme].icon}
              onClick={() =>
                onChangeTheme(
                  TREME_DATA[theme].value === "light" ? "dark" : "light"
                )
              }
            />
          ),
        }[size]
      }
    </div>
  );
};
