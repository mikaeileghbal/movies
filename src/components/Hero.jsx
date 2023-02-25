import styled from "@emotion/styled";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
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
  overflowX: "visible",
  objectFit: "cover",
}));

export default function Hero({ movie }) {
  const { image, title, rating, description } = movie;

  return (
    <Grid
      container
      component="main"
      flexDirection={{ xs: "column-reverse", lg: "row" }}
      pb={5}
      sx={{ paddingLeft: { xs: "0px", lg: "100px" } }}
    >
      <Grid
        item
        sx={{ xs: 12, lg: 6, fontWeight: "700", minHeight: "520px" }}
        flex="0 0 600px"
        p={{ xs: 2, md: 6 }}
        pt={{ xs: 0, md: 0, lg: 6 }}
        display="flex"
        flexDirection="column"
        justifyContent={{ xs: "flex-start", lg: "center" }}
        alignItems="flex-start"
      >
        <Typography variant="h1" fontSize={32}>
          {title}
        </Typography>
        <StyledRating
          name="read-only"
          value={rating}
          precision={0.1}
          readOnly
          color="primary"
        />
        <Typography variant="body1" mt={3}>
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
      <Grid
        item
        sx={{
          xs: 12,
          lg: 6,
          position: "relative",
          zIndex: -1,
        }}
        flex="auto"
      >
        <Card
          sx={{
            maxwidth: 600,
            height: { xs: 220, md: 320, lg: 520 },
          }}
        >
          <StyledCardMedia
            component="img"
            sx={{ height: "100%" }}
            image={image}
            alt="title"
          />
        </Card>
      </Grid>
    </Grid>
  );
}
