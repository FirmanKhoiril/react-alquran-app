import "./App.css";
import { Box, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Filter, Home, QuranSelected } from "./pages";
import { Footer, Navbar } from "./layout";

function App() {
  return (
    <Box sx={{ bgcolor: "#27272a", color: "whitesmoke", position: "relative", minHeight: "100vh" }} className="font-body">
      <Container>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" index element={<Home />} />
            <Route path="/search" element={<Filter />} />

            <Route path="/search/:id" element={<QuranSelected />} />
          </Route>
        </Routes>
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
