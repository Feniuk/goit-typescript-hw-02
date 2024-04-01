import SearchBar from "./components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { requestImagesByQuery } from "./components/fetch-api";
// import ImageCard from "./components/ImageCard/ImageCard";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMassage from "./components/ErrorMassage/ErrorMassage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import toast from "react-hot-toast";

function App() {
  const [images, setImages] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [page, setPage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [moreBtn, setMoreBtn] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await requestImagesByQuery(query, page);
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

  const onSubmitQuery = (searchImage) => {
    setPage(1);
    setImages([]);
    setQuery(searchImage);
  };
  const onOpenModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
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
        <SearchBar onSubmitQuery={onSubmitQuery} />
        {isLoading && <Loader />}
        {isError && <ErrorMassage />}
        {images && images.length > 0 && (
          <ImageGallery items={images} onOpenModal={onOpenModal} />
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
