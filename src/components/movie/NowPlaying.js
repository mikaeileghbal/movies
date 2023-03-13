import React from "react";
import apiEndpoint from "../../utils/apiEndpoints";
import Listing from "../Listing";

export default function NowPlaying() {
  const heading = "now playing movies";

  return (
    <Listing
      moviesUrl={apiEndpoint[heading]}
      exploreUrl="/movie/category/now_playing"
      heading={heading}
    />
  );
}
