import { useQuery } from "@tanstack/react-query";
import { LOCAL_STORAGE } from "@/shared";
import { userService } from "@/features/user/service/user.service";

export function useUserAbout() {
  const { data, isPending } = useQuery({
    queryKey: ["user", "about"],
    queryFn: userService.getAbout,
    select: (data) => data.data[0],
    enabled: !!localStorage.getItem(LOCAL_STORAGE.userDocumentId),
  });

  return { data, isPending };
}
