"use client";

import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { keepPreviousData, QueryClient } from "@tanstack/react-query";
import {
  persistQueryClient,
  PersistQueryClientProvider,
} from "@tanstack/react-query-persist-client";
import { ReactNode, useEffect, useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      placeholderData: keepPreviousData,
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
      gcTime: 1000 * 60 * 60,
    },
  },
});

export const QueryClientCastomProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isPersistor, setIsPersistor] = useState(false);
  const [persister, setPersister] = useState<any>(null);

  useEffect(() => {
    const persister = createAsyncStoragePersister({
      storage: window.sessionStorage,
    });

    persistQueryClient({
      queryClient,
      persister: persister,
    });

    setIsPersistor(true);
    setPersister(persister);
  }, []);

  if (!isPersistor || !persister) {
    return null;
  }

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
      onSuccess={() => {
        queryClient.resumePausedMutations().then(() => {
          queryClient.invalidateQueries();
        });
      }}
    >
      {children}
    </PersistQueryClientProvider>
  );
};
