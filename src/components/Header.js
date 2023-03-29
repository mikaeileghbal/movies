import "../App.css";
import styled from "@emotion/styled";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { StyledRating, StyledText2 } from "../styles/global";
import { CSSTransition } from "react-transition-group";

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
      component="section"
      flexDirection={{ xs: "column-reverse", lg: "row" }}
      mb={7}
      sx={{
        paddingLeft: { xs: 5, lg: 7, position: "relative" },
        backgroundColor: "#000",
      }}
    >
      <CSSTransition
        in={movie.id}
        appear={true}
        timeout={400}
        classNames="slideUp"
        key={movie}
        unmountOnExit
      >
        <FeaturedMovie movie={movie} />
      </CSSTransition>
      <FeaturedImage
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
    </Grid>
  );
}

function FeaturedMovie({ movie }) {
  const { title, vote_average, overview, vote_count, duration, release_date } =
    movie;
  return (
    <Grid
      item
      sx={{
        xs: 12,
        lg: 6,
        fontWeight: "700",
        height: { xs: "auto", lg: "530px" },
        alignSelf: "flex-start",
        zIndex: 3,
      }}
      flex={{ xs: "1", lg: "0 0 500px" }}
      width={{ xs: "100%" }}
      //p={{ xs: 2, md: 6 }}
      pt={{ xs: 0, md: 0, lg: 2 }}
      display="flex"
      flexDirection="column"
      justifyContent={{ xs: "flex-start", lg: "center" }}
      alignItems="flex-start"
    >
      <Typography variant="h1" fontSize={34} fontWeight={400}>
        {title}
      </Typography>
      <Stack
        direction="row"
        sx={{ display: "flex", alignItems: "flex-end" }}
        spacing={2}
      >
        <StyledRating value={vote_average / 2} precision={0.1} readOnly />
        <StyledText2>{vote_count} Reviews</StyledText2>
        <StyledText2>{release_date?.slice(0, 4)}</StyledText2>
        <StyledText2>{duration}</StyledText2>
      </Stack>
      <Typography variant="body2" sx={{ lineHeight: 1.7 }} mt={3}>
        {overview}
      </Typography>
      <Button
        variant="contained"
        startIcon={<PlayArrowIcon />}
        sx={{ marginTop: "25px", py: "10px", px: "20px", color: "white" }}
      >
        Watch Trailer
      </Button>
    </Grid>
  );
}

function FeaturedImage({ image }) {
  return (
    <Grid
      className="hero-image"
      item
      sx={{
        xs: 12,
        lg: 6,
        zIndex: 2,
      }}
      flex="auto"
    >
      <Card
        sx={{
          maxwidth: 600,
          height: { xs: 220, md: 320, lg: 520, overflowY: "hidden" },
          padding: 3,
        }}
      >
        <StyledCardMedia
          component="img"
          image={image}
          alt="title"
          sx={{ height: "inherit" }}
        />
      </Card>
    </Grid>
  );
}
