import { Box, Button, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../styles/carousel.scss";

export default function Carousel({ items, heading, url, groupSize, render }) {
  console.log("in carousel :", items);
  const [currentIndex, setCurrentIndex] = useState(0);
  const groupCount = Math.ceil(items.length / groupSize);

  const groupItems = (items, groupSize) => {
    let rows = items
      .map(function (item) {
        return render(item);
      })
      .reduce((r, element, index) => {
        index % groupSize === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;
      }, [])
      .map((row) => <div className="carousel-group">{row}</div>);

    return rows;
  };

  const groupedItems = groupItems(items, groupSize);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(items.length / groupSize - 1);
    } else {
      setCurrentIndex((state) => state - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === items.length / groupSize - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((state) => state + 1);
    }
  };

  useEffect(() => {
    // let interval = setInterval(() => {
    //   console.log(currentIndex);
    //   if (Number(currentIndex) === items.length - 1) {
    //     setCurrentIndex(0);
    //   } else {
    //     setCurrentIndex((currentIndex) => currentIndex + 1);
    //   }
    // }, 3000);
    // return () => clearInterval(interval);
  });

  return (
    <Box component="section" mb={6}>
      <CarouselHeader heading={heading} url={url} />
      <CarouselBody
        movies={groupedItems}
        url={url}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={currentIndex}
        groupCount={groupCount}
      />
    </Box>
  );
}

function CarouselHeader({ heading, url }) {
  return (
    <Stack
      direction="row"
      alignItems="baseline"
      spacing={1}
      sx={{ ml: 6, mb: 2 }}
    >
      <Typography variant="h2" fontSize={24} fontWeight={400} ml={1}>
        {heading}
      </Typography>
      <Button
        variant="text"
        component="a"
        href={url}
        sx={{ fontSize: 14, fontWeight: "600", textTransform: "capitalize" }}
      >
        Explore All
      </Button>
    </Stack>
  );
}

function CarouselBody({ movies, onNext, onPrev, currentIndex, groupCount }) {
  return (
    <Stack
      direction="row"
      alignItems="baseline"
      sx={{
        ml: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
      }}
    >
      <IconButton
        disableRipple
        size="large"
        onClick={onPrev}
        className={`${currentIndex === 0 ? "hidden" : ""}`}
        disabled={currentIndex === 0}
      >
        <ArrowBackIosIcon fontSize="inherit" />
      </IconButton>

      <div className="carousel-container">
        <div
          className="inner"
          style={{
            transform: `translate3d(-${
              currentIndex * (100 / groupCount)
            }%,0,0)`,
            width: `calc(100% * ${groupCount})`,
            gridTemplateColumns: `repeat(${groupCount},1fr)`,
          }}
        >
          {movies.map((item) => item)}
        </div>
      </div>

      <IconButton
        disableRipple
        size="large"
        onClick={onNext}
        className={`${currentIndex === movies.length - 1 ? "hidden" : ""}`}
        disabled={currentIndex === movies.length - 1}
      >
        <ArrowForwardIosIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
}
