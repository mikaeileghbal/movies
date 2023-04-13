import ViewSelection from "../components/ViewSelection";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import useMovieDetail from "../hooks/useMovieDetail";
import CircularLoading from "../components/CircularLoading";

export default function Home() {
  const { movie } = useMovieDetail("movie", 76000);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <CircularLoading />
      </div>
      <ViewSelection movie={movie}>
        <ViewSelectionItem routePath={apiEndpoint.movie.trending} />
        <ViewSelectionItem routePath={apiEndpoint.tv.trending} />
      </ViewSelection>
    </>
  );
}

//export default WithFeaturedMovie(Home);
