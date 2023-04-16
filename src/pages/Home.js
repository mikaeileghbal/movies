import Header from "../components/Header";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";

export default function Home() {
  return (
    <>
      
      <ViewSelectionItem routePath={apiEndpoint.movie.trending} />
      <ViewSelectionItem routePath={apiEndpoint.tv.trending} />
    </>
  );
}

//export default WithFeaturedMovie(Home);
