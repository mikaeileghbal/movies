import React from "react";
import { Box } from "@mui/system";
import Footer from "./Footer";
import Header from "./Header";
import useMovieFeatured from "../hooks/useMovieFeatured";

export default function ViewSelection({ children }) {
  const { movie } = useMovieFeatured();

  return (
    <Box
      component="main"
      sx={{ marginLeft: { xs: 0, lg: "100px" }, position: "absolute" }}
    >
      <Header movie={movie} />
      <Box component="main" pl={7}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
