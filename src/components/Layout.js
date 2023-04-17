import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../App.css";
import { ScrollToTop } from "../hooks/ScrollTop";

export default function Layout() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Sidebar />
      <TransitionGroup component="div">
        <CSSTransition
          key={location.pathname}
          timeout={{ enter: 700, exit: 300 }}
          classNames="fadeIn"
          appear={true}
          unmountOnExit
          mountOnEnter
        >
          <Box
            sx={{
              paddingLeft: { xs: 0, lg: "100px" },
              position: "absolute",
              width: "100%",
            }}
          >
            <Header />
            <Box component="main" pl={7} mt={7}>
              <Outlet />
            </Box>
            <Footer />
          </Box>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}
