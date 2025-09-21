"use client";

import { IconButton, SubText, Text } from "@/shared";
import { SettingsWrapper } from "../../home/ui/settingsWrapper";
import { Trash2 } from "lucide-react";
import { getSize } from "@/shared/lib/ getSize";
import { useStorePage } from "../hook/useStorePage";

export const StoragePage = () => {
  const { cashe, onDeleteCache, onDeleteAll } = useStorePage();

  return (
    <SettingsWrapper
      title="Data and storage"
      resetText="Delete all files"
      disabled={cashe.length === 0}
      reset={onDeleteAll}
    >
      <ul>
        {cashe.length !== 0 ? (
          cashe.map((el) => (
            <li key={el.id} className="flex justify-between items-center px-3">
              <div className="flex gap-2 items-center">
                {el.icon} <Text text={el.name} />
              </div>

              <div className="flex gap-2 items-center">
                <SubText text={getSize(el.size)} />

                <IconButton
                  type="button"
                  icon={<Trash2 stroke="var(--red)" />}
                  onClick={() => onDeleteCache(el.keys, el.id)}
                />
              </div>
            </li>
          ))
        ) : (
          <div className="size-full py-4">
            <Text text="No cache" className="text-center text-[var(--black)]" />
          </div>
        )}
      </ul>
    </SettingsWrapper>
  );
};
