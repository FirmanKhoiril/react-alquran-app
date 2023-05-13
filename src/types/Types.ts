export interface IIndexOfSurat {
  surat: {
    id: number;
    translation_eng: string;
    content: string;
    transliteration: string;
  };
}
export type TIndexOfSurat = {
  id: number;
  translation_eng: string;
  content: string;
  transliteration: string;
};

export type ISurat = {
  nomor: number;
  surat: string;
  arti: string;
  sejarah: string;
};

export type TVerses = {
  name: string;
  value: Object | any;
};

export type TContextProps = {
  toogle: boolean;
  verse: object;
  searchTerm: string;
  indexSurat: number;
  verseDetail: object | any;
  setVerseDetail: React.Dispatch<React.SetStateAction<object | any>>;
  setVerse: React.Dispatch<React.SetStateAction<object>>;
  setToogle: React.Dispatch<React.SetStateAction<boolean>>;
  setIndexSurat: React.Dispatch<React.SetStateAction<number>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export interface IOptions {
  headers: {
    ["X-RapidAPI-Key"]: string;
    ["X-RapidAPI-Host"]: string;
  };
}

export type TSurah = {
  id: string;
  surah_name: string;
  surah_name_ar: string;
  translation: string;
  type: string;
  total_verses: number;
  description: string;
  verses: TIndexOfSurat;
};
