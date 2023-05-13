import axios, { AxiosResponse } from "axios";
import { IOptions } from "../types/Types";

const BASE_URL: string = "https://text-to-speech27.p.rapidapi.com";
const options: IOptions = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY_VOICE,
    "X-RapidAPI-Host": "text-to-speech27.p.rapidapi.com",
  },
};

export const fetchVoice = async (url: string): Promise<AxiosResponse<any>> => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
