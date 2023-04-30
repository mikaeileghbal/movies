import styled from "@emotion/styled";
import { Box, IconButton, Rating, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";

export const StyledText2 = styled(Typography)(({ theme }) => ({
  variant: "body2",
  color: "gray",
  fontSize: 14,
}));

export const StyledTitle = styled(Typography)(() => ({
  variant: "h2",
  fontSize: "24px",
  fontWeight: "400",
  marginLeft: "8px",
  textTransform: "capitalize",
  letterSpacing: "0.4px",
}));

export const StyledSubText = styled(Typography)(({ theme }) => ({
  variant: "span",
  color: "#80868b",
  fontSize: "14px",
  fontWeight: "500",

  letterSpacing: "0.4px",
}));

export const StyledTitleContainer = styled(Box)(() => ({
  paddingLeft: "0",
  paddingRight: "0",
  marginTop: "16px",
  marginBottom: "24px",
  display: "flex",
  alignItems: "center",
}));

export const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled": {
    color: theme.palette.primary.main,
  },
  margin: "16px 0 0",
}));

export const StyledRatingSmall = styled(StyledRating)(({ theme }) => ({
  margin: "0",
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

export const StyledIconButton = styled(IconButton)(() => ({
  transition: "0.3s",
  "&:hover": {
    color: "white",
  },
}));

export const StyledIconButtonSocial = styled(IconButton)(({ theme }) => ({
  transition: "0.3s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const StyledButtonNav = styled(Button)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: "86px",
  zIndex: 2,
  minWidth: "50px",
  padding: 0,
  margin: 0,
  fontSize: "30px",
  borderRadius: 0,
  background: "rgba(0, 0, 0, 0.5)",
  color: "white",
  outline: 0,
  transition: "opacity .25s ease, background-color .25s ease",
  "&:hover": { backgroundColor: "black" },
  justifyContent: "flex-end",
}));

export const StyledButtonNavRight = styled(StyledButtonNav)(() => ({
  left: "auto",
  right: 0,
}));
