import {
  Box,
  CardMedia,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { StyledIconButtonSocial } from "../../styles/global";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkIcon from "@mui/icons-material/Link";
import { useMovieContext } from "../../providers/MovieProvider";
import { Facebook } from "@mui/icons-material";
import {
  formatCurrency,
  formatDate,
  formatRuntime,
  getCommaSeperatedText,
} from "../../utils/helper";
import { CardImage } from "../CardImage";

export default function Overview() {
  const { movie } = useMovieContext();

  return (
    <Grid container sx={{ backgroundColor: "transparent" }} mt={2}>
      <Grid item md={3} pr={4}>
        <OverviewImage image={movie.poster_path} />
      </Grid>
      <Grid item md={9}>
        <OverviewInfo movie={movie} />
      </Grid>
    </Grid>
  );
}

function OverviewImage({ image }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: "0",
        paddingTop: "140%",
        backgroundColor: "rgba(255,255,255,0.06)",
        maxWidth: "92%",
      }}
    >
      <CardImage
        src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${image}`}
      />
      {/* <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w300${image}`}
        alt="poster"
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      /> */}
    </Box>
  );
}

function OverviewInfo({ movie }) {
  return (
    <Box sx={{ backgroundColor: "transparent", maxWidth: "90%" }}>
      <Typography
        variant="h2"
        mb={2}
        sx={{ fontSize: "24px", fontWeight: "400" }}
      >
        Storyline
      </Typography>
      <Typography variant="p">{movie.overview}</Typography>
      <TableContainer component={Box} sx={{ marginTop: 4 }}>
        <Table size="small" sx={{ maxWidth: "500px" }}>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{ border: "none", width: "120px", padding: "6px 0" }}
              >
                Released
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                {formatDate(movie.release_date)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none", padding: "6px 0" }}>
                Runtime
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                {formatRuntime(movie.runtime)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none", padding: "6px 0" }}>
                Director
              </TableCell>
              <TableCell sx={{ border: "none" }}>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none", padding: "6px 0" }}>
                Budget
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                {formatCurrency(movie.budget)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none", padding: "6px 0" }}>
                Revenue
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                {formatCurrency(movie.revenue)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none", padding: "6px 0" }}>
                Genre
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                {getCommaSeperatedText(movie.genres)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none", padding: "6px 0" }}>
                Status
              </TableCell>
              <TableCell sx={{ border: "none" }}>{movie.status}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none", padding: "6px 0" }}>
                Language
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                {movie.original_language}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none", padding: "6px 0" }}>
                Production
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                {getCommaSeperatedText(movie.production_companies)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Social />
    </Box>
  );
}

function Social() {
  return (
    <Stack
      direction="row"
      spacing={1}
      mt={4}
      mb={{ xs: 10, lg: 4 }}
      color="white"
    >
      <StyledIconButtonSocial color="inherit">
        <TwitterIcon />
      </StyledIconButtonSocial>
      <StyledIconButtonSocial color="inherit">
        <Facebook />
      </StyledIconButtonSocial>
      <StyledIconButtonSocial color="inherit">
        <LinkIcon />
      </StyledIconButtonSocial>
    </Stack>
  );
}
