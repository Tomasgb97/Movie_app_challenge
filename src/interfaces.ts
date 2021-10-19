interface CastInterface {
  id: number;
  name: string;
  profile_path: string;
}

interface ActorInterface {
  name: string;
  profile_path: string;
  birthday: string;
  place_of_birth: string;
  known_for_department: string;
  biography: string;
}

interface ActorMovies {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieInterface {
  title: string;
  id: number;
  vote_count: number;
  vote_average: number;
  poster_path: string;
  overview: string;
  adult: boolean;
  genre_ids: number[];
  genres: { id: number; name: string }[];
  release_date?: string;
  runtime: number;
}

interface FavCardMovie {
  id: number;
  overview: string;
  title: string;
  poster_path: string;
  adult: boolean;
  vote_count: number;
  vote_average: number;
  runtime: number;
  genres: { name: string; id: number }[];
}

interface MoviePageMovie {
  title: string;
  id: number;
  vote_count: number;
  vote_average: number;
  poster_path: string;
  overview: string;
  adult: boolean;
  genres?: number[];
  genre_ids: number[];
}

export type {
  CastInterface,
  ActorInterface,
  ActorMovies,
  MovieInterface,
  FavCardMovie,
  MoviePageMovie,
};
