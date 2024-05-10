import styles from "./ImageCard.module.css";
import { ImageDescription } from "../../App";

interface ImageCardProp {
  image: {
    id: string;
    alt_description: string;
    urls: {
      small: string;
      regular: string;
    };
  };
  onOpenModal: (arg0: boolean, arg1: ImageDescription) => void;
}

export const ImageCard: React.FC<ImageCardProp> = ({ image, onOpenModal }) => {
  return (
    <div className={styles.imgContainer}>
      <img
        className={styles.image}
        src={image.urls.small}
        alt={image.alt_description}
        data-id={image.id}
        onClick={() =>
          onOpenModal(true, {
            id: image.id,
            src: image.urls.regular,
            description: image.alt_description,
            alt: image.alt_description,
          })
        }
      />
    </div>
  );
};

export default ImageCard;
