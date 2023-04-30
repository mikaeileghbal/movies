import { Box } from "@mui/material";
import Header from "../components/Header";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint, { API_KEY, BASE_URL } from "../utils/apiEndpoints";
import useMovieDetail from "../hooks/useMovieDetail";
import { useDispatch, useSelector } from "react-redux";
import { requestMovies } from "../features/movieSlice";
import { requestTvs } from "../features/tvSlice";
import { useMemo } from "react";
import { useEffect } from "react";
import { requestFeatured } from "../features/featuredSlice";

export default function Home() {
  //const { movie } = useMovieDetail("movie", 21500);
  const { item } = useSelector((state) => state.featured);
  const movies = useSelector((state) => state.movie);
  const tvs = useSelector((state) => state.tv);

  const memoMovies = useMemo(() => movies, [movies]);
  const memoTvs = useMemo(() => tvs, [tvs]);

  const dispatch = useDispatch();

  const dispatchTrending = () => {
    return (dispatch) => {
      dispatch(
        requestFeatured({ url: `${BASE_URL}movie/${21500}?api_key=${API_KEY}` })
      );
      dispatch(requestMovies({ listName: "trending", mediaType: "movie" }));
      dispatch(requestTvs({ listName: "trending", mediaType: "tv" }));
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
          routePath={apiEndpoint.movie.trending}
          listName="trending"
          items={memoMovies.trending}
        />

        <ViewSelectionItem
          routePath={apiEndpoint.tv.trending}
          listName="trending"
          items={memoTvs.trending}
        />
      </Box>
    </>
  );
}
