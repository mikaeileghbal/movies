import {
  Box,
  Chip,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import { Link, useParams } from "react-router-dom";
import apiEndpoint from "../../utils/apiEndpoints";
import useMovieVideos from "../../hooks/useMovieVideos";
import Loading from "../Loading";
import styled from "@emotion/styled";
import { StyledSubText } from "../../styles/global";

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: "12px",
}));

export default function Video() {
  const [filter, setFilter] = useState("all");
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [videoCount, setVideoCount] = useState(0);

  const { type, id } = useParams();

  const routePath = apiEndpoint[type].video;

  routePath.url = routePath.url.replace("{_id}", id);

  const { isLoading, videos } = useMovieVideos(routePath.url);

  const handleChange = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };

  useEffect(() => {
    if (filter !== "all") {
      setFilteredVideos(
        videos.filter(
          (item) => item.type.toLowerCase() === filter.toLowerCase()
        )
      );
    } else {
      setFilteredVideos(videos);
    }
    setVideoCount(filteredVideos.length);
  }, [filter, videos, filteredVideos.length]);

  if (isLoading) return <Loading />;

  return (
    <>
      <Box px={0} mt={1} mb={4} sx={{ display: "flex", alignItems: "center" }}>
        <FormControl
          sx={{
            m: 0,
            minWidth: 160,
            border: "1px solid transparent",
            backgroundColor: "rgba(255,255,255,0.07)",
          }}
          size="small"
        >
          <Select
            id="filter"
            value={filter}
            onChange={handleChange}
            sx={{ fontSize: "12px" }}
            p={0}
            m={0}
          >
            <StyledMenuItem value="all" selected>
              All
            </StyledMenuItem>
            <StyledMenuItem value="featurette">Featurette</StyledMenuItem>
            <StyledMenuItem value="behind the scenes">
              Behind the scenes
            </StyledMenuItem>
            <StyledMenuItem value="trailer">Trailer</StyledMenuItem>
            <StyledMenuItem value="teaser">Teaser</StyledMenuItem>
          </Select>
        </FormControl>
        <StyledSubText>{videoCount} Videos</StyledSubText>
      </Box>
      <Grid
        pr={6.5}
        container
        mb={6}
        columnSpacing={2}
        rowSpacing={5}
        sx={{ backgroundColor: "transparent" }}
      >
        {filteredVideos?.map((video) => (
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
    </>
  );
}
