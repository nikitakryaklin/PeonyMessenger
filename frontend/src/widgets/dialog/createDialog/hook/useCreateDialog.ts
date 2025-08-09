import { useState } from "react";

export function useCreateDialog(type: "chat" | "group") {
  const [select, setSelect] = useState<number | number[]>(
    type === "chat" ? 0 : []
  );

  const selectItem = (id: number) => {
    if (type === "chat") {
      setSelect((prev) => (prev === id ? 0 : id));
    }
    if (type === "group") {
      setSelect((prev) =>
        Array.isArray(prev)
          ? prev.includes(id)
            ? prev.filter((prevId) => prevId !== id)
            : [...prev, id]
          : [prev, id]
      );
    }
  };

  const isSelect = (id: number) => {
    if (type === "chat") {
      return select === id;
    }

    if (type === "group") {
      return Array.isArray(select)
        ? select.includes(id)
          ? true
          : false
        : false;
    }
  };

  const disabledButton = Array.isArray(select)
    ? select.length === 0
      ? true
      : false
    : select === 0
    ? true
    : false;

  const buttonText = (title: string) =>
    disabledButton ? "Choose the user" : "Start " + title;

  return {
    select: {
      select: select,
      selectItem: selectItem,
      isSelect: isSelect,
    },
    button: {
      disabled: disabledButton,
      buttonText: buttonText,
    },
  };
}
