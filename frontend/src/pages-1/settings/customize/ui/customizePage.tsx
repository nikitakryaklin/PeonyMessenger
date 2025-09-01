"use client";

import { Customize } from "@/features";
import { SettingsWrapper } from "../../home/ui/settingsWrapper";
import { useChangeColor } from "@/features/customize/hook/useChangeColor";
import { useTextScale } from "@/features/customize/hook/useTextScale";

export const CustomizePage = () => {
  const { saveColorSettings } = useChangeColor();
  const { onSaveTextScale } = useTextScale();

  const onSave = () => {
    onSaveTextScale();
    saveColorSettings();
  };

  return (
    <SettingsWrapper
      title="Customize chats"
      option={<SettingsWrapper.button onActions={onSave} />}
    >
      <Customize />
    </SettingsWrapper>
  );
};
