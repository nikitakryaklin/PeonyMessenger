"use client";

import { AUTH_ROUTES, LOCAL_STORAGE, ROUTES } from "@/shared";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { IRegister } from "../model/registerForm-interface";
import { IRegisterUser } from "@/features/auth/model/registeredUser-interface";
import { removeFormStore } from "../model/useFormStepStore";
import { login } from "@/features/auth/model/login";

export function useRegisterMutation() {
  const router = useRouter();

  const createRegisterMutation = useMutation({
    mutationFn: async (data: IRegister): Promise<IRegisterUser> => {
      const response = await fetch(AUTH_ROUTES.register, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          credentials: "include",
        },
        credentials: "include",
        body: JSON.stringify({ ...data }),
      });

      const response_JSON = await response.json();

      if (response.ok) {
        return response_JSON;
      }

      throw new Error(response_JSON.error);
    },

    async onSuccess(data) {
      await login(data);
      await router.replace(ROUTES.account);
      await removeFormStore();
    },
  });

  return {
    mutate: createRegisterMutation.mutate,
    mutateError: createRegisterMutation.error,
    isLoading: createRegisterMutation.isPending,
  };
}
