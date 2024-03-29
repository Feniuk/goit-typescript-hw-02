import axios from "axios";

const API_KEY = "sTzHrZwYCZYq62k2VGyaagXZgbVGruOpOIMglkYxg8k";

const instance = axios.create({ baseURL: "https://api.unsplash.com" });

export const requestImagesByQuery = async (query = "", page) => {
  const link = {
    params: {
      client_id: API_KEY,
      query: query,
      orientation: "landscape",
      page: page,
      per_page: 16,
    },
  };
  const { data } = await instance.get(`/search/photos/`, link);

  return data;
};
