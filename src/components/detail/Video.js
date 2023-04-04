import { Box, Chip, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";

export default function Video() {
  return (
    <Grid
      container
      mb={6}
      columnSpacing={2}
      rowSpacing={5}
      sx={{ backgroundColor: "transparent" }}
    >
      <Grid item xs={4}>
        <Box
          sx={{
            height: "0",
            paddingBottom: "56.25%",
            backgroundColor: "rgba(255,255,255,0.07)",
            position: "relative",
          }}
        >
          <Chip
            label="1:20"
            sx={{
              borderRadius: "0",
              backgroundColor: "black",
              padding: "4px 0px",
              position: "absolute",
              bottom: "0",
              right: "0",
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <PlayCircleFilledWhiteOutlinedIcon sx={{ fontSize: 60 }} />
          </IconButton>
        </Box>

        <Typography
          variant="h2"
          sx={{ fontSize: "16px", fontWeight: "400", letterSpacing: "0.4px" }}
          mt={1.5}
          mb={1}
        >
          Special Feature - Rina's Range
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            letterSpacing: "0.4px",
            color: "#80868b",
          }}
        >
          Featurette
        </Typography>
      </Grid>
    </Grid>
  );
}
