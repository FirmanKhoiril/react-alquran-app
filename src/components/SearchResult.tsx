import { Box, Typography } from "@mui/material";
import { surat } from "../utils/DummyData";
import { ISurat } from "../types/Types";

const SearchResult = () => {
  return (
    <Box>
      {surat?.map((surah: ISurat) => (
        <Box key={surah.nomor} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h5">{surah.surat}</Typography>
          <Typography variant="body2">({surah.arti})</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SearchResult;
