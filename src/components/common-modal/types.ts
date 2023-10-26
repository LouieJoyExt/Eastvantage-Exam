import type { ReactNode } from "react";

type ModalType = "default" | "success";

export interface ModalProps {
  open: boolean;
  children?: ReactNode;
  onClose?: () => void;
  modalType?: ModalType;
}
