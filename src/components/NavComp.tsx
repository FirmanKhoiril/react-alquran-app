import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { FcHome, FcSearch } from "react-icons/fc";
import { useGlobalContext } from "../utils/ContextAPI";

const NavComp = () => {
  const { setToogle, toogle } = useGlobalContext();

  const handleChange = () => {
    setToogle((prev: boolean) => !prev);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
      <Link to="/">
        <Typography variant="h4" sx={{ letterSpacing: "0.10rem" }}>
          <span className="logo">AlQur'an</span>
        </Typography>
      </Link>

      <Box>
        <Box onClick={handleChange} sx={{ p: 1, cursor: "pointer" }} className="bg-white/10 hover:bg-white/20">
          <BiMenu className="relative text-2xl " />
        </Box>
        {toogle && (
          <Box sx={{ position: "absolute", top: 48, p: 1, right: 20, display: "flex", flexDirection: "column", my: 2, gap: 2 }} className=" rounded-md border-b bg-zinc-50">
            <Link to="/" onClick={handleChange} className="link__hover border-b">
              <FcHome className="text-lg" /> <span>Home</span>
            </Link>
            <Link to="/search" onClick={handleChange} className="link__hover">
              <FcSearch className="text-lg" /> <span>Search</span>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default NavComp;
