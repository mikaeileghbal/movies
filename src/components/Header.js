import "../App.css";
import styled from "@emotion/styled";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { StyledRating, StyledText2 } from "../styles/global";
import { CSSTransition } from "react-transition-group";
import apiEndpoint from "../utils/apiEndpoints";
import { formatRuntime } from "../utils/helper";
import { Translate } from "@mui/icons-material";
import useMovieDetail from "../hooks/useMovieDetail";
import useMovieFeatured from "../hooks/useMovieFeatured";

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  overflowX: "visible",
  objectFit: "cover",
}));

export default function Header({ movie }) {
  return (
    <Grid
      container
      mb={7}
      component="section"
      flexDirection={{ xs: "column-reverse", lg: "row" }}
      sx={{
        paddingLeft: { xs: 0, lg: 13 },
        paddingRight: { xs: 5, lg: 0 },
        position: "relative",
        backgroundColor: "#000",
        overflow: "hidden",
        height: { xs: "auto", lg: "530px" },
      }}
    >
      <Grid
        item
        xs={12}
        lg={3}
        sx={{
          backgroundColor: "transparent",
          zIndex: 1,
          overflow: "visible",
        }}
      >
        <CSSTransition
          in={movie.id}
          appear={true}
          timeout={{ enter: 1000, exit: 200 }}
          classNames="slideUp"
          key={movie.id}
          unmountOnExit
          mountOnEnter
        >
          <FeaturedMovie movie={movie} />
        </CSSTransition>
      </Grid>
      <Grid
        item
        xs={12}
        lg={9}
        sx={{
          backgroundColor: "transparent",
          zIndex: 0,
        }}
      >
        <FeaturedImage
          image={`${apiEndpoint.originalBaseUrl}${movie.backdrop_path}`}
        />
      </Grid>
    </Grid>
  );
}

function FeaturedMovie({ movie }) {
  const {
    title,
    vote_average,
    overview,
    vote_count,
    runtime,
    release_date,
    first_air_date,
    name,
  } = movie;

  const trimText = (text) => {
    if (text.length < 196) return text;
    return `${text.slice(0, 196)}...`;
  };

  return (
    <Box
      flex={{ xs: "1", lg: "0 0 500px" }}
      width={{ xs: "80%", lg: "70%" }}
      minWidth={{ xs: "80%", md: "100%", lg: "140%" }}
      height="100%"
      pt={{ xs: 1, md: 1, lg: 2 }}
      display="flex"
      flexDirection="column"
      justifyContent={{ xs: "flex-start", lg: "center" }}
      alignItems="flex-start"
    >
      <Typography variant="h1" fontSize={34} fontWeight={400}>
        {title || name}
      </Typography>
      <Stack
        direction="row"
        sx={{ display: "flex", alignItems: "flex-end" }}
        spacing={2}
      >
        <StyledRating value={vote_average / 2} precision={0.1} readOnly />
        <StyledText2>{vote_count} Reviews</StyledText2>
        <StyledText2>{release_date?.slice(0, 4)}</StyledText2>
        <StyledText2>{first_air_date?.slice(0, 4)}</StyledText2>
        <StyledText2>{runtime ? formatRuntime(runtime) : ""}</StyledText2>
      </Stack>
      <Typography variant="body2" sx={{ lineHeight: 1.7 }} mt={3}>
        {trimText(overview)}
      </Typography>
      <Button
        variant="contained"
        startIcon={<PlayArrowIcon />}
        sx={{
          marginTop: "25px",
          py: "10px",
          px: "24px",
          color: "white",
          textTransform: "capitalize",
        }}
      >
        Watch Trailer
      </Button>
    </Box>
  );
}

function FeaturedImage({ image }) {
  return (
    <Box
      className="hero-image"
      sx={{
        position: "relative",
        maxwidth: "100%",
        height: { xs: 220, md: 320, lg: 530 },
        padding: 3,
        backgroundColor: "transparent",
        overflow: "hidden",
      }}
    >
      <StyledCardMedia
        component="img"
        image={image}
        alt="title"
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
