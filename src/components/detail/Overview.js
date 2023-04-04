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
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Overview() {
  return (
    <Grid container sx={{ backgroundColor: "transparent" }} mt={2}>
      <Grid item md={3} pr={5}>
        <OverviewImage />
      </Grid>
      <Grid item md={9}>
        <OverviewInfo />
      </Grid>
    </Grid>
  );
}

function OverviewImage() {
  return (
    <Box
      sx={{
        height: "0",
        paddingTop: "150%",
        backgroundColor: "rgba(255,255,255,0.06)",
      }}
    ></Box>
  );
}

function OverviewInfo() {
  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <Typography
        variant="h2"
        mb={2}
        sx={{ fontSize: "24px", fontWeight: "400" }}
      >
        Storyline
      </Typography>
      <Typography variant="p">
        With the price on his head ever increasing, John Wick uncovers a path to
        defeating The High Table. But before he can earn his freedom, Wick must
        face off against a new enemy with powerful alliances across the globe
        and forces that turn old friends into foes.
      </Typography>
      <TableContainer component={Box} sx={{ marginTop: 4 }}>
        <Table size="small" sx={{ maxWidth: "500px" }}>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{ border: "none", width: "120px", padding: "8px 0" }}
              >
                Released
              </TableCell>
              <TableCell sx={{ border: "none" }}>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none", padding: "8px 0" }}>
                Runtime
              </TableCell>
              <TableCell sx={{ border: "none" }}>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none", padding: "8px 0" }}>
                Director
              </TableCell>
              <TableCell sx={{ border: "none" }}>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none", padding: "8px 0" }}>
                Budget
              </TableCell>
              <TableCell sx={{ border: "none" }}>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none", padding: "8px 0" }}>
                Revenue
              </TableCell>
              <TableCell sx={{ border: "none" }}>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none", padding: "8px 0" }}>
                Genre
              </TableCell>
              <TableCell sx={{ border: "none" }}>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none", padding: "8px 0" }}>
                Status
              </TableCell>
              <TableCell sx={{ border: "none" }}>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none", padding: "8px 0" }}>
                Language
              </TableCell>
              <TableCell sx={{ border: "none" }}>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none", padding: "8px 0" }}>
                Production
              </TableCell>
              <TableCell sx={{ border: "none" }}>22 March 2023</TableCell>
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
        <GitHubIcon />
      </StyledIconButtonSocial>
      <StyledIconButtonSocial color="inherit">
        <LinkedInIcon />
      </StyledIconButtonSocial>
      <StyledIconButtonSocial color="inherit">
        <EmailOutlinedIcon />
      </StyledIconButtonSocial>
    </Stack>
  );
}
