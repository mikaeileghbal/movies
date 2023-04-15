import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";
import getTheme from "./styles/theme";
import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import List from "./pages/List";
import Detail from "./pages/Detail";
import MovieProvider from "./providers/MovieProvider";

const ColorModeContext = createContext({});
export const useColorMode = () => useContext(ColorModeContext);

function App() {
  const location = useLocation();
  const [mode, setMode] = useState("dark");
  const theme = useMemo(() => getTheme(mode), [mode]);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((mode) => (mode === "light" ? "dark" : "light"));
        console.log("called...");
      },
    }),
    []
  );

  return (
    <MovieProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <TransitionGroup component="div">
            <CSSTransition
              key={location.pathname}
              timeout={{ enter: 700, exit: 300 }}
              classNames="fadeIn"
              appear={true}
              unmountOnExit
              mountOnEnter
            >
              <Routes location={location}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/movie" element={<Movie />} />
                <Route exact path="/tv" element={<Tv />} />
                <Route
                  exact
                  path="/movie/category/:category"
                  element={<List />}
                />
                <Route exact path="/tv/category/:category" element={<List />} />
                <Route exact path="/:type/:id" element={<Detail />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>

          <Sidebar />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </MovieProvider>
  );
}

export default App;
