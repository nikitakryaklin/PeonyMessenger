import { useState } from "react";

interface ISelect {
  id: number;
  userName: string;
}

export function useCreateDialog(type: "chat" | "group") {
  const [select, setSelect] = useState<number | ISelect[]>(
    type === "chat" ? 0 : []
  );

  const selectItem = (select: ISelect) => {
    if (type === "chat") {
      setSelect((prev) => (prev === select.id ? 0 : select.id));
    }
    if (type === "group") {
      setSelect((prev) =>
        Array.isArray(prev)
          ? prev.some((prev) => prev.id === select.id)
            ? prev.filter((prevId) => prevId.id !== select.id)
            : [...prev, select]
          : [select]
      );
    }
  };

  const isSelect = (id: number) => {
    if (type === "chat") {
      return select === id;
    }

    if (type === "group") {
      return Array.isArray(select)
        ? select.some((prev) => prev.id === id)
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
