let favList: number[] =
  localStorage.getItem("favourites") !== null
    ? JSON.parse(localStorage.getItem("favourites")!)
    : [];

const addMovieToFavs = (movieid: number): void => {
  favList.push(movieid);

  localStorage.setItem("favourites", JSON.stringify(favList));
};

const deleteMovieFromFavs = (movieid: number) => {
  const indexOfMovie = favList.findIndex(
    (element: number) => element === movieid
  );

  favList.splice(indexOfMovie, 1);

  localStorage.setItem("favourites", JSON.stringify(favList));
};

const isMovieFav = (movieid: number): boolean => {
  const indexOfMovie = favList.findIndex(
    (element: number) => element === movieid
  );
  if (indexOfMovie === -1) {
    return false;
  } else {
    return true;
  }
};

const clearFavList = (): void => {
  favList = [];
  localStorage.setItem("favourites", JSON.stringify(favList));
};

const setNewFavList = (array: number[]): void => {
  localStorage.setItem("favourites", JSON.stringify(array));
  favList = array;
};

export {
  addMovieToFavs,
  deleteMovieFromFavs,
  isMovieFav,
  clearFavList,
  setNewFavList,
  favList,
};
