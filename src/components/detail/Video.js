import { Box, Chip, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import { Link, useParams } from "react-router-dom";
import apiEndpoint from "../../utils/apiEndpoints";
import useMovieVideos from "../../hooks/useMovieVideos";
import Loading from "../Loading";

export default function Video() {
  const { type, id } = useParams();

  const routePath = apiEndpoint[type].video;

  routePath.url = routePath.url.replace("{_id}", id);
  console.log(routePath);

  const { isLoading, videos } = useMovieVideos(routePath.url);

  if (isLoading) return <Loading />;

  return (
    <Grid
      pr={6.5}
      container
      mb={6}
      columnSpacing={2}
      rowSpacing={5}
      sx={{ backgroundColor: "transparent" }}
    >
      {videos?.map((video) => (
        <Grid item xs={4}>
          <Link
            to={`https://youtube.com/watch?v=${video.key}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Box
              sx={{
                height: "0",
                paddingBottom: "56.25%",
                backgroundColor: "rgba(255,255,255,0.07)",
                position: "relative",
              }}
            >
              <Chip
                label="1:20"
                sx={{
                  borderRadius: "0",
                  backgroundColor: "black",
                  padding: "4px 0px",
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: 0,
                }}
              >
                <PlayCircleFilledWhiteOutlinedIcon sx={{ fontSize: 50 }} />
              </IconButton>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "0.4px",
              }}
              mt={1.5}
              mb={1}
            >
              {video.name}
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                letterSpacing: "0.4px",
                color: "#80868b",
              }}
            >
              {video.type}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
