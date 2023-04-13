import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation, useParams } from "react-router-dom";
import ViewList from "../components/ViewList";
import apiEndpoint from "../utils/apiEndpoints";
import MovieCard from "../components/MovieCard";
import { Grid, Typography } from "@mui/material";
import Loading from "../components/Loading";
import useMovieCollection from "../hooks/useMovieCollection";
import useScrollObserver from "../hooks/useScrollObserver";

export default function List() {
  const [page, setPage] = useState(1);
  const { category } = useParams();
  const location = useLocation();

  const type = location.pathname.split("/")[1];
  const { url, title } = apiEndpoint[type][category];
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

  console.log(items);

  return (
    <ViewList>
      <Typography
        variant="h2"
        fontSize={24}
        fontWeight={400}
        mb={3}
        sx={{ textTransform: "capitalize", px: { xs: 1, lg: 7 } }}
      >
        {title}
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
