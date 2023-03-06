import { Box, Button, Card, CardActionArea } from "@mui/material";
import React from "react";

export default function Explore({ url }) {
  return (
    <Card>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",

          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="text"
          component="a"
          href={url}
          sx={{
            fontSize: 16,
            fontWeight: "400",
            textTransform: "capitalize",
            color: "white",
          }}
        >
          Explore All
        </Button>
      </Box>
    </Card>
  );
}
