import React from "react";
import Listing from "./Listing";

export default function ViewSelectionItem({ routePath }) {
  const { url, title, exploreUrl } = routePath;

  return <Listing moviesUrl={url} exploreUrl={exploreUrl} heading={title} />;
}
