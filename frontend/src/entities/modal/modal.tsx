import { ReactNode, SyntheticEvent } from "react";
import { createPortal } from "react-dom";

export const Modal = ({
  children,
  isOpen,
  onClose,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    return null;
  }

  if (!isOpen) {
    return null;
  }

  const modalClose = (e: SyntheticEvent) => {
    const target = e.target as HTMLDivElement;
    if (!target.dataset.type) {
      return null;
    }
    onClose();
  };

  return createPortal(
    <div
      onClick={modalClose}
      data-type="modal"
      className="fixed bg-black/20 inset-0 flex justify-center pt-72"
    >
      {children}
    </div>,
    modalRoot
  );
};
