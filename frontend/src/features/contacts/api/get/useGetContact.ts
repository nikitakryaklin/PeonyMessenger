import { useQuery } from "@tanstack/react-query";
import { contactService } from "../../service/contacts.service";

export const useGetContact = (userName: string) => {
  const { data: contacts, isPending } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => contactService.get(userName),
    select: (data) => data.data.map((data) => data.contact),
  });

  return { contacts, isPending };
};
