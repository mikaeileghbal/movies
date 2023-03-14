import React from "react";
import apiEndpoint from "../../utils/apiEndpoints";
import Listing from "../Listing";

export default function TodayTv() {
  const heading = "tv shows airing today";

  return (
    <Listing
      moviesUrl={apiEndpoint[heading]}
      exploreUrl="/tv/category/today"
      heading={heading}
    />
  );
}
