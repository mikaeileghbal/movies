import React, { useState } from "react";
import "../App.css";
import AppBar from "@mui/material/AppBar";
import { IconButton, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";
import { CSSTransition } from "react-transition-group";
import { SlHome } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineMovie } from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { closeSearch, toggleSearch } from "../features/searchSlice";

export default function Sidebar() {
  //const [showSearch, setShowSearch] = useState(false);
  const { showSearch } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goToUrl = (url) => {
    console.log("Menu Clicked ================================");
    navigate(url);
    //setShowSearch(false);
    dispatch(closeSearch());
  };

  const handleToggleSearch = (e) => {
    e.stopPropagation();
    //setShowSearch((old) => !old);
    dispatch(toggleSearch());
  };

  const handleClose = (e) => {
    //setShowSearch(false);
    dispatch(closeSearch());
  };

  return (
    <>
      <AppBar
        p={0}
        position="fixed"
        sx={{
          top: { xs: "auto", lg: 0 },
          bottom: { xs: 0 },
          left: 0,
          width: { xs: "100%", lg: "100px" },
          background: "black",
          borderRight: { xs: "none", lg: "1px solid #222" },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "center",
            py: { lg: 4 },
            p: { xs: 0 },
            m: 0,
            minHeight: { xs: "0px" },
          }}
        >
          <Stack
            width="100%"
            spacing={7}
            direction={{ xs: "row", lg: "column" }}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <IconButton color="inherit" onClick={() => goToUrl("/")}>
              <SlHome
                size={26}
                color={pathname === "/" ? "#42a5f5" : "white"}
              />
            </IconButton>
            <IconButton color="inherit" onClick={() => goToUrl("/movie")}>
              <MdOutlineMovie
                size={26}
                color={pathname.startsWith("/movie") ? "#42a5f5" : "white"}
              />
            </IconButton>
            <IconButton color="inherit" onClick={() => goToUrl("/tv")}>
              <SlScreenDesktop
                size={26}
                color={pathname.startsWith("/tv") ? "#42a5f5" : "white"}
              />
            </IconButton>
            <IconButton color="inherit" onClick={handleToggleSearch}>
              <IoSearchOutline
                size={26}
                color={showSearch === true ? "#42a5f5" : "white"}
              />
            </IconButton>
            {/* <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton> */}
          </Stack>
        </Toolbar>
      </AppBar>
      <CSSTransition
        in={showSearch}
        classNames="slideDown"
        timeout={300}
        unmountOnExit
        mountOnEnter
      >
        <Search />
      </CSSTransition>
    </>
  );
}
