import React from "react";
import { Box } from "@mui/system";
import Footer from "./Footer";
import Header from "./Header";
import useMovieFeatured from "../hooks/useMovieFeatured";

export default function ViewSelection({ children }) {
  const { movie } = useMovieFeatured();

  return (
    <Box
      sx={{
        paddingLeft: { xs: 0, lg: "100px" },
        position: "absolute",
        width: "100%",
      }}
    >
      <Header movie={movie} />
      <Box component="main" pl={7} mt={7}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
