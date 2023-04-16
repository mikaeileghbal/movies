import React from "react";
import ViewSelection from "../components/ViewSelection";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";

import useMovieDetail from "../hooks/useMovieDetail";
import Header from "../components/Header";

export default function Tv() {
  const { movie } = useMovieDetail("tv", 7500);
  return (
    <>
      
      <ViewSelectionItem routePath={apiEndpoint.tv.popular} />
      <ViewSelectionItem routePath={apiEndpoint.tv.top_rated} />
      <ViewSelectionItem routePath={apiEndpoint.tv.on_the_air} />
      <ViewSelectionItem routePath={apiEndpoint.tv.airing_today} />
    </>
  );
}
