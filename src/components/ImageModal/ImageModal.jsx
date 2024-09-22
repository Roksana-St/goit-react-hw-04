import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root'); 

const ImageModal = ({ isOpen, onRequestClose, imageUrl, alt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={alt} className={styles.image} />
      </div>
    </Modal>
  );
};

export default ImageModal;
