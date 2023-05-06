import React, { useEffect } from "react";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint, { API_KEY, BASE_URL } from "../utils/apiEndpoints";
import useMovieDetail from "../hooks/useMovieDetail";
import Header from "../components/Header";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { requestMovies } from "../features/movieSlice";
import { requestFeatured } from "../features/featuredSlice";

export default function Movie() {
  //const { movie } = useMovieDetail("movie", 18500);
  const { item } = useSelector((state) => state.featured);
  const { popular, top_rated, upcoming, now_playing } = useSelector(
    (state) => state.movie
  );
  const dispatch = useDispatch();

  const dispatchTrending = () => {
    return (dispatch) => {
      dispatch(
        requestFeatured({ url: `${BASE_URL}movie/${18500}?api_key=${API_KEY}` })
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
    };
  };

  useEffect(() => {
    const callDispatchTrending = dispatchTrending();
    callDispatchTrending(dispatch);
  }, [dispatch]);

  return (
    <>
      <Header movie={item} />
      <Box component="section" sx={{ paddingLeft: { xs: 0, lg: "100px" } }}>
        <ViewSelectionItem
          routePath={apiEndpoint.movie.popular}
          items={popular}
        />
        <ViewSelectionItem
          routePath={apiEndpoint.movie.top_rated}
          items={top_rated}
        />
        <ViewSelectionItem
          routePath={apiEndpoint.movie.upcoming}
          items={upcoming}
        />
        <ViewSelectionItem
          routePath={apiEndpoint.movie.now_playing}
          items={now_playing}
        />
      </Box>
    </>
  );
}

//export default WithFeaturedMovie(Movie);
