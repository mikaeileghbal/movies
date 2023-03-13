import React from "react";
import apiEndpoint from "../../utils/apiEndpoints";
import Listing from "../Listing";

export default function UpComing() {
  const heading = "upcoming movies";

  return (
    <Listing
      moviesUrl={apiEndpoint[heading]}
      exploreUrl="/movie/category/upcoming"
      heading={heading}
    />
  );
}
