"use client";

import { ROUTES } from "@/shared";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { authService } from "@/features/auth/service/auth.service";

export const useLoginMutation = () => {
  const router = useRouter();

  const createLoginMutation = useMutation({
    mutationFn: authService.login,

    async onSuccess(data) {
      window.location.href = ROUTES.account;
      await authService.setUserToLocalStorage(data);
    },
  });

  return {
    mutate: createLoginMutation.mutate,
    mutateError: createLoginMutation.error?.message,
    isLoading: createLoginMutation.isPending,
  };
};
