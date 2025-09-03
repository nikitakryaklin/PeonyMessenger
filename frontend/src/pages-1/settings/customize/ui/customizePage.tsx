"use client";

import { Customize, usePublicApiCustomize } from "@/features";
import { SettingsWrapper } from "../../home/ui/settingsWrapper";

export const CustomizePage = () => {
  const { onSaveCustomize, onResetCustomize } = usePublicApiCustomize();

  return (
    <SettingsWrapper
      title="Customize chats"
      resetText="Reset customize settings"
      reset={onResetCustomize}
      option={<SettingsWrapper.button onActions={onSaveCustomize} />}
    >
      <Customize />
    </SettingsWrapper>
  );
};
