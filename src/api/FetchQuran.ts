import axios from "axios";
import { IOptions, TSurah } from "../types/Types";

const BASE_URL: string = "https://al-quran1.p.rapidapi.com";

const options: IOptions = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "al-quran1.p.rapidapi.com",
  },
};

export const fetchQuran = async (url: string): Promise<TSurah> => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
