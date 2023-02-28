import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import { StyledCardTitle } from "../styles/global";

export default function Carousel({ movies }) {
  return (
    <Box component="section" mb={6}>
      <CarouselHeader />
      <CarouselBody movies={movies} />
    </Box>
  );
}

function CarouselHeader() {
  return (
    <Stack
      direction="row"
      alignItems="baseline"
      spacing={1}
      sx={{ ml: 6, mb: 2 }}
    >
      <Typography variant="h2" fontSize={24} fontWeight={400}>
        Trending Movies
      </Typography>
      <Button
        variant="text"
        component="a"
        href="/movie/category/trending"
        sx={{ fontSize: 14, fontWeight: "600", textTransform: "capitalize" }}
      >
        Explore All
      </Button>
    </Stack>
  );
}

function CarouselBody({ movies }) {
  return (
    <Stack
      direction="row"
      alignItems="baseline"
      sx={{
        ml: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
      }}
    >
      <IconButton disableRipple size="large">
        <ArrowBackIosIcon fontSize="inherit" />
      </IconButton>

      <Box className="outer">
        <Grid
          container
          columnSpacing={1}
          sx={{
            scrollSnapType: "x mandatory",
            scrollPadding: "10px",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {movies?.map((movie) => (
            <Grid
              item
              xs={4}
              md={3}
              lg={12 / 5}
              sx={{ scrollSnapAlign: "start" }}
            >
              <Card sx={{ maxWidth: 330 }}>
                <CardActionArea>
                  <Box
                    sx={{
                      pt: "150%",
                      position: "relative",
                      backgroundColor: "#202124",
                      height: 0,
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        transform: "scale(0.97)",
                      }}
                    />
                  </Box>
                  <CardContent>
                    <StyledCardTitle>
                      {movie.title ? movie.title : movie.name}
                    </StyledCardTitle>

                    <Box
                      sx={{
                        width: 200,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        size="small"
                        value={movie.vote_average / 2}
                        readOnly
                        precision={0.1}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      <Box sx={{ ml: 2, color: "gray" }}>
                        {movie.vote_average}
                      </Box>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <IconButton disableRipple size="large">
        <ArrowForwardIosIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
}
