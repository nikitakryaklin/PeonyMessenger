import { PageWrapper } from "@/shared";
import { Sidebar } from "@/widgets";
import { Header } from "@/widgets";
import { ReactNode, Suspense } from "react";

export const AccountPage = ({
  children,
  panel,
}: {
  children: ReactNode;
  panel: ReactNode;
}) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <main className="w-full h-full flex">
          <PageWrapper>{children}</PageWrapper>
          <div className="w-3/4 min-w-3/4 h-full bg-[var(--primery-light)] ml-auto">
            <Suspense fallback={<>loading...</>}>{panel}</Suspense>
          </div>
        </main>
      </div>
    </div>
  );
};
