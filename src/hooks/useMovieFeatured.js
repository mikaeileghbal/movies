import { useEffect, useMemo, useState } from "react";
import useMovieDetail from "./useMovieDetail";

const mediaType = {
  1: "movie",
  2: "tv",
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function useMovieFeatured() {
  const [media, setMedia] = useState({
    type: "",
    id: 0,
  });

  const { movie } = useMovieDetail(media.type, media.id);

  useEffect(() => {
    const type = mediaType[random(1, 2)];
    const id = random(1, type === "movie" ? 999000 : 85000);
    setMedia({ type, id });
  }, []);

  return { movie };
}
