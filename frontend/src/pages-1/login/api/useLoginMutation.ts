import { AUTH_ROUTES, LOCAL_STORAGE, ROUTES } from "@/shared";
import { useMutation } from "@tanstack/react-query";
import { ILoginForm } from "../model/loginForm-interface";
import { useRouter } from "next/navigation";

export const useLoginMutation = () => {
  const router = useRouter();

  const createLoginMutation = useMutation({
    mutationFn: async (data: ILoginForm) => {
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
    onSuccess: async ({ data }) => {
      const login = (data: any) => {
        router.replace(ROUTES.account);
        localStorage.setItem(LOCAL_STORAGE.token, data.jwt);
        localStorage.setItem(LOCAL_STORAGE.userId, `${data.user.id}`);
        localStorage.setItem(
          LOCAL_STORAGE.userDocumentId,
          `${data.user.documentId}`
        );
      };
      login(data);
    },
  });

  return {
    mutate: createLoginMutation.mutate,
    mutateError: createLoginMutation.error,
    isLoading: createLoginMutation.isPending,
  };
};
