import React from "react";
import ViewSelection from "../components/ViewSelection";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import useMovieDetail from "../hooks/useMovieDetail";

export default function Movie() {
  const { movie } = useMovieDetail("movie", 86025);
  return (
    <ViewSelection movie={movie}>
      <ViewSelectionItem routePath={apiEndpoint.movie.popular} />
      <ViewSelectionItem routePath={apiEndpoint.movie.top_rated} />
      <ViewSelectionItem routePath={apiEndpoint.movie.upcoming} />
      <ViewSelectionItem routePath={apiEndpoint.movie.now_playing} />
    </ViewSelection>
  );
}

//export default WithFeaturedMovie(Movie);
