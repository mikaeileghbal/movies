import { useEffect, useMemo, useState } from "react";
import useResize from "../hooks/useResize";
import renderMovie from "../utils/renderMovie";
import Carousel from "./Carousel";

export default function Listing({ moviesUrl, exploreUrl, heading }) {
  const { groupSize } = useResize();
  const [movies, setMovies] = useState([]);

  const memoMovieUrl = useMemo(() => moviesUrl, [moviesUrl]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(memoMovieUrl);
      const result = await res.json();

      setMovies(result.results);
    };
    getMovies();
  }, [memoMovieUrl]);

  return (
    <Carousel
      items={movies}
      heading={heading}
      url={exploreUrl}
      render={renderMovie}
      groupSize={groupSize}
    />
  );
}
