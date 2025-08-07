import { useMutation } from "@tanstack/react-query";
import { contactService } from "../../service/contacts.service";

export function useCreateContactsMutation() {
  const { mutate } = useMutation({
    mutationFn: contactService.create,
  });
  return { createContactMutate: mutate };
}
