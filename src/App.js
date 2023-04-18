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
import Layout from "./components/Layout";
import LayoutList from "./components/LayoutList";
import SearchResult from "./components/SearchResult";
import { ScrollToTop } from "./hooks/ScrollTop";

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
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        <Sidebar />

        <TransitionGroup component="div">
          <CSSTransition
            key={location.pathname}
            timeout={{ enter: 600, exit: 300 }}
            classNames="fadeIn"
            appear={true}
            unmountOnExit
            mountOnEnter
          >
            <div>
              <Routes location={location}>
                <Route element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route exact path="/movie" element={<Movie />} />
                  <Route exact path="/tv" element={<Tv />} />
                  <Route exact path="/:type/:id" element={<Detail />} />
                  <Route
                    exact
                    path="/movie/category/:category"
                    element={<List />}
                  />
                  <Route
                    exact
                    path="/tv/category/:category"
                    element={<List />}
                  />
                  <Route exact path="/search" element={<SearchResult />} />
                </Route>
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
