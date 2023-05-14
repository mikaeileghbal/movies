import { useEffect, useMemo } from "react";
import apiEndpoint, { API_KEY, BASE_URL } from "../utils/apiEndpoints";
import { useDispatch, useSelector } from "react-redux";
import { requestFeatured } from "../features/featuredSlice";
import { requestMovies } from "../features/movieSlice";
import { random } from "../utils/helper";
import { Actions } from "../store/sagaActions";

export default function useMovie() {
  const randomId = useMemo(() => random(1, 100000), []);
  const { item } = useSelector((state) => state.featured);
  const { popular, top_rated, upcoming, now_playing } = useSelector(
    (state) => state.movie
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: Actions.REQUEST_LOAD_MOVIE,
      payload: {
        featuredUrl: `${BASE_URL}movie/${random(1, 100000)}?api_key=${API_KEY}`,
        popular: apiEndpoint.movie.popular.url,
        topRated: apiEndpoint.movie.top_rated.url,
        upcoming: apiEndpoint.movie.upcoming.url,
        nowPlaying: apiEndpoint.movie.now_playing.url,
      },
    });

    // dispatch(
    //   requestFeatured({
    //     url: `${BASE_URL}${"movie"}/${randomId}?api_key=${API_KEY}`,
    //   })
    // );
    // dispatch(
    //   requestMovies({
    //     listName: "popular",
    //     mediaType: "movie",
    //     url: apiEndpoint.movie.popular.url,
    //   })
    // );
    // dispatch(
    //   requestMovies({
    //     listName: "top_rated",
    //     mediaType: "movie",
    //     url: apiEndpoint.movie.top_rated.url,
    //   })
    // );
    // dispatch(
    //   requestMovies({
    //     listName: "upcoming",
    //     mediaType: "movie",
    //     url: apiEndpoint.movie.upcoming.url,
    //   })
    // );
    // dispatch(
    //   requestMovies({
    //     listName: "now_playing",
    //     mediaType: "movie",
    //     url: apiEndpoint.movie.now_playing.url,
    //   })
    // );
  }, [dispatch, randomId]);

  return { item, popular, top_rated, upcoming, now_playing };
}
