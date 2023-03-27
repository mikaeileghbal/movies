import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Footer from "./Footer";
import Header from "./Header";

export default function ViewSelection({ children }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/500?api_key=3e35d5ea16674bcc971aee7ed10f0919"
      );
      const result = await res.json();

      console.log(result);
      setMovie(result);
    };

    getMovies();
  }, []);

  return (
    <Box
      component="main"
      pl={7}
      sx={{ marginLeft: { xs: 0, lg: "100px" }, position: "absolute" }}
    >
      <Header movie={movie} />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
