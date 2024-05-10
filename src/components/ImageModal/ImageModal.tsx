import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { ImageDescription } from "../../App";

interface ImageModalProp {
  isOpen: boolean;
  image: { src: string; alt: string };

  onCloseModal: (arg0: boolean, arg1: ImageDescription) => void;
}

Modal.setAppElement("#root");

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const ImageModal: React.FC<ImageModalProp> = ({
  isOpen,
  image,
  onCloseModal,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      className={styles.modal}
      contentLabel="Image Modal"
      style={modalStyles}
    >
      <div className={styles.div}>
        <img className={styles.img} src={image.src} alt={image.alt} />
      </div>
    </Modal>
  );
};

export default ImageModal;
