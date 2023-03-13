import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";
import getTheme from "./styles/theme";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

function App() {
  const [mode, setMode] = useState("dark");
  const theme = getTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movie" element={<Movie />} />
          <Route exact path="/tv" element={<Tv />} />
        </Routes>
        <Sidebar />
      </Router>
    </ThemeProvider>
  );
}

export default App;
