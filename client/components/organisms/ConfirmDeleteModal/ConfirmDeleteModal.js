import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bulma-companion/lib/Modal';

import ConfirmDelete from '_components/organisms/ConfirmDelete';

export default function ConfirmDeleteModal({ confirm, closeModal, deleteFunction }) {
  return (
    <Modal className="confirm-modal" active={confirm}>
      <Modal.Background />
      <Modal.Content>
        <ConfirmDelete closeModal={closeModal} deleteFunction={deleteFunction} />
      </Modal.Content>
      <Modal.Close size="large" aria-label="close" onClick={closeModal} />
    </Modal>
  );
}

ConfirmDeleteModal.propTypes = {
  confirm: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};
