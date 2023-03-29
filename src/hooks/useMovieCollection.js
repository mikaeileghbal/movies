import { useState } from "react";
import { useEffect } from "react";

export default function useMovieCollection(url) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const result = await res.json();
        setItems((state) => [...state, ...result.results]);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return { items, loading };
}
