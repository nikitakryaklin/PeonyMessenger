"use client";

import { useState } from "react";

export const useCreateChatModal = () => {
  const [isCreateChatModalOpen, setIsCreateChatModalOpen] = useState(false);

  const onCloseCreateChatModal = () => {
    setIsCreateChatModalOpen(false);
  };

  const onOpenCreateChatModal = () => {
    setIsCreateChatModalOpen(true);
  };

  return {
    isCreateChatModalOpen,
    onCloseCreateChatModal,
    onOpenCreateChatModal,
  };
};
