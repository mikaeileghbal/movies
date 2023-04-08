import { useEffect, useState } from "react";

export default function useMovieImages(url) {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const result = await res.json();
        console.log("images:", result);
        setImages(result);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    getData();
  }, [url]);
  return { isLoading, images };
}
