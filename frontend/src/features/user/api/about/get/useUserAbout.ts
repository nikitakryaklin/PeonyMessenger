"use client";

import { useQuery } from "@tanstack/react-query";
import { LOCAL_STORAGE } from "@/shared";
import { userService } from "@/features/user/service/user.service";
import { useEffect } from "react";

export function useUserAbout() {
  const { data, isPending, isSuccess } = useQuery({
    queryKey: ["user", "about"],
    queryFn: userService.getAbout,
    select: (data) => data.data[0],
    enabled: !!localStorage.getItem(LOCAL_STORAGE.userDocumentId),
  });

  useEffect(() => {
    if (data) {
      localStorage.setItem(LOCAL_STORAGE.aboutDocumentId, data.documentId);
    }
  }, [isSuccess]);

  return { data, isPending };
}
