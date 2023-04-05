import { useEffect, useState } from "react";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const BASE_URL = "https://api.themoviedb.org/3/trending/all/day";
const API_KEY = "3e35d5ea16674bcc971aee7ed10f0919";

export default function useMovieFeatured() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const randomMovie = random(0, 18);
      const res = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
      const result = await res.json();
      console.log(randomMovie);
      console.log(result.results);
      console.log(
        "result",
        result.results.slice(randomMovie, randomMovie + 1)[0]
      );
      setFeatured(result.results.slice(randomMovie, randomMovie + 1)[0]);
    };

    getMovies();
  }, []);

  return { featured };
}
