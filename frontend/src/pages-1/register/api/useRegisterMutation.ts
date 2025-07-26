import { AUTH_ROUTES, LOCAL_STORAGE, ROUTES } from "@/shared";
import { useMutation } from "@tanstack/react-query";
import { IRegister } from "../model/registerForm-interface";
import { useRouter } from "next/navigation";
import { IRegisterUser } from "../model/registeredUser-interface";

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

      if (!response.ok) {
        throw new Error(response_JSON.error.message);
      }
      return response_JSON;
    },

    onSuccess: ({ data }) => {
      router.replace(ROUTES.account);
      localStorage.setItem(LOCAL_STORAGE.token, data.jwt);
      localStorage.setItem(LOCAL_STORAGE.userId, `${data.user.id}`);
      localStorage.setItem(
        LOCAL_STORAGE.userDocumentId,
        `${data.user.documentId}`
      );
    },
  });

  return {
    mutate: createRegisterMutation.mutate,
    mutateError: createRegisterMutation.error,
    isLoading: createRegisterMutation.isPending,
  };
}
