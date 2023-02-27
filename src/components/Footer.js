import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Stack } from "@mui/system";

export default function Footer() {
  return (
    <Box sx={{ ml: 7 }}>
      <Typography component="p" variant="body2" sx={{ color: "gray", mb: 1 }}>
        © 2023 Jason Ujma-Alvis. All rights reserved. Cookie Policy.
      </Typography>
      <Typography component="p" variant="body2" sx={{ color: "gray" }}>
        Designed and built by me, data provided by TMDb.
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        mt={4}
        mb={{ xs: 10, lg: 4 }}
        color="gray"
      >
        <IconButton color="inherit">
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit">
          <GitHubIcon />
        </IconButton>
        <IconButton color="inherit">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="inherit">
          <EmailOutlinedIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
