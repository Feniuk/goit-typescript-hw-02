import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className={styles.gallery}>
      {Array.isArray(images) &&
        images.map((image) => (
          <li
            className={styles.item}
            key={image.id}
            onClick={() => onOpenModal(image)}
          >
            <ImageCard image={image} />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
