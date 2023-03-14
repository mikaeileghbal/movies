import React from "react";
import apiEndpoint from "../../utils/apiEndpoints";
import Listing from "../Listing";

export default function PopularTv() {
  const heading = "popular tv shows";

  return (
    <Listing
      moviesUrl={apiEndpoint[heading]}
      exploreUrl="/tv/category/popular"
      heading={heading}
    />
  );
}
