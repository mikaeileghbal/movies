import React from "react";
import ViewSelection from "../components/ViewSelection";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import WithFeaturedMovie from "../hoc/withFeaturedMovie";

function Tv() {
  return (
    <ViewSelection>
      <ViewSelectionItem routePath={apiEndpoint.tv.popular} />
      <ViewSelectionItem routePath={apiEndpoint.tv.top_rated} />
      <ViewSelectionItem routePath={apiEndpoint.tv.on_the_air} />
      <ViewSelectionItem routePath={apiEndpoint.tv.airing_today} />
    </ViewSelection>
  );
}

export default WithFeaturedMovie(Tv);
