import { QueryCache, useQueryClient } from "@tanstack/react-query";

export const useQueryCacheSize = () => {
  const queryClient = useQueryClient();

  const queryCacheInMB = (queryKey: string) => {
    const queryCache = queryClient
      .getQueryCache()
      .findAll({ queryKey: [queryKey] });

    if (queryCache.length === 0) {
      return 0;
    } else {
      const cacheSize = new TextEncoder().encode(
        JSON.stringify(queryCache)
      ).length;

      return Number(cacheSize);
    }
  };

  return { queryCacheInMB };
};
