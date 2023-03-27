import React from "react";
import { Box, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Stack } from "@mui/system";
import { StyledIconButton } from "../styles/global";

export default function Footer() {
  return (
    <Box pl={7}>
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
        <StyledIconButton color="inherit">
          <TwitterIcon />
        </StyledIconButton>
        <StyledIconButton color="inherit">
          <GitHubIcon />
        </StyledIconButton>
        <StyledIconButton color="inherit">
          <LinkedInIcon />
        </StyledIconButton>
        <StyledIconButton color="inherit">
          <EmailOutlinedIcon />
        </StyledIconButton>
      </Stack>
    </Box>
  );
}
