"use client";

import { CaphionTitle } from "@/shared";
import { ChatList, CreateDialog, DialogSidebar } from "@/widgets";
import { useMyGroupPage } from "../hook/useMyGroupPage";
import { Modal } from "@/entities";

export const MyGroupsPage = () => {
  const { contact, group, onOpenCreateGroupModal } = useMyGroupPage();

  return (
    <DialogSidebar
      title="Group"
      actions={
        <button
          onClick={onOpenCreateGroupModal}
          className=" size-11 cursor-pointer hover:bg-[var(--primery-light)] rounded-xl"
        >
          <CaphionTitle text="+" />
        </button>
      }
      searchParams={group.searchGroup}
      setSearchParams={group.setSearchGroup}
      isSearchSisabled={!group.groupList?.length}
    >
      {/* {chatList && <ChatList chats={chatList} />}
      {!chatList?.length && (
    )} */}
      <Modal onClose={() => {}} isOpen={true}>
        <CreateDialog
          type="group"
          title={"Group"}
          userName={contact.searchContact}
          data={undefined}
          setSearchUser={contact.setSearchContact}
          onClick={() => {}}
          onClose={() => {}}
        />
      </Modal>
      <DialogSidebar.notFound text="You are not a member of any groups" />
    </DialogSidebar>
  );
};
