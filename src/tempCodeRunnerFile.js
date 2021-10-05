fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_NEWKEY}&language=en-US&page=1`, {    //gets the most popular movies from api and sets them into the state
      "method": "GET",
      "mode": "cors"
      })