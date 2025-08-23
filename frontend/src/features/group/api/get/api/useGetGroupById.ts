import { groupService } from "@/features/group/service/group.service";
import { useQuery } from "@tanstack/react-query";

export function useGetGroupById(groupId: string) {
  const { data: group, isPending: isGroupPending } = useQuery({
    queryKey: ["group", groupId],
    queryFn: () => groupService.getByid(groupId),
    select: (data) => data.data,
    enabled: !!groupId,
  });

  return { group, isGroupPending };
}
