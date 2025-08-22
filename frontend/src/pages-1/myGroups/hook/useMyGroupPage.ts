"use client";

import { useSearchGroup } from "@/features";
import { useState } from "react";

export const useMyGroupPage = () => {
  const [searchGroup, setSearchGroup] = useState("");

  const { groupList } = useSearchGroup(searchGroup);

  return {
    groupList,
    searchGroup,
    setSearchGroup,
  };
};
