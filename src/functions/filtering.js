const findMatchingGenresByObject = (fullarray, match) => {

  // if(!match.genre_ids || match.genre_ids == undefined){
  //   return "No genres"
  // }else{
  const filteredArray = fullarray.filter((genre) =>
    match.includes(genre.id)
  ); //filters to get the ones that matches with this movie
  const genresNamesArray = filteredArray.map((genre) => genre.name);
  const joinedArray = genresNamesArray.join(", ");

  return joinedArray;
};

const findMatchingGenresByProps = (fullarray, match) => {
  const filteredArray = fullarray.filter((genre) => match.includes(genre.id)); //filters to get the ones that matches with this movie
  const genresNamesArray = filteredArray.map((genre) => genre.name);
  const joinedArray = genresNamesArray.join(", ");

  return joinedArray;
};

export { findMatchingGenresByObject, findMatchingGenresByProps };
