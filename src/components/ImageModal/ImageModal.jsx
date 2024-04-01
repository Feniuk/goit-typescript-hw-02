import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: 0, // Убираем внутренний отступ, чтобы изображение занимало всю доступную область модального окна
    border: "none", // Убираем границу, чтобы модальное окно выглядело безрамочным
    backgroundColor: "transparent", // Прозрачный фон модального окна
  },
  overlay: {
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
      style={modalStyles} // Заменили "styles" на "style"
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
