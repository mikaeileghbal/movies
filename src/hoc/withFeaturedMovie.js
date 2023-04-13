import React, { useEffect, useState } from "react";
import { useMovieContext } from "../providers/MovieProvider";
import useMovieFeatured from "../hooks/useMovieFeatured";
import useMovieDetail from "../hooks/useMovieDetail";
import { API_KEY, BASE_URL } from "../utils/apiEndpoints";

// const mediaType = {
//   1: "movie",
//   2: "tv",
// };

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

export default function WithFeaturedMovie(Component) {
  const movie = {};
  return function FeaturedComponent(props) {
    return <Component {...props} movie={movie} />;
  };
}
