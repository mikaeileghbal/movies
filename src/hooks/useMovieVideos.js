import { useEffect, useState } from "react";

export default function useMovieVideos(url) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const result = await res.json();
        console.log("videos:", result.results);
        setVideos(result.results);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    getData();
  }, [url]);
  return { isLoading, videos };
}
