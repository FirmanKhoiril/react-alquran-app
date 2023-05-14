import { Outlet } from "react-router-dom";
import { NavComp } from "../components";
import { Box } from "@mui/material";
const Navbar = () => {
  return (
    <>
      <Box sx={{ position: "sticky", top: 0, bgcolor: "#27272a", zIndex: 30 }}>
        <NavComp />
      </Box>

      <Outlet />
    </>
  );
};

export default Navbar;
