import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ minHeight: 200, display: "flex", justifyContent: "space-around", flexDirection: { xs: "column", md: "row", overflow: "hidden" } }}>
      <Typography sx={{ width: 600 }}>
        @Copyright All Rights Reserved. <span className=" text-primary">Firman.K.R</span>
      </Typography>
      <Typography>
        <span className=" text-white/50 cursor-default text-[13px]">
          {" "}
          Saya menggunakan layanan pihak ketiga untuk menyediakan fitur tertentu pada situs web kami. Dalam penggunaan layanan ini, kami tidak dapat mengontrol segala jenis informasi yang dikumpulkan oleh pihak ketiga/API.
        </span>
      </Typography>
    </Box>
  );
};

export default Footer;
