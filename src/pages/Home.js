import { Button, Grid, Typography } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Grid container sx={{ pl: 16 }}>
      <Grid item>
        <Typography variant="h1">Material UI</Typography>
        <Typography variant="body1">
          lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor
          sit amet, consectetur adip
        </Typography>
        <Button variant="contained">Hello world</Button>
      </Grid>
    </Grid>
  );
}
