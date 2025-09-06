import { useQueryClient } from "@tanstack/react-query";

export const useQueryCacheSize = () => {
  const queryClient = useQueryClient();

  const queryCacheInMB = (queryKey: string) =>
    Number(
      new TextEncoder().encode(
        JSON.stringify(
          queryClient.getQueryCache().findAll({ queryKey: [queryKey] })
        )
      ).length
    );

  return { queryCacheInMB };
};
