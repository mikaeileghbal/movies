import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function Photo() {
  return (
    <Box>
      <Typography
        variant="h2"
        fontSize={24}
        fontWeight={400}
        ml={1}
        mb={3}
        sx={{ textTransform: "capitalize" }}
      >
        Backdrops
      </Typography>
      <Grid
        container
        mb={6}
        columnSpacing={2}
        rowSpacing={5}
        sx={{ backgroundColor: "transparent" }}
      >
        <Grid item xs={3}>
          <Box
            sx={{
              height: "0",
              paddingBottom: "56.25%",
              backgroundColor: "rgba(255,255,255,0.07)",
              position: "relative",
            }}
          ></Box>
        </Grid>
      </Grid>
      <Typography
        variant="h2"
        fontSize={24}
        fontWeight={400}
        ml={1}
        mb={3}
        mt={6}
        sx={{ textTransform: "capitalize" }}
      >
        Posters
      </Typography>
      <Grid
        container
        mb={6}
        pr={7}
        columnSpacing={1}
        rowSpacing={1}
        sx={{ backgroundColor: "transparent" }}
      >
        <Grid item xs={12 / 5}>
          <Box
            sx={{
              height: "0",
              paddingBottom: "150%",
              backgroundColor: "rgba(255,255,255,0.07)",
              position: "relative",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12 / 5}>
          <Box
            sx={{
              height: "0",
              paddingBottom: "150%",
              backgroundColor: "rgba(255,255,255,0.07)",
              position: "relative",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12 / 5}>
          <Box
            sx={{
              height: "0",
              paddingBottom: "150%",
              backgroundColor: "rgba(255,255,255,0.07)",
              position: "relative",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12 / 5}>
          <Box
            sx={{
              height: "0",
              paddingBottom: "150%",
              backgroundColor: "rgba(255,255,255,0.07)",
              position: "relative",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12 / 5}>
          <Box
            sx={{
              height: "0",
              paddingBottom: "150%",
              backgroundColor: "rgba(255,255,255,0.07)",
              position: "relative",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12 / 5}>
          <Box
            sx={{
              height: "0",
              paddingBottom: "150%",
              backgroundColor: "rgba(255,255,255,0.07)",
              position: "relative",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12 / 5}>
          <Box
            sx={{
              height: "0",
              paddingBottom: "150%",
              backgroundColor: "rgba(255,255,255,0.07)",
              position: "relative",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12 / 5}>
          <Box
            sx={{
              height: "0",
              paddingBottom: "150%",
              backgroundColor: "rgba(255,255,255,0.07)",
              position: "relative",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12 / 5}>
          <Box
            sx={{
              height: "0",
              paddingBottom: "150%",
              backgroundColor: "rgba(255,255,255,0.07)",
              position: "relative",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12 / 5}>
          <Box
            sx={{
              height: "0",
              paddingBottom: "150%",
              backgroundColor: "rgba(255,255,255,0.07)",
              position: "relative",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
