import { Box, Typography } from "@mui/material";
import { surat } from "../utils/DummyData";
import { ISurat } from "../types/Types";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useGlobalContext } from "../utils/ContextAPI";

const SearchResult = () => {
  const { searchTerm } = useGlobalContext();

  const filteredData = useMemo(() => {
    return surat.filter((item) => {
      return item.surat.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [surat, searchTerm]);

  return (
    <Box>
      {filteredData.map((surah: ISurat) => (
        <Link to={`/search/${surah.nomor}`} key={surah.nomor}>
          <Box sx={{ display: "flex", gap: 2, minHeight: 120, flexDirection: "column", my: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="inherit" color="#94a3b8">
                {surah.nomor}. )
              </Typography>
              <Typography variant="h5">
                <span className=" font-primary">{surah.surat}</span>
              </Typography>
              <Typography variant="body2" color="#cbd5e1">
                ( {surah.arti} )
              </Typography>
            </Box>
            <Typography variant="subtitle2" color="#e5e5e5">
              {surah.sejarah}
            </Typography>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default SearchResult;
