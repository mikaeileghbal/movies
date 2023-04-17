import { useEffect, useMemo, useState } from "react";
import useMovieDetail from "./useMovieDetail";

const mediaType = {
  1: "movie",
  2: "tv",
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function useMovieFeatured() {}
