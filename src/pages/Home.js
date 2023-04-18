import { Box } from "@mui/material";
import Header from "../components/Header";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import useMovieDetail from "../hooks/useMovieDetail";

export default function Home() {
  const { movie } = useMovieDetail("movie", 21500);
  return (
    <>
      <Header movie={movie} />
      <Box component="section" sx={{ paddingLeft: { xs: 0, lg: "100px" } }}>
        <ViewSelectionItem routePath={apiEndpoint.movie.trending} />
        <ViewSelectionItem routePath={apiEndpoint.tv.trending} />
      </Box>
    </>
  );
}

//export default WithFeaturedMovie(Home);
