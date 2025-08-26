"use client";

import { useEffect } from "react";

export const usePreview = (
  file: FileList | undefined | null,
  setPreview: (url: string | null) => void
) => {
  useEffect(() => {
    if (!file || file.length === 0) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(file[0]);

    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);
};
