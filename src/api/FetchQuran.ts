import axios from "axios";

const BASE_URL = "https://al-quran1.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "al-quran1.p.rapidapi.com",
  },
};

export const fetchQuran = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
