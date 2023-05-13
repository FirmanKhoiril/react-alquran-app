import { Box } from "@mui/material";
import { SearchBar, SearchResult } from "../components";

const Filter = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <SearchBar />
      <SearchResult />
    </Box>
  );
};

export default Filter;
