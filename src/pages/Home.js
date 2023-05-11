import { Box } from "@mui/material";
import Header from "../components/Header";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import useHome from "../hooks/useHome";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

export default function Home() {
  const { item, movies, tvs } = useHome();
  const { isLoading } = useSelector((state) => state.loading);

  // if (isLoading) return <Loading />;

  return (
    <>
      <Header movie={item} />
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
