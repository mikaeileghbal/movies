import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import React, { memo } from "react";
import { StyledCardTitle, StyledSubText } from "../styles/global";
import { CardImage } from "./CardImage";

export default memo(CastCard);

function CastCard({ item }) {
  return (
    <Card
      sx={{
        maxWidth: 330,
        background: "transparent",
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
      }}
    >
      <Box disableRipple sx={{ cursor: "pointer" }}>
        <Box
          sx={{
            pt: "150%",
            position: "relative",
            backgroundColor: "#202124",
            height: 0,
            overflow: "hidden",
          }}
        >
          <CardImage
            src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
          />
        </Box>
        <CardContent sx={{ padding: "8px 0 0 " }}>
          <StyledCardTitle>{item.name}</StyledCardTitle>
          <StyledSubText mt={-0.5}>{item.character}</StyledSubText>
        </CardContent>
      </Box>
    </Card>
  );
}
