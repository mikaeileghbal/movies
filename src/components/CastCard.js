import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import React, { memo } from "react";
import { StyledCardTitle, StyledSubText } from "../styles/global";

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
      <CardActionArea disableRipple>
        <Box
          sx={{
            pt: "150%",
            position: "relative",
            backgroundColor: "#202124",
            height: 0,
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w400${item.profile_path}`}
            alt={item.title}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              //transform: "scale(0.97)",
            }}
          />
        </Box>
        <CardContent sx={{ padding: "8px 0 0 " }}>
          <StyledCardTitle>{item.name}</StyledCardTitle>
          <StyledSubText mt={-0.5}>{item.character}</StyledSubText>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
