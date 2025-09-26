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
    <div className="flex w-full max-w-full min-w-full">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="w-full h-[calc(100dvh-56px)] md:h-[calc(100dvh-96px)] flex">
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
              "flex-1 h-full bg-[var(--primery-light)] ",
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
