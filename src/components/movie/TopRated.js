import React from "react";
import apiEndpoint from "../../utils/apiEndpoints";
import Listing from "../Listing";

export default function TopRated() {
  const heading = "top rated movies";

  return (
    <Listing
      moviesUrl={apiEndpoint[heading]}
      exploreUrl="/movie/category/toprated"
      heading={heading}
    />
  );
}
