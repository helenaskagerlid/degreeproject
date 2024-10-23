import axios from "axios";
import { IPixabayResponse } from "../models/IPixabayResponse";

const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo`;

export const getPhotos = async (): Promise<IPixabayResponse[]> => {
  const response = await axios.get(`${BASE_URL}`);

  console.log("Svaret från APIet", response.data);

  return response.data;
};
