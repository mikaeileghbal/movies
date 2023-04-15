import React from "react";
import { Box } from "@mui/system";
import Footer from "./Footer";
import Header from "./Header";
import { useMovieContext } from "../providers/MovieProvider";
import SearchResult from "./SearchResult";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function ViewSelection({ children, movie }) {
  //const { movie } = useMovieContext();
  const { searchTerm } = useMovieContext();

  return (
    <TransitionGroup>
      {searchTerm ? (
        <CSSTransition
          in={searchTerm}
          appear={true}
          timeout={{ enter: 500, exit: 300 }}
          classNames="slideUp2"
          key={searchTerm}
          unmountOnExit
        >
          <SearchResult />
        </CSSTransition>
      ) : (
        <CSSTransition
          in={searchTerm}
          appear={true}
          timeout={{ enter: 500, exit: 300 }}
          classNames="slideUp"
          key={searchTerm}
          unmountOnExit
        >
          <Box
            sx={{
              paddingLeft: { xs: 0, lg: "100px" },
              position: "absolute",
              width: "100%",
            }}
          >
            <Header movie={movie} />
            <Box component="main" pl={7} mt={7}>
              {children}
            </Box>
            <Footer />
          </Box>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
}
