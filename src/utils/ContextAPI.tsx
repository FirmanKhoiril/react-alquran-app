import { useState, createContext, useContext } from "react";
import { TContextProps } from "../types/Types";

const StateContext = createContext<TContextProps>({
  toogle: false,
  verse: {},
  searchTerm: "",
  indexSurat: 1,
  verseDetail: {},
  setVerseDetail: () => {},
  setVerse: () => {},
  setToogle: () => {},
  setIndexSurat: () => {},
  setSearchTerm: () => {},
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toogle, setToogle] = useState<boolean>(false);
  const [verse, setVerse] = useState<object>({});
  const [verseDetail, setVerseDetail] = useState<object>({});
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [indexSurat, setIndexSurat] = useState<number>(1);
  return <StateContext.Provider value={{ toogle, verse, searchTerm, indexSurat, verseDetail, setVerseDetail, setVerse, setToogle, setIndexSurat, setSearchTerm }}>{children}</StateContext.Provider>;
};

export const useGlobalContext = (): TContextProps => useContext(StateContext);
