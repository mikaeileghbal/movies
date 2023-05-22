import React, { useEffect, useMemo, useState } from "react";

import Loading from "./Loading";
import Carousel from "./Carousel";
import renderMovie from "../utils/renderMovie";

export default function ViewSelectionItem({ routePath, listName, items }) {
  //const [movies, setMovies] = useState([]);
  //const [loading, setLoading] = useState(false);

  const { url, title, exploreUrl } = routePath;
  //console.log("like url in view", url);

  //const memoMovieUrl = useMemo(() => url, [url]);

  // useEffect(() => {
  //   const getMovies = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await fetch(memoMovieUrl);
  //       const result = await res.json();
  //       setLoading(false);
  //       setMovies(result.results);
  //     } catch (err) {
  //       setLoading(false);
  //     }
  //   };
  //   getMovies();
  // }, [memoMovieUrl]);

  //if (loading) return <Loading />;

  if (!items) return null;

  return (
    <>
      <div>
        Carousel is rendering check to see if carousel makes rendering slow
      </div>
      {/* <Carousel
      items={items}
      heading={title}
      url={exploreUrl}
      render={renderMovie}
      groupSize={5}
    /> */}
    </>
  );
  // const { url, title, exploreUrl } = routePath;

  // return <Listing moviesUrl={url} exploreUrl={exploreUrl} heading={title} />;
}
