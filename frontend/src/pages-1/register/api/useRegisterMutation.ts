import { API, ROUTES } from "@/shared";
import { useMutation } from "@tanstack/react-query";
import { IRegister } from "../model/registerForm-interface";
import { useRouter } from "next/navigation";

export function useRegisterMutation() {
  const router = useRouter();

  const createRegisterMutation = useMutation({
    mutationFn: async (data: IRegister) => {
      const response = await fetch(API + "/auth/local/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ ...data }),
      });

      const response_JSON = await response.json();

      if (!response.ok) {
        throw new Error(response_JSON.error.message);
      }
    },
    onSuccess: () => {
      router.replace(ROUTES.login);
      //   localStorage.setItem("token", data.jwt);
      //   localStorage.setItem("user_id", `${data.user.id}`);
      //   localStorage.setItem("user_ducumentID", `${data.user.documentID}`);
    },
  });

  const mutationError = createRegisterMutation.error;

  return { createRegisterMutation, mutationError };
}
