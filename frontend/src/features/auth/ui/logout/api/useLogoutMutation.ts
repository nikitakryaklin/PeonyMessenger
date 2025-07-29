"use client";

import { authService } from "@/features/auth/service/auth.service";
import { LOCAL_STORAGE, ROUTES } from "@/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const createLogoutMutation = useMutation({
    mutationFn: authService.logout,
    onSuccess: async () => {
      await queryClient.clear();
      localStorage.removeItem(LOCAL_STORAGE.userId);
      localStorage.removeItem(LOCAL_STORAGE.token);
      localStorage.removeItem(LOCAL_STORAGE.userDocumentId);
      router.replace(ROUTES.home);
    },
  });

  return {
    logout: createLogoutMutation.mutate,
    isLoading: createLogoutMutation.isPending,
  };
};
