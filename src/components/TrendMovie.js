import Listing from "./Listing";
import apiEndpoint from "../utils/apiEndpoints";

export default function TrendMovie() {
  const heading = "trending movies";

  return (
    <Listing
      moviesUrl={apiEndpoint[heading]}
      exploreUrl="/movie/category/trending"
      heading={heading}
    />
  );
}
