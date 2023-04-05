import ViewSelection from "../components/ViewSelection";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import WithFeaturedMovie from "../hoc/withFeaturedMovie";

function Home() {
  return (
    <ViewSelection>
      <ViewSelectionItem routePath={apiEndpoint.movie.trending} />
      <ViewSelectionItem routePath={apiEndpoint.tv.trending} />
    </ViewSelection>
  );
}

export default WithFeaturedMovie(Home);
