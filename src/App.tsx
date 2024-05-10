import SearchBar from "./components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { ImagesResponse, requestImagesByQuery } from "./components/API";
// import ImageCard from "./components/ImageCard/ImageCard";
import ImageGallery, {
  ImageGalleryProps,
} from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMassage from "./components/ErrorMassage/ErrorMassage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import toast from "react-hot-toast";

export type ImageDescription = {
  src: string;
  description: string;
  id: string;
  alt: string;
};

function App() {
  const [images, setImages] = useState<ImageGalleryProps[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [moreBtn, setMoreBtn] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalImage, setModalImage] = useState<null | ImageDescription>(null);

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await requestImagesByQuery<ImagesResponse>(
          query,
          page
        );
        setTotalPages(response.total_pages);

        if (response.results.length > 0) {
          setImages((prevImages) => [...prevImages, ...response.results]);
          setMoreBtn(true);
        } else {
          toast.error("No images found!");
          setMoreBtn(false);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const onSubmitQuery = (searchImage: string) => {
    if (!searchImage.trim()) {
      toast.error("Please enter a search query!");
      setIsError(true);
      return;
    }
    setPage(1);
    setImages([]);
    setQuery(searchImage);
  };
  const onOpenModal = (arg0: boolean, image: ImageDescription) => {
    setModalImage(image);
    setIsModalOpen(arg0);
  };

  const onCloseModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div>
        <SearchBar onSubmitQuery={onSubmitQuery} isLoading={isLoading} />
        {isLoading && <Loader />}
        {isError && <ErrorMassage />}
        {images && images.length > 0 && (
          <ImageGallery images={images} onOpenModal={onOpenModal} />
        )}
        {totalPages > page && !isLoading && !isError && (
          <LoadMoreBtn loadMore={loadMore}>Load More</LoadMoreBtn>
        )}
        {modalImage && (
          <ImageModal
            image={modalImage}
            isOpen={isModalOpen}
            onCloseModal={onCloseModal}
          />
        )}
      </div>
    </>
  );
}

export default App;
