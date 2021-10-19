import React from "react";

interface ContextValueInterface {
  genres: { id: number; name: string }[];
  fetched: {
    title: string;
    id: number;
    vote_count: number;
    vote_average: number;
    poster_path: string;
    overview: string;
    adult: boolean;
    genre_ids: number[];
    genres?: number[];
    release_date?: string;
  }[];
  actualpage: string;
  setActualPage: (arg0: number) => void;
  updateFetchState: (arg0: string) => void;
  setMovies: (arg0: number | undefined) => void;
}

const MyContext = React.createContext<ContextValueInterface>(
  {} as ContextValueInterface
);

export default MyContext;
