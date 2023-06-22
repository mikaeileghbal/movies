import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../store/sagaActions";

export default function useMovieCollection(url) {
  const { items } = useSelector((state) => state.search);
  const { error } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: Actions.REQUEST_SEARCH, payload: { url } });
    // const getData = async () => {
    //   setLoading(true);
    //   try {
    //     const res = await fetch(url);
    //     const result = await res.json();
    //     setItems((state) => [...state, ...result.results]);
    //     setLoading(false);
    //   } catch (err) {
    //     setLoading(false);
    //   }
    // };
    // getData();
  }, [dispatch, url]);

  return { items, error };
}
