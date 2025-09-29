import { authService } from "@/features/auth/service/auth.service";
import { ROUTES } from "@/shared";
import { useMutation } from "@tanstack/react-query";

export const useGoogleMutation = () => {
  const { mutate: mutateGoogle, isPending: isPendingGoogle } = useMutation({
    mutationFn: authService.oauth,
    async onSuccess(data) {
      window.location.href = ROUTES.account;
      await authService.setUserToLocalStorage(data);
    },
  });

  return { mutateGoogle, isPendingGoogle };
};
