import { Button, Field, SidebarLink, Tag } from "@/shared";
import { CalendarCheckIcon, MessageCircleMore } from "lucide-react";

export default function Page() {
  return (
    <div>
      <Button
        text="my button"
        className="bg-[var(--black)] text-[var(--white)] transition-colors duration-400 hover:bg-[var(--gray)] my-5 mx-auto"
        icon={<CalendarCheckIcon className="h-[30%]" />}
      />

      <SidebarLink
        href="#"
        text="My chats"
        className=""
        icon={<MessageCircleMore className="h-[1.5rem]" />}
        tag={<Tag tagAmount="15+" />}
      />

      <Field
        name={"name"}
        id="name"
        title="name"
        // ref={null}
        placeholder="name"
      />

      <Field
        name={"name"}
        id="name"
        title="name"
        isError={true}
        // ref={null}
        placeholder="name"
      />
    </div>
  );
}
