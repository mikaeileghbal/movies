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

export default function List() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { category } = useParams();
  const location = useLocation();

  const type = location.pathname.split("/")[1];
  const { url, title } = apiEndpoint[type][category];

  const urlWithPage = useMemo(() => `${url}&page=${page}`, [url, page]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(urlWithPage);
      const result = await res.json();
      setItems((state) => [...state, ...result.results]);
      setLoading(false);
    };
    getData();
  }, [page]);

  let bottomBoundryRef = useRef(null);

  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setPage((page) => page + 1);
          }
        });
      }).observe(node);
    },
    [setPage]
  );

  useEffect(() => {
    if (bottomBoundryRef.current) {
      scrollObserver(bottomBoundryRef.current);
    }
  }, [bottomBoundryRef]);

  console.log(loading);
  console.log(items);
  console.log(urlWithPage);

  return (
    <ViewList>
      <Typography
        variant="h2"
        fontSize={24}
        fontWeight={400}
        my={3}
        sx={{ textTransform: "capitalize", px: { xs: 1, lg: 7 } }}
      >
        {title}
      </Typography>
      <Grid
        container
        spacing={1}
        mb={6}
        sx={{
          backgroundColor: "transparent",
          px: { xs: 1, lg: 7 },
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
      {/* <button onClick={handlePage}>Load more {page}</button> */}
    </ViewList>
  );
}
