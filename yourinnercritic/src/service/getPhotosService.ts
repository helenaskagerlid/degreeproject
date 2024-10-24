import axios from "axios";
import { IHits, IPixabayResponse } from "../models/IPixabayResponse";

const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}`;

export const getPhotos = async (searchText: string): Promise<IHits[]> => {
  try {
    const response = await axios.get<IPixabayResponse>(
      `${BASE_URL}&q=${searchText}&image_type=photo`
    );
    console.log("Svaret från APIet", response.data.hits);

    return response.data.hits;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error", error.message);
      console.error("Response data:", error.response?.data);
      return [];
    } else {
      console.error("Could not fetch the data");
    }
    throw error;
  }
};
