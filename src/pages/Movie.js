import React from "react";
import ViewSelection from "../components/ViewSelection";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import WithFeaturedMovie from "../hoc/withFeaturedMovie";

function Movie() {
  return (
    <ViewSelection>
      <ViewSelectionItem routePath={apiEndpoint.movie.popular} />
      <ViewSelectionItem routePath={apiEndpoint.movie.top_rated} />
      <ViewSelectionItem routePath={apiEndpoint.movie.upcoming} />
      <ViewSelectionItem routePath={apiEndpoint.movie.now_playing} />
    </ViewSelection>
  );
}

export default WithFeaturedMovie(Movie);
