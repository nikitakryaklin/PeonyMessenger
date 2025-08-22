"use client";

import { useCreateGroup, useGetContact } from "@/features";
import { Arapey } from "next/font/google";
import { useState } from "react";

export const useGroupPageModal = () => {
  const [searchContact, setSearchContact] = useState("");

  const { contacts, isPending } = useGetContact(searchContact);

  const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);

  const onOpenCreateGroupModal = () => {
    setIsCreateGroupModalOpen(true);
  };

  const onCloseCreateGroupModal = () => {
    setIsCreateGroupModalOpen(false);
  };

  const { createGroupMutate, isPandingCreateGroup } = useCreateGroup();

  const selectedContacts = (
    selected: number | Array<{ id: number; userName: string }>
  ) => {
    if (!Array.isArray(selected) || selected.length === 0) return;
    createGroupMutate(selected);
    onCloseCreateGroupModal();
  };

  return {
    contacts: {
      searchContact,
      contacts,
      isPending,
      setSearchContact,
      selectedContacts,
    },
    modal: {
      isCreateGroupModalOpen,
      onOpenCreateGroupModal,
      onCloseCreateGroupModal,
    },
  };
};
