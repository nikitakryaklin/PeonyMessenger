import { useQuery } from "@tanstack/react-query";
import { userService } from "../service/user.service";
import { LOCAL_STORAGE } from "@/shared";

export function useFindUsers(username: string) {
  const { data, isPending } = useQuery({
    queryKey: ["user", "notMyContacts", username],
    queryFn: () => userService.findUsersByUserName(username),
    enabled: !!localStorage.getItem(LOCAL_STORAGE.userDocumentId),
  });

  return { data, isPending };
}
