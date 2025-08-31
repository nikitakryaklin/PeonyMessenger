import { Field, Text } from "@/shared";
import { Search } from "lucide-react";
import { ChangeEvent, ReactNode } from "react";

export const DialogSidebar = ({
  title,
  actions,
  children,
  isSearchSisabled,
  searchParams,
  setSearchParams,
}: {
  title: string;
  actions: ReactNode;
  children: ReactNode;
  isSearchSisabled: boolean;
  searchParams: string;
  setSearchParams: (params: string) => void;
}) => {
  const setInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams(e.target.value);
  };

  return (
    <div className="size-full flex flex-col min-w-72">
      <div className="flex justify-between px-2 items-center">
        <Text text={`All ${title}`} className="font-bold text-[var(--gray)]" />
        {actions}
      </div>

      <Field
        icon={<Search stroke="var(--black)" />}
        type="search"
        elementClassName="px-2 my-2"
        value={searchParams}
        onChange={setInputValue}
        disabled={isSearchSisabled}
      />

      {children}
    </div>
  );
};

DialogSidebar.notFound = ({ text }: { text: string }) => (
  <div className="size-full flex items-center">
    <Text text={text} className="mx-auto" />
  </div>
);
