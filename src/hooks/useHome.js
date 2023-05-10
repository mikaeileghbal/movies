import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestFeatured } from "../features/featuredSlice";
import apiEndpoint, { API_KEY, BASE_URL } from "../utils/apiEndpoints";
import { requestMovies } from "../features/movieSlice";
import { requestTvs } from "../features/tvSlice";
import { random } from "../utils/helper";
import { loadHome } from "../store/sagas";
import { Actions } from "../store/sagaActions";

const mediaType = {
  1: "movie",
  2: "tv",
};

export default function useHome() {
  const { item } = useSelector((state) => state.featured);
  const movies = useSelector((state) => state.movie);
  const tvs = useSelector((state) => state.tv);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: Actions.REQUEST_LOAD_HOME,
      payload: {
        featuredUrl: `${BASE_URL}${mediaType[random(1, 2)]}/${random(
          1,
          80000
        )}?api_key=${API_KEY}`,
        trendingMoviesUrl: apiEndpoint.movie.trending.url,
        trendignTvsUrl: apiEndpoint.tv.trending.url,
      },
    });
    // dispatch(
    //   requestFeatured({
    //     url: `${BASE_URL}${mediaType[random(1, 2)]}/${random(
    //       1,
    //       80000
    //     )}?api_key=${API_KEY}`,
    //   })
    // );
    // dispatch(
    //   requestMovies({
    //     listName: "trending",
    //     mediaType: "movie",
    //     url: apiEndpoint.movie.trending.url,
    //   })
    // );
    // dispatch(
    //   requestTvs({
    //     listName: "trending",
    //     mediaType: "tv",
    //     url: apiEndpoint.tv.trending.url,
    //   })
    // );
  }, [dispatch]);

  return { item, movies, tvs };
}
