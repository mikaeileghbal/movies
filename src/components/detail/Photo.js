import { Box, Grid } from "@mui/material";
import React from "react";
import {
  StyledSubText,
  StyledTitle,
  StyledTitleContainer,
} from "../../styles/global";

export default function Photo() {
  return (
    <>
      <StyledTitleContainer>
        <StyledTitle>Backdrops</StyledTitle>
        <StyledSubText>11 Images</StyledSubText>
      </StyledTitleContainer>
      <Box>
        <GridBackdrop>
          <Grid item xs={3}>
            <Backdrop />
          </Grid>
        </GridBackdrop>
      </Box>
      <StyledTitleContainer>
        <StyledTitle>Posters</StyledTitle>
        <StyledSubText>11 Images</StyledSubText>
      </StyledTitleContainer>
      <Box>
        <GridPoster>
          <Grid item xs={12 / 5}>
            <Poster />
          </Grid>
        </GridPoster>
      </Box>
    </>
  );
}

function Backdrop({ image }) {
  return (
    <Box
      sx={{
        height: "0",
        paddingBottom: "56.25%",
        backgroundColor: "rgba(255,255,255,0.07)",
        position: "relative",
      }}
    ></Box>
  );
}

function Poster({ image }) {
  return (
    <Box
      sx={{
        height: "0",
        paddingBottom: "150%",
        backgroundColor: "rgba(255,255,255,0.07)",
        position: "relative",
      }}
    ></Box>
  );
}

function GridBackdrop({ children }) {
  return (
    <Grid
      container
      mb={6}
      columnSpacing={2}
      rowSpacing={5}
      sx={{ backgroundColor: "transparent" }}
    >
      {children}
    </Grid>
  );
}

function GridPoster({ children }) {
  return (
    <Grid
      container
      mb={6}
      pr={7}
      columnSpacing={1}
      rowSpacing={1}
      sx={{ backgroundColor: "transparent" }}
    >
      {children}
    </Grid>
  );
}
