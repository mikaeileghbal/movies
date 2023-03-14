import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";
import getTheme from "./styles/theme";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const location = useLocation();
  const [mode, setMode] = useState("dark");
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={500}
          classNames="fadeIn"
        >
          <div>
            <Routes location={location}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/movie" element={<Movie />} />
              <Route exact path="/tv" element={<Tv />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
