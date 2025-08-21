"use client";

import { useCreateChatModal, useSearchChat } from "@/features";
import { ChangeEvent, useState } from "react";

export function useMyChatPage() {
  const [value, setValue] = useState("");
  const { chatList } = useSearchChat(value);

  const onOpenCreateChatModal = useCreateChatModal(
    (s) => s.onOpenCreateChatModal
  );

  return { chatList, value, setValue, onOpenCreateChatModal };
}
