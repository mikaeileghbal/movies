import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/system";
import { StyledCardTitle } from "../styles/global";

export default function renderMovie(item) {
  return (
    <Card sx={{ maxWidth: 330 }}>
      <CardActionArea>
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
            image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              transform: "scale(0.97)",
            }}
          />
        </Box>
        <CardContent>
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
            <Rating
              size="small"
              value={item.vote_average / 2}
              readOnly
              precision={0.1}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2, color: "gray" }}>{item.vote_average}</Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
