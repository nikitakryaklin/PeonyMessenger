"use client";

import { Modal } from "@/entities";
import { useCreateChatModal, useFindUsers } from "@/features";
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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const { data, isPending } = useFindUsers(userName);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <main className="w-full h-full flex">
          <PageWrapper>{children}</PageWrapper>
          <Modal
            onClose={onCloseCreateChatModal}
            isOpen={isCreateChatModalOpen}
          >
            <CreateDialog
              title="chat"
              onClose={onCloseCreateChatModal}
              value={userName}
              data={data}
              onChange={onChange}
              onClick={() => {}}
            />
          </Modal>
          <div className="w-3/4 min-w-3/4 h-full bg-[var(--primery-light)] ml-auto">
            <Suspense fallback={<>loading...</>}>{panel}</Suspense>
          </div>
        </main>
      </div>
    </div>
  );
};
