import styles from "./ImageCard.module.css";

export const ImageCard = ({ image, onOpenModal }) => {
  return (
    <div className={styles.imgContainer}>
      <img
        className={styles.image}
        src={image.urls.small}
        alt={image.alt_description}
        data-id={image.id}
        onClick={() => onOpenModal(image.id)}
      />
    </div>
  );
};

export default ImageCard;
