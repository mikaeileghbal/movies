import React, { useEffect, useState } from "react";
import useResize from "../../hooks/useResize";
import renderMovie from "../../utils/renderMovie";
import Carousel from "../Carousel";

export default function Popular() {
  const [movies, setMovies] = useState([]);
  const { groupSize } = useResize();

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=3e35d5ea16674bcc971aee7ed10f0919"
      );
      const result = await res.json();

      setMovies(result.results);
    };

    getMovies();
  }, []);

  return (
    <Carousel
      items={movies}
      heading="Popular Movies"
      url="/movie/category/trending"
      render={renderMovie}
      groupSize={groupSize}
    />
  );
}
