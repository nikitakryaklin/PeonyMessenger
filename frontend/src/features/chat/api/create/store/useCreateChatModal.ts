import { create, StateCreator } from "zustand";

interface ICreateChatModalStore {
  isCreatechatModalOpen: boolean;
  onOpenCreateChatModal: () => void;
  onCloseCreateChatModal: () => void;
}

const createChatModalStore: StateCreator<ICreateChatModalStore> = (
  set,
  get
) => ({
  isCreatechatModalOpen: false,
  onOpenCreateChatModal: () => {
    set({ isCreatechatModalOpen: true });
  },
  onCloseCreateChatModal: () => {
    set({ isCreatechatModalOpen: false });
  },
});

export const useCreateChatModal =
  create<ICreateChatModalStore>(createChatModalStore);
