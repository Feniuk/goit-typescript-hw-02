import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import { ImageDescription } from "../../App";

export type ImageGalleryProps = {
  id: string;
  alt_description: string;

  urls: {
    small: string;
    regular: string;
  };
};
interface ImageGalleryProp {
  images: ImageGalleryProps[];
  onOpenModal: (arg0: boolean, arg1: ImageDescription) => void;
}

const ImageGallery: React.FC<ImageGalleryProp> = ({ images, onOpenModal }) => {
  return (
    <ul className={styles.gallery}>
      {Array.isArray(images) &&
        images.map((image) => (
          <li
            className={styles.item}
            key={image.id}
            onClick={() =>
              onOpenModal(true, {
                id: image.id,
                src: image.urls.regular,
                description: image.alt_description,
                alt: image.alt_description,
              })
            }
          >
            <ImageCard image={image} onOpenModal={onOpenModal} />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
