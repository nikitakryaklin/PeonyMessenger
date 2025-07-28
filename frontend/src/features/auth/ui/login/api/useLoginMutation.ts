import { AUTH_ROUTES, LOCAL_STORAGE, ROUTES } from "@/shared";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ILoginForm } from "../model/loginForm-interface";
import { IRegisterUser } from "@/features/auth/model/registeredUser-interface";
import { login } from "@/features/auth/model/login";

export const useLoginMutation = () => {
  const router = useRouter();

  const createLoginMutation = useMutation({
    mutationFn: async (data: ILoginForm): Promise<IRegisterUser> => {
      const response = await fetch(AUTH_ROUTES.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
        }),
        credentials: "include",
      });

      const response_JSON = await response.json();

      if (!response.ok) {
        throw new Error(response_JSON.error);
      }
      return response_JSON;
    },
    async onSuccess(data) {
      await router.replace(ROUTES.account);
      await login(data);
    },
  });

  return {
    mutate: createLoginMutation.mutate,
    mutateError: createLoginMutation.error?.message,
    isLoading: createLoginMutation.isPending,
  };
};
