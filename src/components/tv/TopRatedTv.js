import React from "react";
import apiEndpoint from "../../utils/apiEndpoints";
import Listing from "../Listing";

export default function TopRatedTv() {
  const heading = "top rated tv shows";

  return (
    <Listing
      moviesUrl={apiEndpoint[heading]}
      exploreUrl="/tv/category/toprated"
      heading={heading}
    />
  );
}
