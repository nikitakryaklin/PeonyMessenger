"use client";

import { ROUTES } from "@/shared";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { authService } from "@/features/auth/service/auth.service";

export function useRegisterMutation() {
  const router = useRouter();

  const createRegisterMutation = useMutation({
    mutationFn: authService.lregister,

    async onSuccess(data) {
      await authService.setUserToLocalStorage(data);
      // await router.replace(ROUTES.account);
      window.location.href = ROUTES.account;
    },
  });

  return {
    mutate: createRegisterMutation.mutate,
    mutateError: createRegisterMutation.error,
    isLoading: createRegisterMutation.isPending,
  };
}
