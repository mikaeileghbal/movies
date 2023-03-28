import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ViewList from "../components/ViewList";
import apiEndpoint from "../utils/apiEndpoints";
import MovieCar from "../components/MovieCard";
import { Grid, Typography } from "@mui/material";
import Loading from "../components/Loading";

export default function List() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();
  const location = useLocation();

  const type = location.pathname.split("/")[1];
  const { url, title } = apiEndpoint[type][category];
  const urlWithPage = useMemo(() => `${url}&page=${page}`, [url, page]);

  const handlePage = () => {
    console.log("page: ", page);
    setPage((page) => page + 1);
  };

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(urlWithPage);
        const result = await res.json();
        setLoading(false);
        setItems((state) => [...state, ...result.results]);
      } catch (err) {
        setLoading(false);
        return err;
      }
    };
    getData();
  }, [urlWithPage]);

  console.log("items", items);
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
            <MovieCar item={item} />
          </Grid>
        ))}
      </Grid>
      {loading && <Loading />}
      <button onClick={handlePage}>Load more {page}</button>
    </ViewList>
  );
}
