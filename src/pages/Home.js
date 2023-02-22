import { Button, Grid } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Grid container sx={{ mx: 16 }}>
      <Grid item>
        <h1>Material UI</h1>
        <p>
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet lorem et lorem ipsum dolor sit amet
        </p>
        <Button variant="contained">Hello world</Button>
      </Grid>
    </Grid>
  );
}
