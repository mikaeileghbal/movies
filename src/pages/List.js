import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation, useParams } from "react-router-dom";

import apiEndpoint from "../utils/apiEndpoints";
import MovieCard from "../components/MovieCard";
import { Box, Grid, Typography } from "@mui/material";
import Loading from "../components/Loading";
import useScrollObserver from "../hooks/useScrollObserver";
import { useDispatch, useSelector } from "react-redux";
import { requestCollection } from "../features/collectionSlice";

export default function List() {
  return (
    <>
      <ListView />
      <ListStatus />
    </>
  );
}

function ListView() {
  const { items } = useSelector((state) => state.collection);
  const { isLoading } = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  console.log("Render happend here ....................................");
  //const { searchTerm } = useMovieContext();
  const [page, setPage] = useState(1);
  const { category } = useParams();
  const location = useLocation();

  const type = location.pathname.split("/")[1];
  const { url, title } = apiEndpoint[type][category];
  const urlWithPage = useMemo(() => `${url}&page=${page}`, [url, page]);

  //const { items, loading } = useMovieCollection(urlWithPage);

  let bottomBoundryRef = useRef(null);

  const handlePage = useCallback(() => setPage((page) => page + 1), [setPage]);

  const { scrollObserver } = useScrollObserver(handlePage);

  useEffect(() => {
    if (bottomBoundryRef.current) {
      scrollObserver(bottomBoundryRef.current);
    }
  }, [bottomBoundryRef, scrollObserver]);

  useEffect(() => {
    dispatch(requestCollection({ url: urlWithPage }));
  }, [urlWithPage, dispatch]);

  if (isLoading) return <Loading />;

  return (
    <Box
      component="section"
      sx={{ paddingLeft: { xs: 0, lg: "100px" } }}
      mt={7}
    >
      <Typography
        variant="h2"
        fontSize={24}
        fontWeight={400}
        mb={3}
        sx={{ textTransform: "capitalize", px: { xs: 0, lg: 0 } }}
      >
        {title}
      </Typography>
      <Grid
        container
        columnSpacing={1}
        mb={6}
        sx={{
          backgroundColor: "transparent",
          pr: { xs: 0, lg: 8 },
          minHeight: "100vh",
        }}
      >
        {items?.map((item) => (
          <Grid item xs={12 / 5} key={item.id}>
            <MovieCard item={item} />
          </Grid>
        ))}
      </Grid>
      <div ref={bottomBoundryRef}></div>
    </Box>

    // <TransitionGroup>
    //   {searchTerm ? (
    //     <CSSTransition
    //       in={searchTerm}
    //       appear={true}
    //       timeout={{ enter: 500, exit: 300 }}
    //       classNames="slideUp2"
    //       key={searchTerm}
    //       unmountOnExit
    //     >
    //       <SearchResult />
    //     </CSSTransition>
    //   ) : (
    //     <CSSTransition
    //       in={searchTerm}
    //       appear={true}
    //       timeout={{ enter: 500, exit: 300 }}
    //       classNames="slideUp"
    //       key={searchTerm}
    //       unmountOnExit
    //     >
    //       <Box>
    //         <Typography
    //           variant="h2"
    //           fontSize={24}
    //           fontWeight={400}
    //           mb={3}
    //           sx={{ textTransform: "capitalize", px: { xs: 0, lg: 0 } }}
    //         >
    //           {title}
    //         </Typography>
    //         <Grid
    //           container
    //           columnSpacing={1}
    //           mb={6}
    //           sx={{
    //             backgroundColor: "transparent",
    //             px: { xs: 0, lg: 0 },
    //             minHeight: "100vh",
    //           }}
    //         >
    //           {items?.map((item) => (
    //             <Grid item xs={12 / 5} key={item.id}>
    //               <MovieCard item={item} />
    //             </Grid>
    //           ))}
    //         </Grid>
    //         <div ref={bottomBoundryRef}></div>
    //         {loading && <Loading />}
    //       </Box>
    //     </CSSTransition>
    //   )}
    // </TransitionGroup>
  );
}

function ListStatus() {
  const { isLoading } = useSelector((state) => state.loading);
  console.log("Loading render happened here ////////////////////");
  if (!isLoading) return null;
  return <Loading />;
}
