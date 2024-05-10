import axios from "axios";
import { ImageGalleryProps } from "./ImageGallery/ImageGallery";

const API_KEY = "sTzHrZwYCZYq62k2VGyaagXZgbVGruOpOIMglkYxg8k";

const instance = axios.create({ baseURL: "https://api.unsplash.com" });

export const requestImagesByQuery = async <T>(
  query = "",
  page = 1
): Promise<T> => {
  const link = {
    params: {
      client_id: API_KEY,
      query: query,
      orientation: "landscape",
      page: page,
      per_page: 15,
    },
  };
  const { data } = await instance.get(`/search/photos/`, link);

  return data;
};

export type ImagesResponse = {
  total_pages: number;
  results: ImageGalleryProps[];
};
