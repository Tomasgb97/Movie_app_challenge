import React from "react";

interface ContextValueInterface {
  genres: number[];
  fetched: [];
  actualpage: string;
  setActualPage: (arg0: string) => void;
  updateFetchState: (arg0: string) => void;
  setMovies: (arg0: string) => void;
}

const MyContext = React.createContext<ContextValueInterface>({} as ContextValueInterface);

export default MyContext;
