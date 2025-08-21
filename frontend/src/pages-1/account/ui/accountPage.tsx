"use client";

import { Modal } from "@/entities";
import {
  useCreateChatModal,
  useCreateChatMutation,
  useCreateContactsMutation,
  useFindUsers,
} from "@/features";
import { PageWrapper } from "@/shared";
import { CreateDialog, Sidebar } from "@/widgets";
import { Header } from "@/widgets";
import { ChangeEvent, ReactNode, Suspense, useState } from "react";

export const AccountPage = ({
  children,
  panel,
}: {
  children: ReactNode;
  panel: ReactNode;
}) => {
  const isCreateChatModalOpen = useCreateChatModal(
    (s) => s.isCreatechatModalOpen
  );
  const onCloseCreateChatModal = useCreateChatModal(
    (s) => s.onCloseCreateChatModal
  );

  const [userName, setUserName] = useState("");

  const { data, isPending } = useFindUsers(userName);

  const { createChatMutate } = useCreateChatMutation();
  const { createContactMutate } = useCreateContactsMutation();

  const onCreateChatMetation = async (userId: number | number[]) => {
    if (userId === 0 || Array.isArray(userId)) {
      return;
    }

    await createChatMutate({ userId });
    await createContactMutate({ userId });

    onCloseCreateChatModal();
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <main className="w-full h-[calc(100dvh-96px)] flex">
          <PageWrapper>{children}</PageWrapper>
          <Modal
            onClose={onCloseCreateChatModal}
            isOpen={isCreateChatModalOpen}
          >
            <CreateDialog
              type="chat"
              title="chat"
              onClose={onCloseCreateChatModal}
              userName={userName}
              data={data}
              setSearchUser={setUserName}
              onClick={onCreateChatMetation}
            />
          </Modal>
          <div className="w-3/4 min-w-3/4 max-w-[60vw] h-[calc(100dvh-96px)] bg-[var(--primery-light)] ml-auto">
            <Suspense fallback={<>loading...</>}>{panel}</Suspense>
          </div>
        </main>
      </div>
    </div>
  );
};
