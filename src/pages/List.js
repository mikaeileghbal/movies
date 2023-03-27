import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ViewList from "../components/ViewList";
import apiEndpoint from "../utils/apiEndpoints";
import MovieCar from "../components/MovieCard";
import { Grid, Typography } from "@mui/material";

export default function List() {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  const location = useLocation();

  const type = location.pathname.split("/")[1];
  const { url, title } = apiEndpoint[type][category];
  console.log(url);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const result = await res.json();
      setItems(result.results);
    };
    getData();
  }, [url]);

  console.log("items", items);
  return (
    <ViewList>
      <Typography
        variant="h2"
        fontSize={24}
        fontWeight={400}
        my={3}
        sx={{ textTransform: "capitalize" }}
      >
        {title}
      </Typography>
      <Grid
        container
        spacing={1}
        mb={6}
        sx={{
          backgroundColor: "transparent",
        }}
      >
        {items?.map((item) => (
          <Grid item xs={12 / 5}>
            <MovieCar item={item} />
          </Grid>
        ))}
      </Grid>
    </ViewList>
  );
}
