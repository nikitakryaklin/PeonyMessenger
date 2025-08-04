"use client";

import { useSearchChat } from "@/features";
import { ChangeEvent, useState } from "react";

export function useMyChatPage() {
  const [value, setValue] = useState("");
  const { chatList } = useSearchChat(value);

  const setInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { chatList, setInputValue, value };
}
