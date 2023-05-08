import { Box, CardMedia, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  StyledSubText,
  StyledTitle,
  StyledTitleContainer,
} from "../../styles/global";
import { useParams } from "react-router-dom";
import apiEndpoint from "../../utils/apiEndpoints";
import useMovieImages from "../../hooks/useMovieImages";
import Loading from "../Loading";
import { CardImage } from "../CardImage";
import { useDispatch, useSelector } from "react-redux";
import { requestPhotos } from "../../features/detailSlice";

export default function Photo() {
  const { photos } = useSelector((state) => state.detail);
  const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const { type, id } = useParams();

  const routePath = { ...apiEndpoint[type].images };

  routePath.url = routePath.url.replace("{_id}", id);

  console.log("photos url", routePath.url);

  //const { isLoading, images } = useMovieImages(routePath.url);

  const { backdrops, posters } = photos;

  useEffect(() => {
    console.log("Dispatch photos");
    dispatch(requestPhotos({ url: routePath.url }));
  }, [routePath.url, dispatch]);

  if (isLoading) return <Loading />;

  return (
    <>
      <StyledTitleContainer>
        <StyledTitle>Backdrops</StyledTitle>
        <StyledSubText ml={1} mt={0.5}>
          {backdrops?.length} Images
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
          {posters?.length} Images
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
        paddingBottom: "56.28%",
        backgroundColor: "rgba(255,255,255,0.07)",
        position: "relative",
      }}
    >
      <CardImage src={`${apiEndpoint.backdropBaseUrl}${image}`} />
    </Box>
  );
}

function Poster({ image }) {
  return (
    <Box
      sx={{
        height: "0",
        paddingBottom: "150.27%",
        backgroundColor: "rgba(255,255,255,0.07)",
        position: "relative",
      }}
    >
      <CardImage src={`${apiEndpoint.imageBaseUrl}${image}`} />
    </Box>
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
