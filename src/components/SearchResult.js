import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useMovieContext } from "../providers/MovieProvider";
import ViewList from "./ViewList";
import { Grid, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import Loading from "./Loading";
import apiEndpoint from "../utils/apiEndpoints";
import useMovieCollection from "../hooks/useMovieCollection";
import useScrollObserver from "../hooks/useScrollObserver";

export default function SearchResult() {
  const { searchTerm } = useMovieContext();
  const [page, setPage] = useState(1);

  //const { url } = apiEndpoint.searchUrl;
  const { url } = apiEndpoint.movie.trending;

  const urlWithPage = useMemo(() => `${url}&page=${page}`, [url, page]);

  const { items, loading } = useMovieCollection(urlWithPage);

  let bottomBoundryRef = useRef(null);

  const handlePage = useCallback(() => setPage((page) => page + 1), [setPage]);

  const { scrollObserver } = useScrollObserver(handlePage);

  useEffect(() => {
    if (bottomBoundryRef.current) {
      scrollObserver(bottomBoundryRef.current);
    }
  }, [bottomBoundryRef, scrollObserver]);

  return (
    <ViewList>
      <Typography
        variant="h2"
        fontSize={24}
        fontWeight={400}
        mt={12}
        mb={3}
        sx={{ textTransform: "capitalize", px: { xs: 1, lg: 7 } }}
      >
        Results For: {searchTerm}
      </Typography>
      <Grid
        container
        columnSpacing={1}
        mb={6}
        sx={{
          backgroundColor: "transparent",
          px: { xs: 1, lg: 7 },
          minHeight: "100vh",
        }}
      >
        {items?.map((item) => (
          <Grid item xs={12 / 5} key={item.id}>
            <MovieCard item={item} />
          </Grid>
        ))}
      </Grid>
      <div ref={bottomBoundryRef}></div>
      {loading && <Loading />}
    </ViewList>
  );
}
