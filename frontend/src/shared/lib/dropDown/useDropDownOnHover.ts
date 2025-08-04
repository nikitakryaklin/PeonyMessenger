"use client";

import { useRef, useState } from "react";

export const useDropDownOnHover = () => {
  const [isOpen, setIsOpen] = useState(false);

  let timeOut = useRef<NodeJS.Timeout | null>(null);

  const onClose = () => {
    timeOut.current = null;
    if (isOpen === true) {
      timeOut.current = setTimeout(() => {
        setIsOpen(false);
      }, 400);
    }
  };

  const onOpen = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    if (isOpen === false) {
      timeOut.current = setTimeout(() => {
        setIsOpen(true);
      }, 200);
    }
  };

  return { onClose, onOpen, isOpen };
};
