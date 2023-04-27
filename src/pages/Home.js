import { Box } from "@mui/material";
import Header from "../components/Header";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import useMovieDetail from "../hooks/useMovieDetail";
import { useDispatch, useSelector } from "react-redux";
import { requestMovies } from "../features/movieSlice";
import { requestTvs } from "../features/tvSlice";

export default function Home() {
  const { movie } = useMovieDetail("movie", 21500);
  const movies = useSelector((state) => state.movie);
  const tvs = useSelector((state) => state.tv);

  const dispatch = useDispatch();

  dispatch(requestMovies({ listName: "trending", mediaType: "movie" }));
  dispatch(requestTvs({ listName: "trending", mediaType: "tv" }));

  return (
    <>
      <Header movie={movie} />
      <Box component="section" sx={{ paddingLeft: { xs: 0, lg: "100px" } }}>
        <ViewSelectionItem
          routePath={apiEndpoint.movie.trending}
          listName="trending"
          items={movies.trending}
        />

        <ViewSelectionItem
          routePath={apiEndpoint.tv.trending}
          listName="trending"
          items={tvs.trending}
        />
      </Box>
    </>
  );
}

//export default WithFeaturedMovie(Home);
