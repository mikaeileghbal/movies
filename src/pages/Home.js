import React from "react";
import { Hero } from "../components";

const featuredMovie = {
  title: "Women Talking",
  image: "./images/women-talking.jpg",
  description:
    "A group of women in an isolated religious colony struggle to reconcile their faith with a series of sexual assaults committed by the colony's men.",
  rating: 3.7,
};
export default function Home() {
  return <Hero movie={featuredMovie} />;
}
