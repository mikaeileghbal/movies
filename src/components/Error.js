import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div style={{ maxWidth: "400px" }}>
      <div>Data not available</div>
      <p>
        Looks like we are unable to fetch the data right now, please come back
        and try again soon.
      </p>
      <p>
        Back to our <Link to="/">home page</Link>
      </p>
    </div>
  );
}
