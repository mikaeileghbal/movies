import MovieCard from "../components/MovieCard";

export default function renderMovie(item) {
  if (!item) return null;
  return <MovieCard item={item} />;
}
