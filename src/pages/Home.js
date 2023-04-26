import { Box, Button } from "@mui/material";
import Header from "../components/Header";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import useMovieDetail from "../hooks/useMovieDetail";
import { useDispatch, useSelector } from "react-redux";
import { requestMovies } from "../features/movieSlice";
import { sagaActions } from "../store/sagaActions";

export default function Home() {
  const { movie } = useMovieDetail("movie", 21500);
  const movies = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  dispatch(requestMovies({ listName: "trending", mediaType: "movie" }));
  //dispatch(requestMovies({ listName: "trending", mediaType: "tv" }));

  console.log("state in home:", movies.trending);

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
        />
      </Box>
    </>
  );
}

//export default WithFeaturedMovie(Home);
