import { useEffect, useState } from "react";
import apiEndpoint, { API_KEY, BASE_URL } from "../utils/apiEndpoints";
import { useDispatch, useSelector } from "react-redux";
import { requestFeatured } from "../features/featuredSlice";
import { requestMovies } from "../features/movieSlice";

export default function useMovieDetail(type, id) {
  const { item } = useSelector((state) => state.featured);
  const { popular, top_rated, upcoming, now_playing } = useSelector(
    (state) => state.movie
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      requestFeatured({
        url: `${BASE_URL}${type}/${id}?api_key=${API_KEY}`,
      })
    );
    dispatch(
      requestMovies({
        listName: "popular",
        mediaType: "movie",
        url: apiEndpoint.movie.popular.url,
      })
    );
    dispatch(
      requestMovies({
        listName: "top_rated",
        mediaType: "movie",
        url: apiEndpoint.movie.top_rated.url,
      })
    );
    dispatch(
      requestMovies({
        listName: "upcoming",
        mediaType: "movie",
        url: apiEndpoint.movie.upcoming.url,
      })
    );
    dispatch(
      requestMovies({
        listName: "now_playing",
        mediaType: "movie",
        url: apiEndpoint.movie.now_playing.url,
      })
    );
  }, []);

  return { item, popular, top_rated, upcoming, now_playing };
}
