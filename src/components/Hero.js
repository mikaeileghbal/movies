import "../App.css";
import styled from "@emotion/styled";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Button,
  Card,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled": {
    color: theme.palette.primary.main,
  },
  margin: "16px 0 0",
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  overflowX: "visible",
  objectFit: "cover",
}));

const StyledText = styled(Typography)(({ theme }) => ({
  variant: "body2",
  color: "gray",
  fontSize: 14,
}));

export default function Hero({ movie }) {
  return (
    <Grid
      container
      component="section"
      flexDirection={{ xs: "column-reverse", lg: "row" }}
      pb={6}
      sx={{ paddingLeft: { xs: "0px", lg: "0", position: "relative" } }}
    >
      <FeaturedMovie movie={movie} />
      <FeaturedImage image={movie.image} />
    </Grid>
  );
}

function FeaturedMovie({ movie }) {
  const { title, rating, description, reviews, duration, year } = movie;
  return (
    <Grid
      item
      sx={{
        xs: 12,
        lg: 6,
        fontWeight: "700",
        height: { xs: "auto", lg: "520px" },
        alignSelf: "flex-start",
        backgroundColor: "#000",
      }}
      flex={{ xs: "0 0 auto", lg: "0 0 600px" }}
      p={{ xs: 2, md: 6 }}
      pt={{ xs: 0, md: 0, lg: 6 }}
      display="flex"
      flexDirection="column"
      justifyContent={{ xs: "flex-start", lg: "center" }}
      alignItems="flex-start"
    >
      <Typography variant="h1" fontSize={32} fontWeight={400}>
        {title}
      </Typography>
      <Stack
        direction="row"
        sx={{ display: "flex", alignItems: "flex-end" }}
        spacing={2}
      >
        <StyledRating value={rating} precision={0.1} readOnly />
        <StyledText>{reviews} Reviews</StyledText>
        <StyledText>{year}</StyledText>
        <StyledText>{duration}</StyledText>
      </Stack>
      <Typography variant="body2" sx={{ lineHeight: 1.7 }} mt={3}>
        {description}
      </Typography>
      <Button
        variant="contained"
        startIcon={<PlayArrowIcon />}
        sx={{ marginTop: "25px", py: "12px", px: "20px" }}
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
        zIndex: -1,
      }}
      flex="auto"
    >
      <Card
        sx={{
          maxwidth: 600,
          height: { xs: 220, md: 320, lg: 520, overflowY: "hidden" },
          padding: 3,
          bgcolor: "red",
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
