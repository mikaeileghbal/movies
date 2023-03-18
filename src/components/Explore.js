import { Box, Button, Card, CardActionArea } from "@mui/material";
import React from "react";

export default function Explore({ url }) {
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
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display:
              //transform: "scale(0.97)",
            }}
          >
            <Button
              variant="text"
              component="a"
              href={url}
              sx={{
                fontSize: 16,
                fontWeight: "400",
                textTransform: "capitalize",
                color: "white",
              }}
            >
              Explore All
            </Button>
          </Box>
        </Box>
      </CardActionArea>
    </Card>

    // <Card>
    //   <Box
    //     sx={{
    //       position: "relative",
    //       width: "100%",
    //       height: "80%",
    //       overflow: "hidden",
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <Button
    //       variant="text"
    //       component="a"
    //       href={url}
    //       sx={{
    //         fontSize: 16,
    //         fontWeight: "400",
    //         textTransform: "capitalize",
    //         color: "white",
    //       }}
    //     >
    //       Explore All
    //     </Button>
    //   </Box>
    // </Card>
  );
}
