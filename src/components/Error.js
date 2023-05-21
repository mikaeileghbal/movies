import { Box, Typography } from "@mui/material";
import React from "react";

export default function Error() {
  return (
    <Box sx={{ height: "100vh", alignItems: "center" }}>
      <Typography component="h3">Data is not avialable</Typography>
      <Typography component="h4">Data is not avialable</Typography>
      <Typography component="p">Data is not avialable</Typography>
    </Box>
  );
}
