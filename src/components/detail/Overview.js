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
import React from "react";

export default function Overview() {
  return (
    <Grid container sx={{ backgroundColor: "red" }}>
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
    <Box sx={{ backgroundColor: "green" }}>
      <Box
        sx={{
          height: "0",
          paddingTop: "150%",
          backgroundColor: "rgba(0,0,0,0.2",
        }}
      >
        left
      </Box>
    </Box>
  );
}

function OverviewInfo() {
  return (
    <Box sx={{ backgroundColor: "blue" }}>
      <Typography variant="h2">Storyline</Typography>
      <Typography variant="p">
        With the price on his head ever increasing, John Wick uncovers a path to
        defeating The High Table. But before he can earn his freedom, Wick must
        face off against a new enemy with powerful alliances across the globe
        and forces that turn old friends into foes.
      </Typography>
      <TableContainer component={Box}>
        <Table size="small" sx={{ maxWidth: "500px" }}>
          <TableBody>
            <TableRow>
              <TableCell>Released</TableCell>
              <TableCell>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Runtime</TableCell>
              <TableCell>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Director</TableCell>
              <TableCell>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Budget</TableCell>
              <TableCell>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Revenue</TableCell>
              <TableCell>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Genre</TableCell>
              <TableCell>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Language</TableCell>
              <TableCell>22 March 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Production</TableCell>
              <TableCell>22 March 2023</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
