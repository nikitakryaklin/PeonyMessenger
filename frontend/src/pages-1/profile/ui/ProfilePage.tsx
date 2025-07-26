"use client";

import { Button, LOCAL_STORAGE, ROUTES } from "@/shared";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const ProfilePage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const logOut = async () => {
    await fetch("/api/logout", {
      method: "POST",
      credentials: "include",
    });
    localStorage.removeItem(LOCAL_STORAGE.token);
    localStorage.removeItem(LOCAL_STORAGE.userId);
    localStorage.removeItem(LOCAL_STORAGE.userDocumentId);
    await queryClient.clear();
    router.replace(ROUTES.home);
  };

  return (
    <div>
      profile
      <Button text="logout" onClick={logOut} className="bg-[var(--primery)]" />
    </div>
  );
};
