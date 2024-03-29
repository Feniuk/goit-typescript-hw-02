import SearchBar from "./components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
// import { requestImagesByQuery } from "./components/fetch-api";
// import ImageCard from "./components/ImageCard/ImageCard";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMassage from "./components/ErrorMassage/ErrorMassage";

function App() {
  const { images, setImages } = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        setIsLoading(true);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  // const onOpenModal = (id) => {
  //   setSelectedImage(images.find((item) => item.id === id));
  //   openModal();
  // };

  return (
    <>
      <div>
        <SearchBar />
        {isLoading && <Loader />}
        {isError && <ErrorMassage />}
        <ImageGallery items={images} />
      </div>
    </>
  );
}

export default App;
