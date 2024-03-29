import {
  Box,
  Chip,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import { StyledCardTitle, StyledSubText } from "../../styles/global";
import { useSelector } from "react-redux";

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: "12px",
}));

export default function Video() {
  const [filter, setFilter] = useState("all");
  const { videos } = useSelector((state) => state.detail);

  const filteredVideos =
    filter !== "all"
      ? videos.filter(
          (item) => item.type.toLowerCase() === filter.toLowerCase()
        )
      : videos;

  const videoCount = filteredVideos.length;

  const handleChange = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };

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
        <StyledSubText ml={1}>{videoCount} Videos</StyledSubText>
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
              <StyledCardTitle mt={1.5}>{video.name}</StyledCardTitle>
              <StyledSubText>{video.type}</StyledSubText>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
