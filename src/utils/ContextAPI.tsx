import { useState, createContext, useContext } from "react";

const StateContext = createContext({});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toogle, setToogle] = useState<boolean>(false);
  const [verse, setVerse] = useState<object>({});
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [indexSurat, setIndexSurat] = useState<number>(1);
  return <StateContext.Provider value={{ toogle, verse, searchTerm, indexSurat, setVerse, setToogle, setIndexSurat, setSearchTerm }}>{children}</StateContext.Provider>;
};

export const useGlobalContext: any = () => useContext(StateContext);
