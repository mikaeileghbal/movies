import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2779a7",
    },
    secondary: {
      main: "#000",
    },
    error: {
      main: red.A400,
    },
    bgColor: "#333",
  },
});

export default theme;
