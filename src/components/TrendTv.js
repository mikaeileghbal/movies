import React from "react";
import apiEndpoint from "../utils/apiEndpoints";
import Listing from "./Listing";

export default function TrendTv() {
  const heading = "trending tv";

  return (
    <Listing
      moviesUrl={apiEndpoint[heading]}
      exploreUrl="/movie/category/trending"
      heading={heading}
    />
  );
}
