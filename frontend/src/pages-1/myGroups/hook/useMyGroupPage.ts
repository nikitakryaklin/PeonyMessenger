"use client";

import { useState } from "react";

export const useMyGroupPage = () => {
  const [searchGroup, setSearchGroup] = useState("");
  const [searchContact, setSearchContact] = useState("");

  const groupList: string[] = [];

  const onOpenCreateGroupModal = () => {};

  return {
    contact: {
      contactList: [],
      searchContact,
      setSearchContact,
    },

    group: {
      groupList,
      searchGroup,
      setSearchGroup,
    },
    onOpenCreateGroupModal,
  };
};
