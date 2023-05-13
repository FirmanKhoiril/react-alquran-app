import { Box, Typography } from "@mui/material";
import Read from "../images/read.svg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: 500, my: 10, display: "flex", flexDirection: { xs: "column", lg: "row-reverse" }, justifyContent: "space-around", alignItems: "center", gap: 10 }}>
      <img loading="lazy" className=" max-h-[320px]" src={Read} alt="read AlQuran" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1, sm: 2 } }}>
        <Typography variant="h4">
          <span className=" text-[40px] sm:text-[57px] font-bold tracking-wide cursor-default">Mengenal diri sendiri melalui belajar membaca Al-Quran.</span>
        </Typography>
        <Typography variant="h5">
          <span className=" font-primary text-xl">Mulailah perjalanan Anda untuk mempelajari Al-Quran sekarang!</span>
        </Typography>
        <Box component="span" onClick={() => navigate("/search")} sx={{ mt: 1 }}>
          <button type="button" className="sm:px-7 px-10 rounded-lg py-3 sm:ml-0 text-black bg-[#fde68a] font-semibold tracking-wider hover:bg-opacity-80 transition duration-200">
            Explore
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
