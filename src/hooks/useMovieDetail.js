import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../utils/apiEndpoints";


export default function useMovieDetail(type, id) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(`${BASE_URL}${type}/${id}?api_key=${API_KEY}`);
      const result = await res.json();
      console.log("detail: ", result);
      setMovie(result);
    };

    getMovies();
  }, [type, id]);

  return { movie };
}
