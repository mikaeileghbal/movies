import { amber, green, grey, red } from "@mui/material/colors";
import { createTheme } from "@mui/material";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          secondary: {
            main: "#333",
          },
          divider: amber[200],
          background: {
            default: green[100],
            paper: green[100],
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: { main: "#42a5f5" },
          secondary: {
            main: "#fff",
          },
          divider: "#42a5f5",
          background: {
            default: "#121212",
            paper: "#121212",
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

const getTheme = (mode) => createTheme(getDesignTokens(mode));

export default getTheme;
