import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Box, Grid, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import Loading from "./Loading";
import apiEndpoint from "../utils/apiEndpoints";
import useMovieCollection from "../hooks/useMovieCollection";
import useScrollObserver from "../hooks/useScrollObserver";
import { useSearchParams } from "react-router-dom";
import { Error } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { resetSearchItems } from "../features/searchSlice";

export default function SearchResult() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  //const searchTerm = searchParams.get("q");
  const { searchTerm } = useSelector((state) => state.search);

  const url = apiEndpoint.searchUrl;

  const urlWithPage = useMemo(
    () => `${url}&query=${searchTerm}&page=${page}`,
    [url, page, searchTerm]
  );

  const { items, error } = useMovieCollection(urlWithPage);

  let bottomBoundryRef = useRef(null);

  const handlePage = useCallback(() => setPage((page) => page + 1), [setPage]);

  const { scrollObserver } = useScrollObserver(handlePage);

  useEffect(() => {
    if (bottomBoundryRef.current) {
      scrollObserver(bottomBoundryRef.current);
    }
  }, [bottomBoundryRef, scrollObserver]);

  useEffect(() => {
    dispatch(resetSearchItems());
    setPage(1);
  }, [searchTerm, dispatch]);

  if (error) return <Error />;

  return (
    <Box
      component="section"
      sx={{ paddingLeft: { xs: 0, lg: "100px" }, paddingRight: 8 }}
    >
      <Typography
        variant="h2"
        fontSize={24}
        fontWeight={400}
        mt={17}
        mb={3}
        sx={{ px: { xs: 0, lg: 0 } }}
      >
        Results For: {searchTerm}
      </Typography>
      <Grid
        container
        columnSpacing={1}
        mb={6}
        sx={{
          backgroundColor: "transparent",
          px: { xs: 0, lg: 0 },
          minHeight: "100vh",
        }}
      >
        {items?.map((item) => (
          <Grid item xs={12 / 5} key={item.id}>
            <MovieCard item={item} />
          </Grid>
        ))}
      </Grid>
      <div ref={bottomBoundryRef}>
        <Loading />
      </div>
    </Box>
  );
}
