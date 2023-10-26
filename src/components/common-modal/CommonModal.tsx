import { ModalProps } from "./types";

import Modal from "@mui/material/Modal";

import {
  StyledModal,
  StyledModalContainer,
} from "../../pages/styled-component/HomePageStyles";

function CommonModal(props: ModalProps) {
  const { open, children, onClose } = props;
  return (
    <Modal open={open} onClose={onClose}>
      <StyledModal container>
        <StyledModalContainer container item xs={6}>
          {children}
        </StyledModalContainer>
      </StyledModal>
    </Modal>
  );
}

export default CommonModal;
