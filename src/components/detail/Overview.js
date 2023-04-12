import {
  Box,
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
import apiEndpoint from "../../utils/apiEndpoints";
import styled from "@emotion/styled";

const StyledTableCell = styled(TableCell)(() => ({
  border: "none",
  padding: "6px 0",
}));

const StyledTableCellHeader = styled(StyledTableCell)(() => ({
  width: "120px",
}));

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
      <CardImage src={`${apiEndpoint.imageBaseUrl}${image}`} />
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
              <StyledTableCellHeader>Released</StyledTableCellHeader>
              <StyledTableCell>
                {formatDate(movie.release_date)}
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCellHeader>Runtime</StyledTableCellHeader>
              <StyledTableCell>{formatRuntime(movie.runtime)}</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCellHeader>Director</StyledTableCellHeader>
              <StyledTableCell>22 March 2023</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCellHeader>Budget</StyledTableCellHeader>
              <StyledTableCell>{formatCurrency(movie.budget)}</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCellHeader>Revenue</StyledTableCellHeader>
              <StyledTableCell>{formatCurrency(movie.revenue)}</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCellHeader>Genre</StyledTableCellHeader>
              <StyledTableCell>
                {getCommaSeperatedText(movie.genres)}
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCellHeader>Status</StyledTableCellHeader>
              <StyledTableCell>{movie.status}</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCellHeader>Language</StyledTableCellHeader>
              <StyledTableCell>{movie.original_language}</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCellHeader>Production</StyledTableCellHeader>
              <StyledTableCell>
                {getCommaSeperatedText(movie.production_companies)}
              </StyledTableCell>
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
