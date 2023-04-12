import ViewSelection from "../components/ViewSelection";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import useMovieFeatured from "../hooks/useMovieFeatured";
import useMovieDetail from "../hooks/useMovieDetail";

const mediaType = {
  1: "movie",
  2: "tv",
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Home() {
  console.log("home is rendered");
  const type = mediaType[random(1, 2)];
  const id = random(1, type === "movie" ? 999000 : 85000);

  const { movie } = useMovieDetail(type, id);

  return (
    <ViewSelection movie={movie}>
      <ViewSelectionItem routePath={apiEndpoint.movie.trending} />
      <ViewSelectionItem routePath={apiEndpoint.tv.trending} />
    </ViewSelection>
  );
}
