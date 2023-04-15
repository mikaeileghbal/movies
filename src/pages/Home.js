import ViewSelection from "../components/ViewSelection";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import useMovieDetail from "../hooks/useMovieDetail";

export default function Home() {
  const { movie } = useMovieDetail("movie", 76000);

  return (
    <ViewSelection movie={movie}>
      <ViewSelectionItem routePath={apiEndpoint.movie.trending} />
      <ViewSelectionItem routePath={apiEndpoint.tv.trending} />
    </ViewSelection>
  );
}

//export default WithFeaturedMovie(Home);
