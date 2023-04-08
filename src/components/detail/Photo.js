import { Box, CardMedia, Grid } from "@mui/material";
import React from "react";
import {
  StyledSubText,
  StyledTitle,
  StyledTitleContainer,
} from "../../styles/global";
import { useParams } from "react-router-dom";
import apiEndpoint from "../../utils/apiEndpoints";
import useMovieImages from "../../hooks/useMovieImages";
import Loading from "../Loading";

export default function Photo() {
  const { type, id } = useParams();
  const routePath = apiEndpoint[type].images;

  routePath.url = routePath.url.replace("{_id}", id);
  console.log(routePath);

  const { isLoading, images } = useMovieImages(routePath.url);

  const { backdrops, posters } = images;

  if (isLoading) return <Loading />;

  return (
    <>
      <StyledTitleContainer>
        <StyledTitle>Backdrops</StyledTitle>
        <StyledSubText ml={1} mt={0.5}>
          {backdrops.length} Images
        </StyledSubText>
      </StyledTitleContainer>
      <Box pr={6.5}>
        <GridBackdrop>
          {backdrops?.map((image) => (
            <Grid item xs={3}>
              <Backdrop image={image.file_path} />
            </Grid>
          ))}
        </GridBackdrop>
      </Box>
      <StyledTitleContainer>
        <StyledTitle>Posters</StyledTitle>
        <StyledSubText ml={1} mt={0.5}>
          {posters.length} Images
        </StyledSubText>
      </StyledTitleContainer>
      <Box>
        <GridPoster>
          {posters?.map((image) => (
            <Grid item xs={12 / 5}>
              <Poster image={image.file_path} />
            </Grid>
          ))}
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
    >
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w300${image}`}
        alt="backdrop"
        sx={{ position: "absolute", left: 0, top: 0, objectFit: "cover" }}
      />
    </Box>
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
      columnSpacing={1}
      rowSpacing={1}
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
