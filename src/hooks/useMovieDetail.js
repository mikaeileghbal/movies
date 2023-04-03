import { useEffect, useState } from "react";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "3e35d5ea16674bcc971aee7ed10f0919";

export default function useMovieDetail(type, id) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(`${BASE_URL}${type}/${id}?api_key=${API_KEY}`);
      const result = await res.json();
      console.log(result  );
      setMovie(result);
    };

    getMovies();
  }, [type, id]);

  return { movie };
}
