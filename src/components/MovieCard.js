import { Box, Card, CardContent } from "@mui/material";
import React, { memo } from "react";
import { StyledCardTitle, StyledRatingSmall } from "../styles/global";
import StarIcon from "@mui/icons-material/Star";
import { useLocation, useNavigate } from "react-router-dom";

import "../App.css";
import { CardImage } from "./CardImage";
import apiEndpoint from "../utils/apiEndpoints";

function Image({ item }) {
  return <CardImage src={`${apiEndpoint.imageBaseUrl}${item.poster_path}`} />;
}
const MemoCardImage = memo(Image);

function Content({ item }) {
  return (
    <CardContent
      sx={{
        display: { xs: "none", md: "block" },
        border: "none",
        padding: "10px 0 0",
      }}
    >
      <StyledCardTitle>{item.title ? item.title : item.name}</StyledCardTitle>

      <Box
        sx={{
          width: 200,
          display: "flex",
          alignItems: "center",
        }}
      >
        {item.vote_average >= 0 && (
          <>
            <StyledRatingSmall
              size="small"
              value={item.vote_average / 2}
              readOnly
              precision={0.1}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 1, color: "gray", fontSize: "14px" }}>
              {item.vote_average}
            </Box>
          </>
        )}
      </Box>
    </CardContent>
  );
}
const MemoCardContent = memo(Content);

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
      <Box sx={{ cursor: "pointer" }}>
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
          {/* <CardImage src={`${apiEndpoint.imageBaseUrl}${item.poster_path}`} /> */}
          <MemoCardImage item={item} />
        </Box>
        <MemoCardContent item={item} />
        {/* <CardContent
          sx={{
            display: { xs: "none", md: "block" },
            border: "none",
            padding: "10px 0 0",
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
            {item.vote_average >= 0 && (
              <>
                <StyledRatingSmall
                  size="small"
                  value={item.vote_average / 2}
                  readOnly
                  precision={0.1}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Box sx={{ ml: 1, color: "gray", fontSize: "14px" }}>
                  {item.vote_average}
                </Box>
              </>
            )}
          </Box>
        </CardContent> */}
      </Box>
    </Card>
  );
}
