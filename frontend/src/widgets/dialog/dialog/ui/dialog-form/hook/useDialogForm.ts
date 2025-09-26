"use client";

import { useEffect, useState } from "react";
import { TFormStatus } from "../model/dialog-form-interface";

export const useDialogForm = () => {
  const [photoURL, setPhotoURL] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<TFormStatus>("idle");

  const setFormIdleStatus = () => {
    setFormStatus("idle");
  };

  useEffect(() => {
    if (photoURL) {
      setFormStatus("photo");
    }
  }, [photoURL]);

  return {
    photoURL,
    formStatus,
    setPhotoURL,
    setFormStatus,
    setFormIdleStatus,
  };
};
