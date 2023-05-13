import { Box, Typography } from "@mui/material";
import { IIndexOfSurat } from "../types/Types";

const Surat = ({ surat }: IIndexOfSurat) => {
  return (
    <Box sx={{ minHeight: 104, display: "flex", flexDirection: "column", borderBottom: 1, borderColor: "#3f3f46", gap: 2, py: 2 }}>
      <Typography variant="h5">Ayat {Math.floor(surat.id)}</Typography>
      <Typography variant="h4">{surat.content}</Typography>
      <Typography variant="h5" sx={{ color: "#cbd5e1" }}>
        {surat.transliteration}
      </Typography>
      <Typography variant="h5" sx={{ color: "#a1a1aa" }}>
        <span className="font-primary"> {surat.translation_eng}</span>
      </Typography>
    </Box>
  );
};

export default Surat;
