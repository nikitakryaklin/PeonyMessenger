"use client";

import { Customize, usePublicApiCustomize } from "@/features";
import { SettingsWrapper } from "../../home/ui/settingsWrapper";
import { useTheme } from "@/features";

export const CustomizePage = () => {
  const { onSaveCustomize, onResetCustomize } = usePublicApiCustomize();
  const { theme } = useTheme();

  return (
    <SettingsWrapper
      title="Customize chats"
      resetText="Reset customize settings"
      reset={() => onResetCustomize(theme)}
      option={<SettingsWrapper.button onActions={onSaveCustomize} />}
    >
      <Customize />
    </SettingsWrapper>
  );
};
