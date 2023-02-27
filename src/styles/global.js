import styled from "@emotion/styled";
import { Rating, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const StyledText2 = styled(Typography)(({ theme }) => ({
  variant: "body2",
  color: "gray",
  fontSize: 14,
}));

export const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled": {
    color: theme.palette.primary.main,
  },
  margin: "16px 0 0",
}));

export const StyledCardTitle = styled(Typography)(() => ({
  variant: "h5",
  component: "div",
  fontSize: 15,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  marginBottom: "10px",
}));

export const StyledRatingStack = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
}));
