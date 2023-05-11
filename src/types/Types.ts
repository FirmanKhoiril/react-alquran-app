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

export type ISurat = {
  nomor: number;
  surat: string;
  arti: string;
};
