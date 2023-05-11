export type TSurat = {
  nomor: string;
  surat: string;
};

export interface IIndexOfSurat {
  surat: {
    id: number;
    ["translation_eng"]: string;
    content: string;
    transliteration: string;
  };
}
export type TIndexOfSurat = {
  id: number;
  ["translation_eng"]: string;
  content: string;
  transliteration: string;
};