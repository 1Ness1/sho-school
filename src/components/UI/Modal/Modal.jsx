import React from "react";
import ModalFree from "./ModalFree/ModalFree";
import ModalOrder from "./ModalOrder/ModalOrder";
// import PropTypes from 'prop-types';

const Modal = ({ modalFree, modalOrder, showFreeModal, showModalOrder }) => {
  return (
    <>
      <ModalFree
        modalTitle={
          "Заповніть форму і переконайтеся, що англійська - це легко!"
        }
        modalFree={modalFree}
        showFreeModal={showFreeModal}
      />
      <ModalOrder modalOrder={modalOrder} showModalOrder={showModalOrder} />
    </>
  );
};

// ModalFree.propTypes = {};

export default Modal;
