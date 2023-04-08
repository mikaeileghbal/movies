import React, { useEffect, useState } from "react";

export default function useMovieCast(url) {
  const [cast, setCast] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const result = await res.json();
        console.log("cast:", result.cast);
        setCast(result.cast);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    getData();
  }, [url]);
  return { isLoading, cast };
}
