import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function Carousel() {
  return (
    <Box component="section" px={{ xs: 2, md: 6 }} mb={4}>
      <Stack direction="row" alignItems="baseline" spacing={1}>
        <Typography variant="h2" fontSize={24} fontWeight={400}>
          Trending Movies
        </Typography>
        <Button
          variant="text"
          component="a"
          href="/movie/category/trending"
          sx={{ fontSize: 14, fontWeight: "600", textTransform: "capitalize" }}
        >
          Explore All
        </Button>
      </Stack>
    </Box>
  );
}
