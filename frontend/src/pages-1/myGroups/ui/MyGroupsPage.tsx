"use client";

import { CaphionTitle } from "@/shared";
import { ChatList, CreateDialog, DialogSidebar } from "@/widgets";
import { useMyGroupPage } from "../hook/useMyGroupPage";
import { Modal } from "@/entities";
import { useGroupPageModal } from "../hook/useGroupPageModal";

export const MyGroupsPage = () => {
  const { searchGroup, setSearchGroup, groupList } = useMyGroupPage();
  const { contacts, modal } = useGroupPageModal();

  return (
    <DialogSidebar
      title="Group"
      actions={
        <button
          onClick={modal.onOpenCreateGroupModal}
          className=" size-11 cursor-pointer hover:bg-[var(--primery-light)] rounded-xl"
        >
          <CaphionTitle text="+" />
        </button>
      }
      searchParams={searchGroup}
      setSearchParams={setSearchGroup}
      isSearchSisabled={!groupList?.length}
    >
      {groupList && <ChatList chats={groupList} />}
      {!groupList?.length && (
        <DialogSidebar.notFound text="You are not a member of any groups" />
      )}
      <Modal
        onClose={modal.onCloseCreateGroupModal}
        isOpen={modal.isCreateGroupModalOpen}
      >
        <CreateDialog
          type="group"
          title={"Group"}
          userName={contacts.searchContact}
          data={contacts.contacts}
          setSearchUser={contacts.setSearchContact}
          onClick={contacts.selectedContacts}
          onClose={modal.onCloseCreateGroupModal}
        />
      </Modal>
    </DialogSidebar>
  );
};
