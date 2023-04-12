import ViewSelection from "../components/ViewSelection";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import useMovieFeatured from "../hooks/useMovieFeatured";
import useMovieDetail from "../hooks/useMovieDetail";
import { useEffect, useState } from "react";

export default function Home() {
  const { movie } = useMovieFeatured();

  return (
    <ViewSelection movie={movie}>
      <ViewSelectionItem routePath={apiEndpoint.movie.trending} />
      <ViewSelectionItem routePath={apiEndpoint.tv.trending} />
    </ViewSelection>
  );
}
