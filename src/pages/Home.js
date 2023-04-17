import { Box } from "@mui/material";
import Header from "../components/Header";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";

export default function Home() {
  return (
    <>
      <Header />
      <Box component="section" sx={{ paddingLeft: { xs: 0, lg: "100px" } }}>
        <ViewSelectionItem routePath={apiEndpoint.movie.trending} />
        <ViewSelectionItem routePath={apiEndpoint.tv.trending} />
      </Box>
    </>
  );
}

//export default WithFeaturedMovie(Home);
