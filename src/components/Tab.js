import { Box, Button } from "@mui/material";
import React, { Children, useState } from "react";

export default function Tab({ children }) {
  const [active, setActive] = useState(children[0].props.name);

  const items = Children.toArray(children);

  return (
    <Box>
      <Box>
        {items.map((item) => (
          <Button
            disableRipple
            sx={{
              color: item.props.name === active ? "white" : "#585858",
              fontSize: "20px",
              padding: "4px 0",
              borderRadius: "0",
              borderBottom: `2px solid ${
                item.props.name === active ? "white" : "transparent"
              }`,
              ":hover": {
                color: "white",
                bgcolor: "transparent",
              },
            }}
            variant="text"
            onClick={() => setActive(item.props.name)}
          >
            {item.props.name}
          </Button>
        ))}
      </Box>
      <Box>{items.filter((item) => item.props.name === active)}</Box>
    </Box>
  );
}
