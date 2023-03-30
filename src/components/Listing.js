import { useEffect, useMemo, useState } from "react";
import useResize from "../hooks/useResize";
import renderMovie from "../utils/renderMovie";
import Carousel from "./Carousel";
import Loading from "./Loading";

export default function Listing({ moviesUrl, exploreUrl, heading }) {
  //const { groupSize } = useResize();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const memoMovieUrl = useMemo(() => moviesUrl, [moviesUrl]);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const res = await fetch(memoMovieUrl);
        const result = await res.json();
        setLoading(false);
        setMovies(result.results);
      } catch (err) {
        setLoading(false);
      }
    };
    getMovies();
  }, [memoMovieUrl]);

  if (loading) return <Loading />;

  return (
    <Carousel
      items={movies}
      heading={heading}
      url={exploreUrl}
      render={renderMovie}
      groupSize={5}
    />
  );
}
