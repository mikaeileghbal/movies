import React, { useEffect } from "react";
import { useMovieContext } from "../providers/MovieProvider";
import useMovieFeatured from "../hooks/useMovieFeatured";

export default function WithFeaturedMovie(Component) {
  return function FeaturedComponent(props) {
    const { setMovie } = useMovieContext();

    const { featured } = useMovieFeatured();

    console.log("in Hoc: ", featured);

    useEffect(() => {
      setMovie(featured);
    }, [featured, setMovie]);

    return <Component {...props} />;
  };
}
