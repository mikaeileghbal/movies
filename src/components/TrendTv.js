import React, { useEffect, useState } from "react";
import useResize from "../hooks/useResize";
import renderMovie from "../utils/renderMovie";
import Carousel from "./Carousel";

export default function TrendTv() {
  const [movies, setMovies] = useState([]);

  const { groupSize } = useResize();

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/trending/tv/day?api_key=3e35d5ea16674bcc971aee7ed10f0919"
      );
      const result = await res.json();

      console.log(result.results);
      setMovies(result.results);
    };

    getMovies();
  }, []);

  return (
    <Carousel
      items={movies}
      heading="Trending TV Shows"
      url="/tv/category/trending"
      render={renderMovie}
      groupSize={groupSize}
    />
  );
}
