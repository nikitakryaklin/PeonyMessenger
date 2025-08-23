import { groupService } from "@/features/group/service/group.service";
import { LOCAL_STORAGE } from "@/shared";
import { useQuery } from "@tanstack/react-query";

export const useSearchGroup = (name: string) => {
  const { data: groupList, isPending: isPandingGroupList } = useQuery({
    queryKey: ["groupList", name],

    queryFn: () => groupService.get(name, 1),

    enabled: !!localStorage.getItem(LOCAL_STORAGE.userId),
    select: (data) => data.data,
  });

  return { groupList, isPandingGroupList };
};
