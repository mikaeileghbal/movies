import React, { createContext, useContext, useState } from "react";

const MovieContext = createContext({});

export const useMovieContext = () => useContext(MovieContext);

export default function MovieProvider({ children }) {
  const [movie, setMovie] = useState({});

  const contextValue = { movie, setMovie };

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
}
