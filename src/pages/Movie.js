import React from "react";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import useMovieDetail from "../hooks/useMovieDetail";
import Header from "../components/Header";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { requestMovies } from "../features/movieSlice";

export default function Movie() {
  const { popular, top_rated, upcoming, now_playing } = useSelector(
    (state) => state.movie
  );
  const dispatch = useDispatch();

  dispatch(requestMovies({ listName: "popular", mediaType: "movie" }));
  dispatch(requestMovies({ listName: "top_rated", mediaType: "movie" }));
  dispatch(requestMovies({ listName: "upcoming", mediaType: "movie" }));
  dispatch(requestMovies({ listName: "now_playing", mediaType: "movie" }));

  const { movie } = useMovieDetail("movie", 18500);

  return (
    <>
      <Header movie={movie} />
      <Box component="section" sx={{ paddingLeft: { xs: 0, lg: "100px" } }}>
        <ViewSelectionItem
          routePath={apiEndpoint.movie.popular}
          items={popular}
        />
        <ViewSelectionItem
          routePath={apiEndpoint.movie.top_rated}
          items={top_rated}
        />
        <ViewSelectionItem
          routePath={apiEndpoint.movie.upcoming}
          items={upcoming}
        />
        <ViewSelectionItem
          routePath={apiEndpoint.movie.now_playing}
          items={now_playing}
        />
      </Box>
    </>
  );
}

//export default WithFeaturedMovie(Movie);
