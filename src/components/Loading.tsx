import { Box } from "@mui/material";
import { Watch } from "react-loader-spinner";

const Loading = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Watch height="90" width="90" radius="48" color="#fde68a" ariaLabel="watch-loading" visible={true} />
    </Box>
  );
};

export default Loading;
