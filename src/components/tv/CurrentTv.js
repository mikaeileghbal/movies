import React from "react";
import apiEndpoint from "../../utils/apiEndpoints";
import Listing from "../Listing";

export default function CurrentTv() {
  const heading = "currently airing tv shows";

  return (
    <Listing
      moviesUrl={apiEndpoint[heading]}
      exploreUrl="/tv/category/currently_airing"
      heading={heading}
    />
  );
}
