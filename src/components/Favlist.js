let favList =
  localStorage.getItem("favourites") !== null
    ? JSON.parse(localStorage.getItem("favourites"))
    : [];

const addMovieToFavs = (movieobject) => {
  favList.push(movieobject);

  localStorage.setItem("favourites", JSON.stringify(favList));
  console.log(favList);
};

const deleteMovieFromFavs = (movieid) => {
  const indexOfMovie = favList.findIndex((element) => element.id === movieid);

  favList.splice(indexOfMovie, 1);

  localStorage.setItem("favourites", JSON.stringify(favList));
  console.log(favList);
};

const isMovieFav = (movieid) => {
  const indexOfMovie = favList.findIndex((element) => element === movieid);
  if (indexOfMovie === -1) {
    return false;
  } else {
    return true;
  }
};

const clearFavList = () => {
  favList = [];
  localStorage.setItem("favourites", JSON.stringify(favList));
};

const setNewFavList = (array) => {
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
