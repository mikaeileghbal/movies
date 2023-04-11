import { Box, Card, CardContent } from "@mui/material";
import React, { memo } from "react";
import { StyledCardTitle, StyledRatingSmall } from "../styles/global";
import StarIcon from "@mui/icons-material/Star";
import { useLocation, useNavigate } from "react-router-dom";

import "../App.css";
import { CardImage } from "./CardImage";

export default memo(MovieCard);

function MovieCard({ item }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const type = pathname.split("/")[1];

  const gotoUrl = () => navigate(`/${item.media_type || type}/${item.id}`);

  return (
    <Card
      sx={{
        maxWidth: 330,
        background: "transparent",
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
      }}
      onClick={gotoUrl}
    >
      <Box disableRipple sx={{ cursor: "pointer" }}>
        <Box
          className="media"
          sx={{
            pt: "150%",
            position: "relative",
            backgroundColor: "#202124",

            height: 0,
            overflow: "hidden",
          }}
        >
          <CardImage
            src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
          />
        </Box>
        <CardContent
          sx={{
            display: { xs: "none", md: "block" },
            border: "none",
            padding: "10px 0 16px",
          }}
        >
          <StyledCardTitle>
            {item.title ? item.title : item.name}
          </StyledCardTitle>

          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <StyledRatingSmall
              size="small"
              value={item.vote_average / 2}
              readOnly
              precision={0.1}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 0, color: "gray" }}>{item.vote_average}</Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
