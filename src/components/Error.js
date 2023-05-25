import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Box
      sx={{
        height: "100vh ",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "400px" }}>
        <div>Data not available</div>
        <p>
          Looks like we are unable to fetch the data right now, please come back
          and try again soon.
        </p>
        <p>
          Back to our{" "}
          <Link to="/" style={{ color: "white" }}>
            home page
          </Link>
        </p>
      </Box>
    </Box>
  );
}
