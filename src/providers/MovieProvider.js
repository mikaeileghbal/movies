import React, { createContext, useContext, useState } from "react";

const MovieContext = createContext({});

export const useMovieContext = () => useContext(MovieContext);

export default function MovieProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchIn, setSearchIn] = useState("false");

  const contextValue = { searchTerm, setSearchTerm, showSearch, setShowSearch };

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
}
