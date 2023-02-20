import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2779a7",
    },
    secondary: {
      main: "#000",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
