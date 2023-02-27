import { Box } from "@mui/system";
import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TrendMovie from "../components/TrendMovie";
import TrendTv from "../components/TrendTv";

const featuredMovie = {
  title: "Women Talking",
  image: "./images/women-talking.jpg",
  description:
    "A group of women in an isolated religious colony struggle to reconcile their faith with a series of sexual assaults committed by the colony's men.",
  rating: 3.7,
  reviews: 346,
  year: 2022,
  duration: "1h 57min",
};

export default function Home() {
  return (
    <Box component="main" sx={{ marginLeft: { xs: 0, lg: "100px" } }}>
      <Hero movie={featuredMovie} />
      <TrendMovie />
      <TrendTv />
      <Footer />
    </Box>
  );
}
