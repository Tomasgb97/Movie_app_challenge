const fetchTopMovies = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_NEWKEY}&language=en-US&page=1`,
    {
      //gets the most popular movies from api and sets them into the state
      method: "GET",
      mode: "cors",
    }
  );

  const json = await data.json();

  return json.results ? json.results : [];
};

const fetchQuery = async (query) => {
  if (query !== "") {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_NEWKEY}&language=en-US&query=${query}&page=1&include_adult=false`,
      {
        method: "GET",
        mode: "cors",
      }
    );

    const json = await data.json();
    return json.results ? json.results : [];
  } else {
    return fetchTopMovies();
  }
};

const getGenres = async () => {
  const genresFetch = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_NEWKEY}&language=en-US`,
    {
      //gets all genres from api
      method: "GET",
      mode: "cors",
    }
  );

  const json = await genresFetch.json();
  return json.genres;
};

const getActorbio = async (idNumber) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/person/${idNumber}?api_key=${process.env.REACT_APP_NEWKEY}&language=en-US`,
    {
      method: "GET",
      mode: "cors",
    }
  );

  const json = await data.json();
  return json;
};

const getActorMovies = async (idNumber) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/person/${idNumber}/movie_credits?api_key=${process.env.REACT_APP_NEWKEY}&language=en-US`,
    {
      method: "GET",
      mode: "cors",
    }
  );

  const json = await data.json();
  return json.cast;
};

const getCast = async (idNumber) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${idNumber}/credits?api_key=${process.env.REACT_APP_NEWKEY}&language=en-US)`
  );
  const json = await data.json();
  const silcedCast = json.cast.slice(0, 10);
  return silcedCast;
};

export {
  fetchTopMovies,
  fetchQuery,
  getGenres,
  getActorbio,
  getActorMovies,
  getCast,
};
