import { Box, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { Children, useState } from "react";

export default function Tab({ children }) {
  const [active, setActive] = useState(children[0].props.name);

  const items = Children.toArray(children);

  return (
    <Box component="section" mt={-4} pr={0} mb={0} p={0}>
      <Stack
        direction="row"
        spacing={8}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {items.map((item) => (
          <Button
            disableRipple
            sx={{
              color: item.props.name === active ? "white" : "#585858",
              fontSize: "20px",
              padding: "6px 0",
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
      </Stack>
      <Box sx={{ backgroundColor: "transparent" }} py={5}>
        {items.filter((item) => item.props.name === active)}
      </Box>
    </Box>
  );
}
