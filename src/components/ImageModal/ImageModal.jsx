import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const ImageModal = ({ isOpen, image, onCloseModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      className={styles.modal}
      contentLabel="Image Modal"
      styles={modalStyles}
    >
      <div className={styles.div}>
        <img
          className={styles.img}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
