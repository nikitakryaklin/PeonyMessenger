import { useQuery } from "@tanstack/react-query";
import { userService } from "../service/user.service";
import { LOCAL_STORAGE } from "@/shared";

export function useNotMyContacts() {
  const { data, isPending } = useQuery({
    queryKey: ["user", "notMyContacts"],
    queryFn: userService.getNotMyContacts,
    // select: (data) => data.data[0,
    enabled: !!localStorage.getItem(LOCAL_STORAGE.userDocumentId),
  });

  return { data, isPending };
}
