import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
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
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/500?api_key=3e35d5ea16674bcc971aee7ed10f0919"
      );
      const result = await res.json();

      console.log(result);
      setMovie(result);
    };

    getMovies();
  }, []);

  return (
    <Box component="main" sx={{ marginLeft: { xs: 0, lg: "100px" } }}>
      <Hero movie={movie} />
      <TrendMovie />
      <TrendTv />
      <Footer />
    </Box>
  );
}
