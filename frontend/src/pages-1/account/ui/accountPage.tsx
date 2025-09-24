"use client";

import { Modal } from "@/entities";
import {
  useCreateChatModal,
  useCreateChatMutation,
  useCreateContactsMutation,
  useFindUsers,
} from "@/features";
import { Loader, PageWrapper } from "@/shared";
import { useAdaptive } from "@/shared/providers/adaptiveProvider";
import { CreateDialog, Sidebar } from "@/widgets";
import { Header } from "@/widgets";
import clsx from "clsx";
import { ReactNode, Suspense, useState } from "react";

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

  const onCreateChatMetation = async (
    userId: number | Array<{ id: number; userName: string }>
  ) => {
    if (userId === 0 || Array.isArray(userId)) {
      return;
    }

    await createChatMutate({ userId });
    await createContactMutate({ userId });

    onCloseCreateChatModal();
  };

  const { isMobile, page } = useAdaptive();

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
          <div
            className={clsx(
              "w-full min-w-full max-w-full sm:w-3/4 sm:min-w-3/4 sm:max-w-[60vw] h-[calc(100dvh-96px)] bg-[var(--primery-light)] sm:ml-auto",
              isMobile && page !== "dialog" && "hidden"
            )}
          >
            <Suspense fallback={<Loader />}>{panel}</Suspense>
          </div>
        </main>
      </div>
    </div>
  );
};
// hidden sm:block
