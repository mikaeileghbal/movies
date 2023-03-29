import { useEffect, useState } from "react";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "3e35d5ea16674bcc971aee7ed10f0919";

export default function useMovieFeatured() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const randomMovie = random(1, 500);
    const getMovies = async () => {
      const res = await fetch(`${BASE_URL}${randomMovie}?api_key=${API_KEY}`);
      const result = await res.json();
      setMovie(result);
    };

    getMovies();
  }, []);

  return { movie };
}
