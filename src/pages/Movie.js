import React from "react";
import ViewSelection from "../components/ViewSelection";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import useMovieDetail from "../hooks/useMovieDetail";
import Header from "../components/Header";
import { Box } from "@mui/material";

export default function Movie() {
  return (
    <>
      <Header />
      <Box component="section" sx={{ paddingLeft: { xs: 0, lg: "100px" } }}>
        <ViewSelectionItem routePath={apiEndpoint.movie.popular} />
        <ViewSelectionItem routePath={apiEndpoint.movie.top_rated} />
        <ViewSelectionItem routePath={apiEndpoint.movie.upcoming} />
        <ViewSelectionItem routePath={apiEndpoint.movie.now_playing} />
      </Box>
    </>
  );
}

//export default WithFeaturedMovie(Movie);
